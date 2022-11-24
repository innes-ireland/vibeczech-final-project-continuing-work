<?php
namespace App\Http\Controllers\Api;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\ExposureInstance;
use App\Models\User;
use App\Models\Tool;

class ExposureInstanceController extends Controller
{
    public function index($id) {
        $exposure = ExposureInstance::where('user_id',$id)->with('tool')->get();
        return $exposure;
    }
 
 
 // function to post data from calculator component to DB 
    public function sendExposureData(Request $request)
    {
        $data = $request->all();
        
        if (empty($data[0]['id'])) {
            // creating a new Exposure Instance
            $exposureInstance = new ExposureInstance;
        
        } else {
            // updating an existing  Exposure Instance
            $exposureInstance = ExposureInstance::findOrFail($data[0]['id']);
        }
       
                $exposureInstance->plan_id = $data['plan_id'];
                $exposureInstance->user_id = $data['user_id'];
                $exposureInstance->exposure_value = $data['exposure_value'];
                $exposureInstance->exposure_start = $data['exposure_start'];
                $exposureInstance->exposure_finish = $data['exposure_finish']; 
                $exposureInstance->duration_minutes = $data['duration_minutes'];
                $exposureInstance->tool_id = $data['tool_id'];
                
        // fill the object with data from request

        // save object into database
        $exposureInstance->save();
        
    

        // respond with data that the frontend might find useful
        return [
            'status' => 'success',
            'exposureInstance' => $exposureInstance
        ];

    }
}