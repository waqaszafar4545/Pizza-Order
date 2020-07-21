<?php

namespace App\Http\Traits;

trait ApiResponse
{

    public function success($msg, $data = [], $statusCode = 200)
    {
        return response()->json(array_merge(['status' => 'success', 'success' => $msg], $data), $statusCode);
    }

    public function error($msg, $errors = [], $statusCode = 200)
    {
        if (!is_countable($msg)) {
            $msg = [$msg];
        }
        return response()->json(array_merge(['status' => 'error', 'error' => $msg], $errors), $statusCode);
    }
}
