<?php
/**
 * Created by PhpStorm.
 * User: Abbas Naumani
 * Date: 8/7/2017
 * Time: 5:08 PM
 */

namespace App\Http\Models;

use Illuminate\Database\Eloquent\Model;

class ActivityLog extends Model
{
    protected $table = 'activity_logs';
    public $fillable = ['actor_id', 'user_id', 'record_id', 'statement_id'];

    public function setUpdatedAt($value)
    {
        // Do nothing.
    }

    // A realtion when activity is performed on the user
    public function user()
    {
        return $this->belongsTo(model_path('User'),'user_id');
    }

    // A realtion when activity is performed by any other user (admin)
    public function userPerformed()
    {
        return $this->belongsTo(model_path('User'),'actor_id');
    }

    public function activityStatement()
    {
        return $this->belongsTo(model_path('ActivityStatements'),'statement_id');
    }
}
