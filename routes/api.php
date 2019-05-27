<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::resource('usersAccount','Api\UsersController');

Route::resource('LoginControl','Api\LoginController');

Route::resource('Category','Api\CategoryController');

Route::resource('project','Api\project_create_controller');

Route::resource('IndexItem', 'Api\project_create_controller');

Route::resource('countCategory', 'Api\countCategoryController');

Route::resource('accountData', 'Api\AccountController');

Route::resource('follow', 'Api\FollowController');

Route::resource('statusFollow', 'Api\StatusFollowController');

Route::resource('transaction', 'Api\TransactionController');

// Route::get('project/delete/{id}', 'Api\project_create_controller@destroy');