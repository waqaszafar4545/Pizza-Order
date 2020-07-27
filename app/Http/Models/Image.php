<?php

namespace App\Http\Models;

use Illuminate\Database\Eloquent\Model;

class Image extends Model
{

    public $fillable = ['title', 'path','alt','description','created_at','updated_at'];

}
