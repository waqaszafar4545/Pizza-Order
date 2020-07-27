<?php


namespace App\Http\Services;


use App\Http\Repositories\ProductRepository;
use App\Http\Services\BaseService\BaseService;


class ProductService extends BaseService
{
    public $data = [];
    protected $productRepository;

    public function __construct(ProductRepository $productRepository)
    {
        $this->productRepository = $productRepository;
    }

    public function getProducts()
    {
        try {
            $count = $this->productRepository->getProducts();
            return $this->success('Success', ['data' => $count]);
        } catch (\Exception $e) {
            $this->failureLog("ERROR Occurred " . __FUNCTION__, "ERROR Occurred " . $e->getMessage(), $e);
            return $this->error($e->getMessage(), ['data' => $e]);
        }
    }
}
