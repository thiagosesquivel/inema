<?php

namespace App\Services;

use App\Repository\ProductsRepository;
use Exception;

class ProductsService{

    protected $productRepository;

    public function __construct(ProductsRepository $productRepository)
    {
        $this->productRepository = $productRepository;
    }

    public function all(){
        return $this->productRepository->index();
    }

    public function verifyQuantity( Int $product_id , Int $quantity){
        $product = $this->productRepository->findById($product_id);

        if(!$product->quantity>=$quantity){
             throw new Exception('Não há a quantidade solicita em estoque') ;
        }

        return;
    }

}
