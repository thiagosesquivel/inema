<?php

namespace App\Services;

use App\Repository\SalesRepository;

class SalesService{
    protected $salesRepository;

    public function __construct(SalesRepository $salesRepository)
    {
            $this->salesRepository = $salesRepository;
    }

    public function create(array $attributes){
        return $this->salesRepository->create($attributes);
    }

    public function all(){
        return $this->salesRepository->index();
    }

    public function findById($id){
        return $this->salesRepository->findById($id);
    }

    public function delete($id){
        return $this->salesRepository->delete($id);
    }

    public function salesWithRelationship($relationship){
        return $this->salesRepository->salesWithRelationship($relationship);
    }


}
