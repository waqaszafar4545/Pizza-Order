<?php

/**
 * Created by PhpStorm.
 * User: Abbas Naumani
 * Date: 2/21/2018
 * Time: 11:00 PM
 */

namespace App\Http\Traits;

use App\Http\Models\ActivityLog;

trait RecordsActivity
{
    public function activityLog($statement_id = 0, $record_id = 0, $user_id = 0)
    {
      //  activityLog($statement_id, $record_id, $user_id);
        $record = array();
        $record['actor_id'] = (loggedinId() > 0) ? loggedinId() : $user_id;
        $record['user_id'] = ($user_id > 0) ? $user_id : loggedinId();
        $record['record_id'] = $record_id;
        $record['statement_id'] = $statement_id;
        ActivityLog::create($record);
    }

}
