<?php


namespace App\Http\Services;

use App\Http\Models\User;
use App\Http\Repositories\UserRepository;
use App\Http\Services\BaseService\BaseService;


class UserService extends BaseService
{
    public $data = [];
    protected $userRepository;

    public function __construct(UserRepository $userRepository)
    {
        $this->userRepository = $userRepository;
    }

    public function test()
    {
        try {
            $count = $this->userRepository->count();
            $count = $count ?? 0;
            return $this->success('Success',['data'=>$count]);
        } catch (\Exception $e) {
            $this->failureLog("ERROR Occurred " . __FUNCTION__, "ERROR Occurred " . $e->getMessage(), $e);
            return 0;
        }
    }
}
