"use client";

import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/navigation';

export default function NavBar() {
    const router = useRouter()
    const [loggedIn, setLoggedIn] = useState(false);

    const handleAuthClick = () => {
        if (loggedIn) {
            setLoggedIn(false);
            router.push('/');
        } else {
            router.push('/');
        }
    };

    return (
        <nav className="bg-blue-500 p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex space-x-4">
                    <a href="/transaction" className="text-white hover:underline">
                        Transacciones
                    </a>
                    <a href="/historial" className="text-white hover:underline">
                        Historial
                    </a>
                </div>
                <button onClick={handleAuthClick} className="cursor-pointer text-white flex items-center space-x-2">
                    <FontAwesomeIcon icon={faUser} className="h-6 w-6" />
                    <span>{!loggedIn ? 'Cerrar Sesión' : 'Iniciar Sesión'}</span>
                </button>
            </div>
        </nav>
    );
}


