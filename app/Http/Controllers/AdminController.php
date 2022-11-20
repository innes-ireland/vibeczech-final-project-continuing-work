<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

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

    public function workPartyApi()
    {
        $userList = User::with('')->where('is_admin', 0)->get();
        
        return $userlist;
    }
}
