<?php

namespace App\Http\Controllers\Api;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Tool;

class ToolSelectorController extends Controller
{
public function getTool(){
    $tools = Tool::get();

    return $tools;
}
}