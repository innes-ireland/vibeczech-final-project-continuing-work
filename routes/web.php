<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\WorkerController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\DocumentationController;

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::get('/login', [LoginController::class, 'index']);

// // get to admin without being logged in as an admin
// Route::get('/admin', [AdminController::class, 'index']);

// get to admin ONLY IF logged in as an admin
// other pertinent file for this shit (look at Gate): 
//    app/Providers/AuthServiceProvider.php
Route::get('/admin', [AdminController::class, 'index'])->middleware('can:admin');

// needs to make sure I'm feeding in the right stuff
Route::post('/edit-record/{recordId}', [AdminController::class, 'editThisRecord'])->middleware('can:admin');
Route::get('/exposure-calculator', [AdminController::class, 'exposureCalculator'])->middleware('can:admin');

Route::get('/records/{workerId?}', [AdminController::class, 'workerRecords'])->middleware('can:admin');
Route::get('/show-record/{recordId?}', [AdminController::class, 'showThisRecord'])->middleware('can:admin');

//gets specific worker's detail page (used from Admin page)
Route::get('/worker/{id?}', [WorkerController::class, 'detail'])->name('worker.detail');

// logs out
Route::get('/logout', [WorkerController::class, 'logout']);
Route::get('/', [HomeController::class, 'index']);
Route::get('/documentation', [DocumentationController::class, 'docPage']);
