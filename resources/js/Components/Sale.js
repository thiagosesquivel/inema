import { Link } from '@inertiajs/inertia-react';
import React from 'react';

export default function Sale({sale}) {
    return (
        <div>
            <tr key={sale.id}>
                <Link href={`/details/${sale.id}`}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {sale.user.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {sale.total}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {new Date(sale.created_at).toLocaleString()}
                    </td>

                </Link>
            </tr>
        </div>
    )
}
