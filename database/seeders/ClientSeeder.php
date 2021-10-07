<?php

namespace Database\Seeders;

use App\Models\Client;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;
use Faker\Factory as Faker;

class ClientSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker =  Faker::create('pt_BR');
        for($i=0; $i<50; $i++){
            Client::create([
                'name'=> $faker->name,
                'email'=> $faker->email,
                'cpf'=> $faker->cpf
            ]);
        }
    }
}
