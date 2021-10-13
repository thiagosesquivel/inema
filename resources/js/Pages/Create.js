import React, { useEffect, useState } from 'react'
import Button from '@/Components/Button'
import PageHeader from '@/Components/PageHeader'
import Select from '@/Components/Select'
import Guest from '@/Layouts/Guest'
import { Link, useForm } from '@inertiajs/inertia-react'
import Modal from '@/Components/Modal'
import Input from '@/Components/Input'
import ProductList from '@/Components/ProductList'
import formatter from '@/Utils/currency'
import { toast, ToastContainer } from 'react-toastify'




export default function Create({clients, products}) {
    const [isOpened, setIsOpened] = useState(false);
    const [error, setError] = useState('');
    const { data, setData, post } = useForm({
        client:null,
        products:[],
        total:0
    });
    useEffect(() => {

    }, [])


    function handleClick(){
        setIsOpened(!isOpened);
    }

    function handleChange(e) {
        const value = e.target.value;
        const name = e.target.name;
        setData(`${name}`, value);
    }

    function calculateTotal(products){
        return products.reduce((accumulator, current)=>
            accumulator += current.total
        ,0);
    }

    function handleSubmit(e){
        e.preventDefault();
        const alvo = e.target;
        const element = alvo.querySelector('#produto');
        const id =  element.value
        const quantity = alvo.querySelector('#quantity').value
        const selectedOption = element.querySelector(`option[value="${id}"]`);
        const product = products.find(product=> product.id==id);
        const name = selectedOption.text;
        const price = selectedOption.dataset.price
        if(product.quantity>= quantity){
            const produto = {
                id,
                name,
                price,
                quantity,
                total:price* quantity
            }
            const newArray = [...data.products, produto];
            const total = calculateTotal(newArray);
            setData({...data,"products":newArray,"total": total});
            setIsOpened(!isOpened)
        }else{
            setError('Quantidade selecionada maior do que a disponível');
        }
    }



    function removeProduct(e){
        const targetProduct =  e.target.dataset.product;
        let productIndex = data.products.findIndex(product=> product.id==targetProduct);
        const newArray = data.products.splice(productIndex+1, 1);
        const total = calculateTotal(newArray);
        setData({ ...data, 'products':[...newArray], 'total': total})
    }


    function handleSubmitSalesForm(e){
        e.preventDefault();
        if(!data.client || data.products.length==0){
            toast.error('Todos os campos precisam ser preenchidos')
        }
        else
        {
            post('/new/sale');
        }
    }

    return (
        <Guest>
            <PageHeader title="Nova venda">
                <div className="flex items-center">
                    <Link className="bg-red-500 hover:bg-opacity-80 text-white font-bold rounded-lg p-1 pl-3 pr-3" href="/sales">Cancelar</Link>
                </div>
            </PageHeader>
            <form onSubmit={ handleSubmitSalesForm }>
                <div className="bg-gray-100 rounded-lg mb-4 mt-4 p-2">
                    <div className="bg-gray-200 w-full flex items-center justify-center p-1">
                        <h3 className="font-bold  text-xl">Clientes</h3>
                    </div>
                    <div className="flex flex-col mt-4 w-2/5">
                        <h3 className="text-xl">Selecione o cliente</h3>
                        <Select options={clients} name="client" change={(e)=>handleChange(e)} />
                    </div>
                </div>
                <div className="bg-gray-100 rounded-lg mb-4 p-2">
                    <div className="bg-gray-200 w-full flex items-center justify-center p-1">
                        <h3 className="font-bold  text-xl">Produtos</h3>
                    </div>
                    <div className="w-full flex justify-end flex-col items-end">
                        <Button type="button" click={()=>handleClick}  className="flex mt-2 justify-self-end bg-blue-500">Adicionar produto</Button>
                        <ProductList remove={removeProduct} products={data.products}/>
                    </div>
                </div>
                <div className="flex justify-between pl-6 pr-6">
                    <Button className="bg-green-500 font-bold rounded-lg p-1 pl-3 pr-3">Cadastrar</Button>
                    <p className="text-xl"><b>Total:</b>  {formatter.format(data.total)}</p>
                </div>
            </form>
                {isOpened &&
                    <Modal closeModal={handleClick} title="Adicionar produto a compra">
                        <form onSubmit={handleSubmit}>
                            <div className="flex flex-col mt-2 w-3/5">
                                <label className="font-bold text-lg">Produto</label>
                                <select id="produto"  className="border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm">
                                    {products.map((product)=><option data-price={product.price && product.price} key={product.id} value={product.id}>{product.name}</option>)}
                                </select>
                            </div>
                            <div className="flex flex-col mt-2 w-4/5">
                                <label className="font-bold text-lg">Quantidade</label>
                                <Input id="quantity"  className={` w-2/5 ${error && 'border-red-500'}`} isFocused={error&& true}  name="quantity" type="number" step="1" min="1" />
                                {error!=='' && <p className="text-red-500 font-bold">{error}</p>}
                            </div>
                            <Button className="bg-blue-500 mt-4">Adicionar</Button>
                        </form>
                    </Modal>}
            <ToastContainer/>

        </Guest>
    )
}
