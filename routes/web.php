<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\WorkerController;
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


Route::get('/', [LoginController::class, 'index']);

// // get to admin without being logged in as an admin
// Route::get('/admin', [AdminController::class, 'index']);

// get to admin ONLY IF logged in as an admin
// other pertinent file for this shit (look at Gate): 
//    app/Providers/AuthServiceProvider.php
Route::get('/admin', [AdminController::class, 'index'])->middleware('can:admin');
Route::get('/exposure-calculator', [AdminController::class, 'exposureCalculator'])->middleware('can:admin');

//gets specific worker's detail page (used from Admin page)
Route::get('/worker/{id?}', [WorkerController::class, 'detail'])->name('worker.detail');

// logs out
Route::get('/logout', [WorkerController::class, 'logout']);
