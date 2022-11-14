<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ExposureInstance extends Model
{
    use HasFactory;

    public function plannedExposure()
    {
        return $this->belongsToOne(PlannedExposure::class);
    }

    public function tool()
    {
        return $this->hasMany(Tool::class);
    }
    
}
