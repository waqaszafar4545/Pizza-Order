<?php


namespace App\Http\Services;


use App\Http\Repositories\OrderItemRepository;
use App\Http\Repositories\OrderRepository;
use App\Http\Services\BaseService\BaseService;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;


class OrderService extends BaseService
{
    public $data = [];
    protected $orderRepository;
    protected $orderItemRepository;

    public function __construct(OrderRepository $orderRepository, OrderItemRepository $orderItemRepository)
    {
        $this->orderRepository = $orderRepository;
        $this->orderItemRepository = $orderItemRepository;
    }

    public function createOrder(Request $request)
    {
        try {
            $user = Auth::user();
            $userId = $user->id ?? 0;
            $orderData = $request->orderData ?? [];
            $orderItems = $request->orderItems ?? [];
            if ($orderData && $orderItems && $userId > 0) {
                $orderDataToStore = [];
                $orderDataToStore['user_id'] = $userId;
                $orderDataToStore['address'] = $orderData['address'] ?? '';
                $orderDataToStore['phone_number'] = isset($orderData['phone_number']) ? numericPhone($orderData['phone_number']) : '';
                $orderDataToStore['created_at'] = Carbon::now()->format('Y-m-d H:i:s');
                $order = $this->orderRepository->create($orderDataToStore);
                $orderId = $order->id ?? 0;
                if ($orderId) {
                    foreach ($orderItems as $orderItem) {
                        $orderItemDataToStore = [];
                        $orderItemDataToStore['order_id'] = $orderId;
                        $orderItemDataToStore['product_id'] = $orderItem['id'] ?? 0;
                        $orderItemDataToStore['price'] = $orderItem['price'] ?? 0;
                        $orderItemDataToStore['quantity'] = $orderItem['quantity'] ?? 0;
                        $orderItemDataToStore['created_at'] = Carbon::now()->format('Y-m-d H:i:s');
                        $orderItem = $this->orderItemRepository->create($orderItemDataToStore);
                    }
                }
                return $this->success('Order Stored', ['data' => "Order Stored"]);
            }
            return $this->error('error', ['data' => "Order not created due to invalid data."]);
        } catch (\Exception $e) {
            $this->failureLog("ERROR Occurred " . __FUNCTION__, "ERROR Occurred " . $e->getMessage(), $e);
            return $this->error($e->getMessage(), ['data' => $e]);
        }
    }
}
