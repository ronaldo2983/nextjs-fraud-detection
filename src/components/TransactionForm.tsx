"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function TransactionForm() {
    const [cardNumber, setCardNumber] = useState<string>('');
    const [amount, setAmount] = useState<string>('');
    const [location, setLocation] = useState<string>('');
    const [merchant, setMerchant] = useState<string>('');
    const [date, setDate] = useState<string>('');
    const [result, setResult] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Lógica para enviar la transacción
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
                <div className="flex justify-between mb-6">
                    <Link href="/transaction" className="text-blue-500 hover:underline">
                        Transacciones
                    </Link>
                    <Link href="/historial" className="text-blue-500 hover:underline">
                        Historial
                    </Link>
                </div>
                <h1 className="text-2xl font-bold mb-6">Ingresar Transacción</h1>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <input 
                        type="text" 
                        value={cardNumber} 
                        onChange={(e) => setCardNumber(e.target.value)} 
                        placeholder="Últimos 4 Dígitos de la Tarjeta" 
                        required 
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input 
                        type="number" 
                        value={amount} 
                        onChange={(e) => setAmount(e.target.value)} 
                        placeholder="Monto" 
                        required 
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input 
                        type="text" 
                        value={location} 
                        onChange={(e) => setLocation(e.target.value)} 
                        placeholder="Provincia" 
                        required 
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input 
                        type="text" 
                        value={merchant} 
                        onChange={(e) => setMerchant(e.target.value)} 
                        placeholder="Tipo de Comercio" 
                        required 
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    
                    <button 
                        type="submit" 
                        className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
                    >
                        Verificar Transacción
                    </button>
                </form>
                {result && <p className="mt-4 text-center text-lg">Resultado: {result}</p>}
            </div>
        </div>
    );
}
