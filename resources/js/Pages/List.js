import PageHeader from '@/Components/PageHeader'
import SalesList from '@/Components/SalesList'
import Guest from '@/Layouts/Guest'
import { Link } from '@inertiajs/inertia-react'
import React,{useEffect} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function List({sales, flash}) {

    useEffect(() => {
        flash.success && toast.success(flash.success)
        flash.error && toast.error(flash.error)
    }, [])


    return (
        <Guest>
            <PageHeader title="Vendas">
                <Link className="bg-blue-500 hover:bg-opacity-80 text-white font-bold rounded-lg p-1 pl-3 pr-3" href="/new/sale">Nova venda</Link>
            </PageHeader>
            {sales ? <SalesList sales={sales}/>: <h1>Não há o que exibir</h1>}
            <ToastContainer/>
        </Guest>
    )
}
