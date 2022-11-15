<?php

namespace App\Http\Controllers\Api;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\WorkTeam;

class WorkPartyController extends Controller
{
    public function index() {
        $workers = User::get();

        return $workers;
    }
}