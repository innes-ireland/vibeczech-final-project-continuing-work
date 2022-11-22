<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Auth;

class WorkerController extends Controller
{
    public function detail($id = 0)
    {
      if($id == 0) {
        $user = Auth::user();
      } else {
        $user = User::find($id);
      }

        return view('worker.detail', compact('user'));
    }

    public function logout ()
    {
        return view('login.login');
    }
}
