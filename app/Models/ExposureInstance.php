<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ExposureInstance extends Model
{
    use HasFactory;
    protected $table = 'exposure_instance';

    protected $fillable = [
                'plan_id',
                'user_id',
                'exposure_value',
                'exposure_start',
                'exposure_finish',
                'duration_minutes',
                'tool_id',
    ];

    public function plannedExposure()
    {
        return $this->belongsToOne(PlannedExposure::class);
    }

    public function tool()
    {
        return $this->hasMany(Tool::class);
    }

     public function user()
    {
        return $this->belongsToOne(User::class);
    }
}
