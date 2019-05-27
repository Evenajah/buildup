<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTransactionTablesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('transaction_tables', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');

            $table->unsignedInteger('project_id');
            $table->foreign('project_id')->references('id')->on('project_creates');


            $table->decimal('currency',10,2)->nullable();
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
        Schema::dropIfExists('transaction_tables');
    }
}
