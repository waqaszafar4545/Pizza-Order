<?php

namespace App\Http\Repositories;

use App\Http\Models\Order;
use App\Http\Repositories\BaseRepository\BaseRepository;
use App\Http\Repositories\RepositoryInterface\BaseRepositoryInterface;

class OrderRepository extends BaseRepository implements BaseRepositoryInterface
{

    public function __construct(Order $model)
    {
        $this->model = $model;
    }

}
