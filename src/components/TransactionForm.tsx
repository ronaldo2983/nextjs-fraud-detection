"use client";

import { useState } from 'react';

export default function TransactionForm() {
    const [cardNumber, setCardNumber] = useState<string>('');
    const [amount, setAmount] = useState<string>('');
    const [location, setLocation] = useState<string>(''); 
    const [merchant, setMerchant] = useState<string>(''); 
    const [result, setResult] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const isFraudulent = parseFloat(amount) > 900;

        // Obtener la fecha y hora actual
        const currentDateTime = new Date().toLocaleString();

        // Crear la transacción
        const transaction = {
            cardNumber,
            amount,
            location,
            merchant,
            date: currentDateTime,  // Fecha y hora actuales
            isFraud: isFraudulent,
        };

        // Guardar la transacción en localStorage
        const existingTransactions = JSON.parse(localStorage.getItem('transactions') || '[]');
        existingTransactions.push(transaction);
        localStorage.setItem('transactions', JSON.stringify(existingTransactions));

        // Mostrar el resultado
        setResult(isFraudulent ? 'Transacción fraudulenta' : 'Transacción legítima');
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
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
                    <select 
                        value={location} 
                        onChange={(e) => setLocation(e.target.value)} 
                        required 
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="" disabled>Seleccione Provincia</option>
                        <option value="Los Santos">Los Santos</option>
                        <option value="Santiago">Santiago</option>
                        <option value="Veraguas">Veraguas</option>
                        <option value="Chitré">Chitré</option>
                        <option value="Ciudad de Panamá">Ciudad de Panamá</option>
                        <option value="Colón">Colón</option>
                        <option value="Herrera">Herrera</option>
                        <option value="Darién">Darién</option>
                        <option value="David">David</option>
                    </select>
                    <select 
                        value={merchant} 
                        onChange={(e) => setMerchant(e.target.value)} 
                        required 
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="" disabled>Seleccione Tipo de Comercio</option>
                        <option value="Peluquería">Peluquería</option>
                        <option value="Online">Online</option>
                        <option value="Cafetería">Cafetería</option>
                        <option value="Tienda de Ropa">Tienda de Ropa</option>
                        <option value="Supermercado">Supermercado</option>
                        <option value="Otro">Otro</option>
                    </select>
                    
                    <button 
                        type="submit" 
                        className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
                    >
                        Verificar Transacción
                    </button>
                </form>
                {result && (
                    <p 
                        className={`mt-4 text-center text-lg ${result.includes('fraudulenta') ? 'text-red-500' : 'text-green-500'} animate-pulse`}
                    >
                        Resultado: {result}
                    </p>
                )}
            </div>
        </div>
    );
}
