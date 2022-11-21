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
            // creating a new workteam
            $workTeam = new WorkTeam;

        

        } else {
            // updating an existing workteam
            $workTeam = WorkTeam::findOrFail($data['id']);
        }
       
 
        
       
         $workteam->job = $request->get('job');
        $workteam->work_date = $request->get('work_date');
        $workTeam->save();
        // fill the object with data from request
        
        foreach ($data as $value) {
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