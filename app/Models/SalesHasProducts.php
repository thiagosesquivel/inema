<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SalesHasProducts extends Model
{
    use HasFactory;

    protected $table = 'sales_has_products';

    public function products(){
        return $this->hasOne(Products::class, 'id','product_id');
    }

}
