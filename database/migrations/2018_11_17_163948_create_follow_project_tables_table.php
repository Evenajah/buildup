<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateFollowProjectTablesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('follow_project_tables', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');

            $table->unsignedInteger('project_id');
            $table->foreign('project_id')->references('id')->on('project_creates');
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
        Schema::dropIfExists('follow_project_tables');
    }
}
