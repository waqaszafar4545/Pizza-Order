<?php

namespace App\Http\Models;

use Illuminate\Database\Eloquent\Model;
use App\Product;
use App\Order;

class OrderItem extends Model
{
    public $fillable = ['product_id', 'order_id','quantity','price','created_at','updated_at'];

    public function Product(){
        return $this->belongsTo(Product::class);
    }
    public function Order(){
        return $this->belongsTo(Order::class);
    }
    /**
     * Set the products's item Price to float.
     *
     * @param string $value
     * @return floatval
     */
    public function getPriceAttribute($value)
    {
        return floatval($value);
    }
}
