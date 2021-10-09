import PageHeader from '@/Components/PageHeader'
import SalesList from '@/Components/SalesList'
import Guest from '@/Layouts/Guest'
import { Link } from '@inertiajs/inertia-react'
import React from 'react'

export default function List(props) {
    return (
        <Guest>
            <PageHeader title="Vendas">
                <Link className="bg-blue-500 hover:bg-opacity-80 text-white font-bold rounded-lg p-1 pl-3 pr-3" href="/new/sale">Nova venda</Link>
            </PageHeader>
            {props.sales ? <SalesList sales={props.sales}/>: <h1>Não há o que exibir</h1>}
        </Guest>
    )
}
