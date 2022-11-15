<?php

namespace App\Http\Controllers\Api;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Tool;

class AddToolController extends Controller
{
    public function store(Request $request)
    {
        $this->validate($request, [
            'name' => 'required',
            'vibration_rating' => 'required|integer',
        ]);

        $data = $request->all();

        if (empty($data['id'])) {
            // creating a new tool
            $tool = new Tool;
        } else {
            // updating an existing mission
            $tool = Tool::findOrFail($data['id']);
        }

        // fill the object with data from request
        $tool->name = $data['name'];
        $tool->manufacturer = $data['manufacturer'];
        $tool->vibration_rating = $data['vibration_rating'];
        $tool->noise_rating = $data['noise_rating'];

        // save the object into the database
        $tool->save();

        // respond with data that the frontend might find useful
        return [
            'status' => 'success',
            'tool' => $tool
        ];
    }
}