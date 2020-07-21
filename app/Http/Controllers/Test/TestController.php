<?php

namespace App\Http\Controllers\Test;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use Illuminate\Http\Request;

class TestController extends Controller
{

    public function __construct()
    {
    }

    public function index()
    {

    }

    public function testMethod(Request $request)
    {

        $requestData = $request->toArray();
        $value = $requestData['dev_method'] ?? 'testFun';
        switch ($value) {
            case 'testForm':
                $this->testForm();
                break;
            default:
                $this->$value($request);
        }
        exit;
    }

    public function testFun()
    {
       echo 'Test fun';
    }

    public function testForm(LoginRequest $request)
    {

        ## repositories need
        $validated = $request->validated();
        $msg='as';
        $data=['asdfsadf','dfdfd'];
        $statusCode=200;
        $this->activityLog();

        return response()->json(array_merge(['status' => 'success', 'success' => $msg], $data), $statusCode);
    }
}
