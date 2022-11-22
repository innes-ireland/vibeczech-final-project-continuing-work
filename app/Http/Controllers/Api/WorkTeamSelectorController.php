<?php

namespace App\Http\Controllers\Api;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\WorkTeam;
use App\Models\User;

class WorkTeamSelectorController extends Controller
{
    public function getWorkTeams() {
        $workteams = WorkTeam::get();

        return $workteams;
    }
}