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
        Schema::create('planned_exposure', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->id('created_by');
            $table->id('worker_exposed');
            $table->datetime('exposure_start');
            $table->datetime('exposure_end');
            $table->id('tool_id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('planned_exposure');
    }
};
