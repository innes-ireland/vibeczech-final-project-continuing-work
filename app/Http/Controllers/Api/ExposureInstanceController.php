<<<<<<< HEAD
<? 
use App\Models\PlannedExposure;
use App\Models\User;

class PlannedExposureController extends Controller
{
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
       
   
                $exposureInstance->user_id('user_id');
                $exposureInstance->exposure_value('exposure_value');
                $exposureInstance->exposure_start('exposure_start');
                $exposureInstance->exposure_finish('exposure_finish'); 
                $exposureInstance->duration_minutes('duration_minutes');
                $exposureInstance->tool_id('tool_id');
                
        // fill the object with data from request
        
    

        // respond with data that the frontend might find useful
        return [
            'status' => 'success',
            'exposureInstance' => $exposureInstance
        ];
    }
=======
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


>>>>>>> main
}