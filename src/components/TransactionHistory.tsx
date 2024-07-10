"use client";

import { useEffect, useState } from 'react';

interface Transaction {
    cardNumber: string;
    amount: string;
    location: string;
    merchant: string;
    date: string;
    isFraud: boolean;
}

export default function TransactionHistory() {
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
        async function fetchHistory() {
            // Lógica para obtener el historial de transacciones
        }
        fetchHistory();
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-4xl">
                <h2 className="text-2xl font-bold mb-6">Historial de Transacciones</h2>
                <table className="w-full table-auto border-collapse">
                    <thead>
                        <tr>
                            <th className="border px-4 py-2">Últimos 4 Dígitos</th>
                            <th className="border px-4 py-2">Monto</th>
                            <th className="border px-4 py-2">Ubicación</th>
                            <th className="border px-4 py-2">Tipo de Comercio</th>
                            <th className="border px-4 py-2">Fecha</th>
                            <th className="border px-4 py-2">Resultado</th>
                        </tr>
                    </thead>
                    <tbody>
                        {transactions.map((tx, index) => (
                            <tr key={index} className="hover:bg-gray-200">
                                <td className="border px-4 py-2">{tx.cardNumber}</td>
                                <td className="border px-4 py-2">{tx.amount}</td>
                                <td className="border px-4 py-2">{tx.location}</td>
                                <td className="border px-4 py-2">{tx.merchant}</td>
                                <td className="border px-4 py-2">{tx.date}</td>
                                <td className="border px-4 py-2">{tx.isFraud ? 'Fraudulenta' : 'Legítima'}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
