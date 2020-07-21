<?php

namespace App\Http\Traits;

use App\Http\Models\DevTestLog;

trait DevTestLogs
{
    public function devTestLog($name = '', $value = '', $jsonData = array())
    {
        $record = [];
        $record['name'] = $name;
        $record['value'] = json_encode($value);
        $record['json_data'] = isset($jsonData) ? json_encode($jsonData) : '';
        DevTestLog::create($record);
    }
}
