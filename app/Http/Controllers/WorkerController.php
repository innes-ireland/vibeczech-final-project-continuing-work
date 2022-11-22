<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Auth;

class WorkerController extends Controller
{
  // directs to specific worker detail page
    public function detail($id = 0)
    {
      // if no id is given, shows logged in user's worker detail page
      // otherwise gets the worker detail page from provided id
      if($id == 0) {
        $user = Auth::user();
      } else {
        $user = User::find($id);
      }

        return view('worker.detail', compact('user'));
    }

    // redirects to login page upon logout
    public function logout ()
    {
        return view('login.login');
    }
}
