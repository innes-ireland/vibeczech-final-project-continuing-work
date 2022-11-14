<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PlannedExposure extends Model
{
    use HasFactory;

    public function exposureInstance()
    {
        return $this->hasMany(ExposureInstance::class);
    }
}
