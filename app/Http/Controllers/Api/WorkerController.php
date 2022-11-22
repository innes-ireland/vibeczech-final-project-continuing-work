<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\User;
use Auth;

class WorkerController extends Controller
{
    public function detail($id = 0)
    {
    // putting the default (/api/worker) won't show up in your browswer
    // but it still works as an api for the purposes of react apps
      if($id == 0) {
        $user = Auth::user();
      } else {
        $user = User::find($id);
      }

      return $user;
    }
}
