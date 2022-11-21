<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\WorkTeam;

class AdminController extends Controller
{
    public function addTool()
    {
        return view('admin.tool-adder-modal');
    }

    
    public function exposureCalculator()
    {

        return view('admin.exposure-calculator');
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
        $workTeams = WorkTeam::with('users')->get();
        return $workTeams;        
    }
}
