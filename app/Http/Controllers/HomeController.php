<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
  // redirects to login page
    public function index ()
    {
        return view('homepage.home');
    }
}