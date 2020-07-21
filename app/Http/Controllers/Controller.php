<?php

namespace App\Http\Controllers;

use App\Http\Traits\ApiResponse;
use App\Http\Traits\CommonMethods;
use App\Http\Traits\DevTestLogs;
use App\Http\Traits\FailureLogs;
use App\Http\Traits\RecordsActivity;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    use AuthorizesRequests;
    use DispatchesJobs;
    use ValidatesRequests;
    /*## Custom Traits  ##*/
    use FailureLogs;
    use DevTestLogs;
    use RecordsActivity;
    use CommonMethods;
    use ApiResponse;
}

