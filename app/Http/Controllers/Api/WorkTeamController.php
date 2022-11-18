<?php

namespace App\Http\Controllers\Api;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\WorkTeam;
use App\Models\User;

class WorkTeamController extends Controller
{
    public function store(Request $request)
    {
        // $this->validate($request, [
        //     'id' => 'required',
        // ]);

        $data = $request->all();

        if (empty($data['id'])) {
            // creating a new tool
            $workTeam = new WorkTeam;

        } else {
            // updating an existing mission
            $workTeam = WorkTeam::findOrFail($data['id']);
        }
       

$workTeam->save();
        // fill the object with data from request
        
        foreach ($data as $value) {
            // $user = User::find(1);
            // dd($value);
            $workTeam->users()->attach($value['id']);
            
            
        }
        // $data->users()->attach($userId);
       

        // save the object into the database
        

        // respond with data that the frontend might find useful
        return [
            'status' => 'success',
            // 'tool' => $tool
        ];
    }
}