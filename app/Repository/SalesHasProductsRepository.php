<?php

namespace App\Repository;

use App\Models\SalesHasProducts;

class SalesHasProductsRepository{
    protected $salesHasProducts;


    public function __construct(SalesHasProducts $salesHasProducts)
    {
        $this->salesHasProducts = $salesHasProducts;
    }

    public function create(array $attributes){
        $this->salesHasProducts->insert($attributes);
    }

}
