<?php

namespace App\Services;

use App\Repository\SalesHasProductsRepository;

class SalesHasProductsService{

    protected $saleHasProductsRepository;

    public function __construct(SalesHasProductsRepository $saleHasProductsRepository)
    {
        $this->saleHasProductsRepository = $saleHasProductsRepository;
    }

    public function create(array $attributes){
       return $this->saleHasProductsRepository->create($attributes);
    }



}
