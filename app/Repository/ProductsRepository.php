<?php

namespace App\Repository;

use App\Models\Products;

class ProductsRepository{
    protected $products;


    public function __construct(Products $products)
    {
        $this->products = $products;
    }


    public function index(){
        return $this->products->all();
    }

    public function findById($id){
        return $this->products->find($id);
    }

}
