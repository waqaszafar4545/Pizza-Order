<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class CreateActivityLogsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('activity_logs', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('actor_id');
            //$table->foreign('actor_id')->references('id')->on('users')->onDelete('cascade');
            $table->integer('user_id');
            //   $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->unsignedInteger('statement_id');
            $table->foreign('statement_id')->references('id')->on('activity_statement')->onDelete('cascade');
            $table->integer('record_id');
            $table->timestamp('created_at')->default(DB::raw('CURRENT_TIMESTAMP'));
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('activity_logs');
    }
}
