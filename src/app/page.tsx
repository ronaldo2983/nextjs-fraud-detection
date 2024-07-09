// pages/index.tsx
"use client";
import AuthForm from '../components/AuthForm';


export default function Home() {
    return (
        <div>
            <h1 className="text-center text-3xl font-bold mt-10">Inicio de Sesión / Registro</h1>
            <AuthForm />
        </div>
    );
}


