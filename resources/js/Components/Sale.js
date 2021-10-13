import formatter from '@/Utils/currency';
import { Link } from '@inertiajs/inertia-react';
import React from 'react';

export default function Sale({sale}) {
    return (
            <div key={sale.id} className="flex items-center w-full" >
                <div href={`/details/${sale.id}`} className="flex w-full items-center">
                    <div className="px-6 py-4 whitespace-nowrap w-1/3">
                      {sale.clients.name}
                    </div>
                    <div className="px-6 py-4 whitespace-nowrap w-1/3">
                      {new Date(sale.created_at).toLocaleString()}
                    </div>
                    <div className="px-6 py-4 whitespace-nowrap w-1/3">
                        {formatter.format(sale.total)}
                    </div>
                </div>
            </div>
    )
}
