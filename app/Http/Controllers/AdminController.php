<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ExposureInstance;
use App\Models\Tool;
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
        // return view('worker.records',[records'=>$records]);

        $worker = User::find($id);

        return view('worker.records', compact('worker'));
    }

    // shows table to edit one record
    public function showThisRecord($recordId = 0) {
        // $record = ExposureInstance::find($recordId);
        // $tools = Tool::get();

        // return view('worker.edit-record', compact([
        //   'record', 
        //   // 'tools'
        // ]));

        return view('worker.edit-record', compact(['recordId']));
        
    }

    // actually updates the database, needs serious editing
    public function editThisRecord(Request $request,$recordId) {
      // I think I'm going to need a var like this for each thing that can
      // be edited?

        // // need dropdown of tools for this in the form that gives me tool_id
        // $tool = $request->input('tool_id');

        // // no fucking clue how to feed this one in
        // $duration = $request->input('duration_minutes');

        // // just a text field that only accepts numbers if possible
        // $expVal = $request->input('exposure_value');

        // unsure how this needs to be edited
        // DB::update('
        // update exposure_instance 
        // set tool_id = ? 
        // set duration_minutes = ?
        // set exposure_value = ?
        // where id = ?
        // ',[$tool, $duration, $expVal, $recordId]);

        $record = ExposureInstance::find($recordId);

        $record->tool_id = $request->input('tool_id');
        $record->duration_minutes = $request->input('duration_minutes');
        $record->exposure_value = $request->input('exposure_value');
        $record->save();


        // echo "Record updated successfully.<br/>";

        // // TODO: maybe just make this a button that's always available on this page instead
        // echo '<a href = "/show-record/?">Click Here</a> to go back.', [$recordId];
    }
}
