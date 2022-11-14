<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function addTool()
    {
        return view('admin.tool-adder-modal');
    }

    public function index()
    {
        return view('admin.index');
    }

    public function logout ()
    {
        return view('login.login');
    }
}
