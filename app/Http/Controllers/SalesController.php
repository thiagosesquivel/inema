<?php

namespace App\Http\Controllers;

use App\Models\Sales;
use App\Services\ClientsService;
use App\Services\ProductsService;
use App\Services\SalesService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SalesController extends Controller
{

    protected $salesService, $productsService, $clientsService;

    public function __construct(SalesService $salesService, ProductsService $productsService, ClientsService $clientsService)
    {
        $this->salesService = $salesService;
        $this->productsService =  $productsService;
        $this->clientsService = $clientsService;
    }

    public function index()
    {
        $sales = $this->salesService->all();
        return Inertia::render('List', ['sales'=>$sales] );
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $clients = $this->clientsService->all();
        $products =  $this->productsService->all();
        return Inertia::render('Create',['clients'=>$clients, 'products'=>$products]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Sales  $sales
     * @return \Illuminate\Http\Response
     */
    public function show(Sales $sales)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Sales  $sales
     * @return \Illuminate\Http\Response
     */
    public function edit(Sales $sales)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Sales  $sales
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Sales $sales)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Sales  $sales
     * @return \Illuminate\Http\Response
     */
    public function destroy(Sales $sales)
    {
        //
    }
}
