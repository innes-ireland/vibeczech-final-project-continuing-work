<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DocumentationController extends Controller
{
  // redirects to documentation page
    public function docPage ()
    {
        return view('Documentation/documentation');
    }
}