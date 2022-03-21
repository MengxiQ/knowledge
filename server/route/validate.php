<?php
use think\facade\Route;
Route::post('validate/login','Validate/login');
Route::post('super/login','Validate/superLogin');
Route::get('super/info','Validate/superInfo');