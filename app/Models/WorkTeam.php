<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class WorkTeam extends Model
{
    use HasFactory;
    protected $table = 'workteams';

    public function users() {
        return $this->belongsToMany(User::class, 'user_workteam', 'work_team_id', 'user_id' ); 

    }

    
}
