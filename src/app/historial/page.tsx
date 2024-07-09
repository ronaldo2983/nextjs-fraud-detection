// pages/history.tsx
"use client";

import NavBar from '@/components/Navbar';
import TransactionHistory from '../../components/TransactionHistory';

export default function History() {
    return (
        <div>
            <NavBar/>            
            <h1 className="text-center text-3xl font-bold mt-10">Historial de Transacciones</h1>
            <TransactionHistory />
        </div>
    );
}


