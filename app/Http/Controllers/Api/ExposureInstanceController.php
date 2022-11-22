<?php

namespace App\Http\Controllers\Api;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\ExposureInstance;
use App\Models\User;
use App\Models\Tool;

class ExposureInstanceController extends Controller
{
    public function index($id) {
        $exposure = ExposureInstance::where('user_id',$id)->with('tool')->get();
        return $exposure;
    }


}