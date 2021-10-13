import PageHeader from '@/Components/PageHeader'
import Guest from '@/Layouts/Guest'
import { Link } from '@inertiajs/inertia-react'
import React from 'react'

export default function Details({sale}) {
    return (
        <Guest>
            <PageHeader title={`Detalhes do pedido ${sale.id}`}>
                <Link href="/sales" className="text-blue-500 hover:opacity-75 underline">Voltar</Link>
            </PageHeader>
            {JSON.stringify(sale)}
        </Guest>
    )
}
