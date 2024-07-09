// pages/transactions.tsx
"use client";

import NavBar from '@/components/Navbar';
import TransactionForm from '../../components/TransactionForm';


export default function Transactions() {
    return (
        <div>
            <NavBar/>
            <h1 className="text-center text-3xl font-bold mt-10">Ingresar Transacción</h1>
            <TransactionForm />
        </div>
    );
}



