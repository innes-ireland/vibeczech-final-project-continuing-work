<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tool extends Model
{
    use HasFactory;

    public function plannedExposure()
    {
        return $this->belongsTo(PlannedExposure::class);
    }

    public function exposureInstance()
    {
        return $this->belongsToMany(ExposureInstance::class);
    } 

    public function certificates()
    {
        return $this->belongsToMany(Certificate::class);
    }

}
