<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user_self_assesment', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->id('user_id');
            $table->id('self_assessment_id');
            $table->boolean('answer')->nullable();
            

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('user_self_assesment');
    }
};
