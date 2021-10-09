import React from 'react';

export default function Button({ type = 'submit', click =undefined, className = '', processing, children }) {
    return (
        <button
            type={type}
            onClick={click && click()}
            className={
                `inline-flex items-center px-4 py-2 hover:bg-opacity-80 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest transition ease-in-out duration-150 ${
                    processing && 'opacity-25'
                } ` + className
            }
            disabled={processing}
        >
            {children}
        </button>
    );
}
