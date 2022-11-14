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
        Schema::create('exposure_instance', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->unsignedBigInteger('plan_id');
            $table->unsignedBigInteger('user_id');
            $table->integer('exposure_value');
            $table->timestamps('exposure_start');
            $table->timestamps('exposure_finish');
            $table->integer('duration_minutes');
            $table->unsignedBigInteger('tool_id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('exposure_instance');
    }
};
