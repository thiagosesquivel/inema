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
        return $this->sales->create($attributes);
    }

    public function index(){
        return $this->sales->all();
    }

    public function findById($id){
        return $this->sales->find($id);
    }

    public function salesWithRelationship(array $relationship){
        return $this->sales->with($relationship)->get();
    }

    public function delete($id){
        return $this->sales->destroy($id);
    }

}
