<?php

if (!function_exists('is_logged_in')) {
    function is_logged_in()
    {
        return (loggedinId() > 0) ? true : false;
    }
}

if (!function_exists('appIdMask')) {
    function appIdMask($userId = 0)
    {
        $maskKey = tokenKey() . '_' . $userId;
        return encode($maskKey);
    }
}

if (!function_exists('loggedinId')) {
    function loggedinId()
    {
        return session('user_id', '0');
    }
}

if (!function_exists('loggedinName')) {
    function loggedinName()
    {
        return session('first_name', '');
    }
}

if (!function_exists('userRoleId')) {
    function userRoleId()
    {
        return intval(session('role_id', 0));
    }
}

if (!function_exists('adminRoleId')) {
    function adminRoleId()
    {
        return intval(session('admin_role_id', 1));
    }
}

if (!function_exists('tokenKey')) {
    function tokenKey()
    {
        return 'REMIT|SCANNER';
    }
}
