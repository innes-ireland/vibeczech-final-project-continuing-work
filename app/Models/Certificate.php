<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Certificate extends Model
{
    use HasFactory;
   public function tool()
   {
    return $this->belongsToMany(Tool::class);
   } 
   public function user()
   {
    return $this->hasOne(User::class);
   }
}
