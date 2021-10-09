import React from 'react'

export default function PageHeader({title, children}) {
    return (
        <>
            <div className="flex items-center justify-between pb-4">
                <h1 className="font-bold text-2xl">{title}</h1>
                {children}
            </div>
            <hr></hr>
        </>
    )
}
