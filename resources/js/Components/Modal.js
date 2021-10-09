import React from 'react'
import PageHeader from './PageHeader';
import {GrFormClose} from 'react-icons/gr';

export default function Modal({children, title, closeModal}) {
    return (
        <div className="w-screen h-screen fixed top-0 left-0 bottom-0 right-0 flex items-center justify-center bg-opacity-30 bg-black">
            <div className="bg-white w-3/5 h-3/5 rounded-lg p-6">
                <PageHeader title={title}>
                    <GrFormClose onClick={()=>closeModal()} className="text-gray-300 w-8 h-8 hover:opacity-75 cursor-pointer"/>
                </PageHeader>
                {children}
            </div>
        </div>
    )
}
