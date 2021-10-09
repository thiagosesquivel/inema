<?php


namespace App\Repository;

use App\Models\Sales;

class SalesRepository{
    protected $sales;


    public function __construct(Sales $sales)
    {
        $this->sales = $sales;
    }

    public function create(array $attributes){
        $this->sales->insert($attributes);
    }

    public function index(){
        $this->sales->all();
    }

}
