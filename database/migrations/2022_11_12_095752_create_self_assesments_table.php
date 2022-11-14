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
        Schema::create('self_assesments', function (Blueprint $table) {
            $table->id();
            $table->id('worker_id');
            $table->timestamps();
            $table->boolean('Have you suffered from your hands/fingers going white?');
            $table->boolean('if yes (within the last two years) does it occur in response to cold/damp conditions?')->nullable();
            $table->boolean('while working?')->nullable();
            $table->boolean('at other times')->nullable();
            $table->string('when did you first notice this?')->nullable();
            $table->boolean('does it occur yearly?')->nullable();
            $table->boolean('does it occur monthly?')->nullable();
            $table->boolean('does it occur weekly?')->nullable();
            $table->boolean('does it occur daily?')->nullable();
            $table->string('state the most common circumstances')->nullable();
            $table->boolean('do you experience symptoms elsewhere?')->nullable();
            $table->string('please state where')->nullable();
            $table->boolean('do you have tingling fingers in response to cold?')->nullable();
            $table->boolean('with blanching?')->nullable();
            $table->boolean('while working?')->nullable();
            $table->boolean('at other times?')->nullable();
            $table->string('if other times, what circumstances and for how long?');
            $table->timestamps('when did you first notice this?');
            $table->boolean('do you have difficulty handling or manipulating small objects?')->nullable();
            $table->string('if yes when does this occur?')->nullable();
            $table->boolean('does this affect your work or leisure time?')->nullable();
            $table->string('if yes give details')->nullable();
            $table->boolean('are you experiencing issues with the muscles or joints of your hands/wrists/elbows/shoulders')->nullable();
            $table->boolean('if yes are you experiencing pain')->nullable();
            $table->boolean('if yes are you experiencing swelling?')->nullable();
            $table->boolean('if yes are you experiencing stiffness?')->nullable();
            $table->boolean('if yes are you experiencing weakness?')->nullable();
            $table->boolean('are you right handed?')->nullable();
            $table->boolean('is this your leading hand?')->nullable();
            $table->timestamps('when did you start using vibrating tools')->nullable();
            $table->string('when do you notice the vibration most?')->nullable();
            $table->timestamps('if you have stopped using vibrating tools when did you stop?');
            $table->boolean('have you been exposed to any chemicals at work?')->nullable();
            $table->boolean('do any of your hobbies expose you to havs?')->nullable();
            $table->boolean('do you smoke')->nullable();
            $table->int('if yes how many per day?')->nullable();
            $table->boolean('do you drink?')->nullable();
            $table->int('if yes how many units per week?')->nullable();
            $table->boolean('do any of your family members suffer from whitefinger')->nullable();
            $table->string('if yes can you give details?')->nullable();
            $table->boolean('Have you ever had an operation/injury on your hands/elbows/shoulders/joints')->nullable();
            $table->boolean('if yes were there any after effects')->nullable();
            $table->boolean('do any of your family members suffer from whitefinger')->nullable();
            $table->string('if so who?')->nullable();
            $table->boolean('are you on any kind of medication?')->nullable();





            



        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('self_assesments');
    }
};
