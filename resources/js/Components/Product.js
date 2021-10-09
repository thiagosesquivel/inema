import React, { useState } from 'react';
import Button from './Button';
import Input from './Input';

export default function Product({product, removeProduct}) {


    return (
        <div key={product.id} className="w-full flex items-center p-1 row">
            <div className="w-1/3 flex justify-center">
                <p className="font-bold text-lg">{product.name}</p>
            </div>
            <div className="w-1/3 flex justify-start">
                <Input id={product.id} disabled readOnly className="w-1/3 p-1" type="number" value={product.quantity} />
            </div>
            <div className="w-1/3 flex justify-center">
                <button data-product={product.id} type="button" onClick={(e)=>removeProduct(e)} className=" items-center px-4 py-2 hover:bg-opacity-80 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest transition ease-in-out duration-150 text-white flex justify-center bg-red-500">
                    Remover
                </button>
            </div>
        </div>
    )
}
