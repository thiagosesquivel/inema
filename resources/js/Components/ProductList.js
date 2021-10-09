import React, { useEffect } from 'react'
import Product from './Product'

export default function ProductList({products, remove}) {
    useEffect(()=>{

    },[products]);
    return (
        <div className="w-full h-36 overflow-auto mt-2 p-2 bg-white">
            {products.map(product=> <Product removeProduct={remove}  product={product}/>)}
        </div>
    )
}
