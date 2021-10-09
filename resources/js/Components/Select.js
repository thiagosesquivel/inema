import React from 'react'

export default function Select({options, change, ...rest}) {
    return (
        <select {...rest} onChange={(e)=>change(e)} className="border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm">
            <option value="">Selecione...</option>
            {options.map(option=><option data-price={option.quantity && option.quantity} key={option.id} value={option.id}>{option.name}</option>)}
        </select>
    )
}
