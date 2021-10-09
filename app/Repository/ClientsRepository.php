<?php

namespace App\Repository;

use App\Models\Client;

class ClientsRepository{
    protected $clients;


    public function __construct(Client $clients)
    {
        $this->clients = $clients;
    }


    public function index(){
       return $this->clients->all();
    }

}
