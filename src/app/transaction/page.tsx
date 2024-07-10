"use client";
import NavBar from '@/components/Navbar';
import TransactionForm from '../../components/TransactionForm';

export default function Transactions() {
    return (
        <div className="min-h-screen bg-[#F5F7FA]">
            <NavBar/>
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-center text-3xl font-bold mt-10 text-[#1A202C]">Ingresar Transacción</h1>
                <TransactionForm />
            </div>
        </div>
    );
}




