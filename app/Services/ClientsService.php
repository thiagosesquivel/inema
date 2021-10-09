<?php

namespace App\Services;

use App\Repository\ClientsRepository;

class ClientsService{

    protected $clientRepository;

    public function __construct(ClientsRepository $clientRepository)
    {
        $this->clientRepository = $clientRepository;
    }

    public function all(){
        return $this->clientRepository->index();
    }


}
