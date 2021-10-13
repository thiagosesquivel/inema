import React from 'react';
import 'react-toastify/dist/ReactToastify.css';


export default function Guest({ children }) {
    return (
        <div className="h-screen w-screen flex items-center justify-center bg-gray-100 p-6">
            <div className="w-full h-full p-4 pr-6 pl-6 bg-white shadow-md overflow-hidden sm:rounded-lg">
                {children}
            </div>
        </div>
    );
}
