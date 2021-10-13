import React, { useEffect } from 'react'
import Product from './Product'

export default function ProductList({products, remove}) {
    useEffect(()=>{

    },[products]);
    return (
        <div className="w-full h-36 overflow-auto mt-2 p-2 bg-white">
            <div className="w-full relative top-0 bg-blue-400 text-white flex items-center">
                <div className="w-1/5 text-center p-2 uppercase">Nome do produto</div>
                <div className="w-1/5 text-center p-2 uppercase">Quantidade</div>
                <div className="w-1/5 text-center p-2 uppercase">Valor Und.</div>
                <div className="w-1/5 text-center p-2 uppercase">Valor Total</div>
                <div className="w-1/5 text-center p-2 uppercase"></div>
            </div>
            {products.map(product=> <Product key={product.id} removeProduct={remove}  product={product}/>)}
        </div>
    )
}
