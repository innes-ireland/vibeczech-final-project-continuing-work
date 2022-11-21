<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// POST  for adding tools to database 

Route::post('/tools/add', [App\Http\Controllers\Api\AddToolController::class, 'store']);
Route::get('/tools', [App\Http\Controllers\Api\ToolSelectorController::class, 'getTool']);
Route::get('/work-party', [App\Http\Controllers\Api\WorkPartyController::class, 'index']);
Route::post('/new-work-party', [App\Http\Controllers\Api\WorkTeamController::class, 'store']);
Route::get('/list-work-teams', [App\Http\Controllers\AdminController::class, 'workTeamApi']);