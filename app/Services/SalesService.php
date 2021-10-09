<?php

namespace App\Services;

use App\Repository\SalesRepository;

class SalesService{
    protected $salesRepository;

    public function __construct(SalesRepository $salesRepository)
    {
            $this->salesRepository = $salesRepository;
    }

    public function create(){

    }

    public function all(){
        return $this->salesRepository->index();
    }



}
