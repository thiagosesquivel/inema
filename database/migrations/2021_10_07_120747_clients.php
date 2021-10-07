<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Clients extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('clients', function(Blueprint $table){
            $table->uuid('id')->primary();
            $table->string('name', 255);
            $table->string('email',255);
            $table->string('cpf',12);
            $table->timestamps();
        });
    }

    /**
     *
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
      Schema::dropIfExists('clients');
    }
}
