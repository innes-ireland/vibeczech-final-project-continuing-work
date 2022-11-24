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
Route::get('/workteams',[App\Http\Controllers\Api\WorkTeamSelectorController::class, 'getWorkTeams']);
Route::get('/workteam-names/{id}',[App\Http\Controllers\Api\WorkTeamSelectorController::class, 'getWorkerNames']);
Route::post('/new-work-party', [App\Http\Controllers\Api\WorkTeamController::class, 'store']);
Route::get('/list-work-teams', [App\Http\Controllers\AdminController::class, 'workTeamApi']);

//gets specific worker's info in an API
Route::get('/worker/{id?}', [App\Http\Controllers\Api\WorkerController::class, 'detail']);

// gets specific exposure instance
Route::get('/exposure/{id}', [App\Http\Controllers\Api\ExposureInstanceController::class, 'index']);

Route::get('/exposure-detail/{id}', [App\Http\Controllers\Api\ExposureInstanceController::class, 'show']);
