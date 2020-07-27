<?php

namespace App\Http\Repositories;

use App\Http\Models\OrderItem;
use App\Http\Repositories\BaseRepository\BaseRepository;
use App\Http\Repositories\RepositoryInterface\BaseRepositoryInterface;

class OrderItemRepository extends BaseRepository implements BaseRepositoryInterface
{

    public function __construct(OrderItem $model)
    {
        $this->model = $model;
    }

}
