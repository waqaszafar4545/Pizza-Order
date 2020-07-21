<?php

namespace App\Http\Services\BaseService;

use App\Http\Traits\ApiResponse;
use App\Http\Traits\CommonMethods;
use App\Http\Traits\DevTestLogs;
use App\Http\Traits\FailureLogs;
use App\Http\Traits\RecordsActivity;

class BaseService
{
    /*## Custom Traits  ##*/
    use FailureLogs;
    use DevTestLogs;
    use RecordsActivity;
    use CommonMethods;
    use ApiResponse;
}
