<?php

namespace App\Http\Controllers;

use App\Models\Sales;
use Exception;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Services\SalesService;
use App\Services\ClientsService;
use App\Services\ProductsService;
use Illuminate\Support\Facades\Redirect;
use App\Services\SalesHasProductsService;

class SalesController extends Controller
{

    protected $salesService, $productsService, $clientsService, $salesHasProductService;

    public function __construct( SalesHasProductsService $salesHasProductService, SalesService $salesService, ProductsService $productsService, ClientsService $clientsService)
    {
        $this->salesService = $salesService;
        $this->productsService =  $productsService;
        $this->clientsService = $clientsService;
        $this->salesHasProductService =$salesHasProductService;
    }

    public function index()
    {
        $sales = $this->salesService->salesWithRelationship(['clients', 'saleHasProducts.products']);
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
        try{
            $sale =  $request->only('client', 'total');
            $newSale = $this->salesService->create(["client_id"=>$sale['client'], 'total'=>$sale['total']]);
            $products = $request->only(['products']);
            foreach($products as $product){
                $this->productsService->verifyQuantity($product[0]['id'], $product[0]['quantity']);
                $this->salesHasProductService->create(['product_id'=>$product[0]['id'], 'quantity'=>$product[0]['quantity'],'sale_id'=> $newSale['id']]);
            }

           return redirect()->route('list')->with(['success'=>'Venda inserida com sucesso']);

        }catch(Exception $e){

            $this->salesService->delete($newSale['id']);
            return redirect(route('list'), 500, ['error'=> $e->getMessage()]);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Sales  $sales
     * @return \Illuminate\Http\Response
     */

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
