<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
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

    // redirects to login page upon logout
    public function logout ()
    {
        return view('login.login');
    }

    public function workTeamApi()
    {
        $workTeams = WorkTeam::with('users')->get();
        return $workTeams;        
    }


    // shows all records for one worker
    public function workerRecords($id = 0) {
        // // If my other way doesn't work then...
        // // TODO: need to make this select all records with user_id = to $id
        // $records = DB::select('select * from student');
        // return view('worker.records',['records'=>$records]);

        $worker = User::find($id);

        return view('worker.records', compact('worker'));
    }

    // shows table to edit one record
    public function showThisRecord($recordId = 0) {
        // // TODO: need to make this select record that matches $recordId
        // $record = DB::select('select * from student where id = ?',[$id]);
        // return view('worker.edit-record',['record'=>$record]);

        return view('worker.edit-record');
    }

    // actually updates the database, needs serious editing
    public function editThisRecord(Request $request,$recordId) {
      // I think I'm going to need a var like this for each thing that can
      // be edited?
        $name = $request->input('stud_name');
        // unsure how this needs to be edited
        DB::update('update student set name = ? where id = ?',[$name,$id]);
        echo "Record updated successfully.<br/>";

        // TODO: maybe just make this a button that's always available on this page instead
        echo '<a href = "/records">Click Here</a> to go back.';
    }
}
