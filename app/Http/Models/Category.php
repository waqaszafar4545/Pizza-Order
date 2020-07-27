<?php

namespace App\Http\Models;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    public $fillable = ['title','created_at','updated_at'];
}
