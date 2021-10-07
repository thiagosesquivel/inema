<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class SalesHasProducts extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sales_has_products', function(Blueprint $table){
            $table->uuid('id')->primary();
            $table->foreignUuid('sale_id')->references('id')->on('sales');
            $table->foreignUuid('product_id')->references('id')->on('products');
            $table->integer('quantity');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('sales_has_products');
    }
}
