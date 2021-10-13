<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sales extends Model
{
    use HasFactory;
    protected $fillable = ['client_id', 'total'];

    public function clients(){
        return $this->hasOne(Client::class, 'id', 'client_id');
    }

    public function saleHasProducts()
    {
        return $this->hasMany(SalesHasProducts::class, 'sale_id','id');
    }
}
