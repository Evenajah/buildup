<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class ProjectCreate extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('project_creates', function (Blueprint $table) {
            $table->increments('id');
            $table->string('user_create');
            $table->string('topic');
            $table->string('category');
            $table->longText('detail');
            $table->string('image',20)->default('nopic.jpg');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('project_create');
    }
}
