<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PlannedExposure extends Model
{
    use HasFactory;
     protected $table = 'planned_exposure';

     protected $fillable = [
                'created_by',
                'worker_exposed',
                'exposure_start',
                'exposure_end',
                'tool_id'
    ];

    public function exposureInstance()
    {
        return $this->hasMany(ExposureInstance::class);
    }
}
