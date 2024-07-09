"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AuthForm() {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [isRegistering, setIsRegistering] = useState<boolean>(false);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Lógica de autenticación (registro/inicio de sesión)
        router.push('/transaction');
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
                <h1 className="text-2xl font-bold mb-6">{isRegistering ? 'Register' : 'Login'}</h1>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <input 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        placeholder="Email" 
                        required 
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        placeholder="Password" 
                        required 
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button 
                        type="submit" 
                        className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
                    >
                        {isRegistering ? 'Register' : 'Login'}
                    </button>
                </form>
                <button 
                    onClick={() => setIsRegistering(!isRegistering)} 
                    className="w-full mt-4 text-blue-500 hover:underline"
                >
                    {isRegistering ? 'Already have an account? Login' : 'No account? Register'}
                </button>
            </div>
        </div>
    );
}
