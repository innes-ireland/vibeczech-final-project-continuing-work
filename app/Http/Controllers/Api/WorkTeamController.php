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

        
        if (empty($data[0]['id'])) {
            // creating a new workteam
            $workTeam = new WorkTeam;

        

        } else {
            // updating an existing workteam
            $workTeam = WorkTeam::findOrFail($data[0]['id']);
        }
       
 
        // dd($request->input('job'));
       
         $workTeam->job = $data[1]['job'];
        $workTeam->work_date = $data[1]['work_date'];
        $workTeam->save();
        // fill the object with data from request
        
        foreach ($data[0] as $value) {
            // $user = User::find(1);
            // dd($value);
            $workTeam->users()->attach($value['id']);
            
            
        }

        
     
        

        // respond with data that the frontend might find useful
        return [
            'status' => 'success',
            
        ];
    }
}