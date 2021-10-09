<?php

namespace App\Services;

use App\Repository\ProductsRepository;

class ProductsService{

    protected $productRepository;

    public function __construct(ProductsRepository $productRepository)
    {
        $this->productRepository = $productRepository;
    }

    public function all(){
        return $this->productRepository->index();
    }


}
