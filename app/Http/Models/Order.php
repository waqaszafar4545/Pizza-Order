<?php

namespace App\Http\Models;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{

    public $fillable = ['user_id','address', 'phone_number','created_at','updated_at'];

    public function User(){
        return $this->belongsTo(User::class);
    }

    public function OrderItems(){
        return $this->hasMany(OrderItem::class);
    }

}
