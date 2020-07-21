<?php

namespace App\Http\Models;

use Illuminate\Database\Eloquent\Model;

class DevTestLog extends Model
{
    protected $table = 'dev_test_logs';
    public $fillable = ['name', 'value', 'json_data'];

    public function setUpdatedAt($value)
    {
        // Do nothing.
    }
}
