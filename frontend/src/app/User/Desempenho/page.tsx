"use client";

import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';

const dummyUserData = {
    nome: "Carlos Silva",
    email: "carlos.silva@email.com"
};

export default function Desempenho() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [userData, setUserData] = useState(dummyUserData);

    useEffect(() => {
        async function fetchUserData() {
            try {
                const userId = localStorage.getItem('userId');
                if (!userId) {
                    console.error("User ID not found");
                    return;
                }

                const response = await fetch(`http://localhost:5000/api/usuarios/${userId}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                if (response.ok) {
                    const data = await response.json();
                    setUserData(data);
                } else {
                    console.error("Failed to fetch user data");
                }
            } catch (error) {
                console.error("Erro ao buscar dados do usuário:", error);
            }
        }

        fetchUserData();
    }, []);

    return (
        <>
            <Head>
                <title>Desempenho - GymTrackr</title>
                <meta name="description" content="Acompanhe seu desempenho nos treinos" />
            </Head>
            <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100">
                {/* Navbar */}
                <div className="border-b border-gray-700 shadow-md bg-gray-900 sticky top-0 z-10">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <nav className="flex items-center justify-between py-6">
                            <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">GymTrackr</div>

                            {/* Mobile menu button */}
                            <button
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                className="md:hidden p-2 rounded-md text-gray-300 hover:bg-gray-700 focus:outline-none"
                            >
                                {mobileMenuOpen ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                )}
                            </button>

                            {/* Desktop Navigation */}
                            <div className="hidden md:flex md:items-center space-x-8">
                                <a href="/User" className="font-medium text-gray-300 hover:text-indigo-400 transition-colors">Home</a>
                                <a href="/User/Treinos" className="font-medium text-gray-300 hover:text-indigo-400 transition-colors">Treinos</a>
                                <a href="/User/Desempenho" className="font-medium text-indigo-400 transition-colors">Desempenho</a>
                                <a href="/User/Comunidade" className="font-medium text-gray-300 hover:text-indigo-400 transition-colors">Comunidade</a>
                            </div>

                            {/* Auth Buttons */}
                            <div className="hidden md:flex space-x-4">
                                <div className="relative group">
                                    <button className="flex items-center space-x-2 px-3 py-2 rounded-lg border border-indigo-500 hover:bg-gray-700 transition-colors">
                                        <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white font-medium">
                                            {userData.nome.charAt(0)}
                                        </div>
                                        <span className="text-gray-300">{userData.nome}</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
                                    <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-lg border border-gray-700 py-1 hidden group-hover:block">
                                        <Link href="/User/Dados" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-indigo-400">
                                            Meus Dados
                                        </Link>
                                        <Link href="/">
                                            <button className="w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-indigo-400">
                                                Sair
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden bg-gray-800 rounded-lg shadow-lg p-4 mx-4 mb-4 border border-gray-700 mt-2">
                        <div className="flex flex-col space-y-4">
                            <a href="/User" className="font-medium text-gray-300 hover:text-indigo-400 transition-colors py-2">Home</a>
                            <a href="/User/Treinos" className="font-medium text-gray-300 hover:text-indigo-400 transition-colors py-2">Treinos</a>
                            <a href="/User/Desempenho" className="font-medium text-indigo-400 transition-colors py-2">Desempenho</a>
                            <a href="/User/Comunidade" className="font-medium text-gray-300 hover:text-indigo-400 transition-colors py-2">Comunidade</a>
                            {/* Opções de perfil para usuário logado */}
                            <div className="pt-4 border-t border-gray-700">
                                <Link href="/User/Dados" className="block py-2 text-gray-300 hover:text-indigo-400">
                                    Meus Dados
                                </Link>
                                <Link href="/">
                                    <button className="block py-2 text-gray-300 hover:text-indigo-400">
                                        Sair
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                )}

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 flex-grow">
                    {/* Breadcrumb */}
                    <div className="flex items-center text-sm text-gray-400 mb-8">
                        <Link href="/User" className="hover:text-indigo-400">Home</Link>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mx-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        <span className="text-indigo-400">Desempenho</span>
                    </div>

                    {/* Page Header */}
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-white mb-2">Desempenho</h1>
                        <p className="text-gray-400">Acompanhe sua evolução e métricas de progresso</p>
                    </div>

                    {/* Em Desenvolvimento */}
                    <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl border border-gray-700 shadow-xl overflow-hidden p-8 text-center">
                        <div className="max-w-2xl mx-auto">
                            <div className="w-24 h-24 bg-indigo-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                </svg>
                            </div>
                            
                            <h2 className="text-2xl font-bold text-white mb-4">Página em desenvolvimento</h2>
                            <p className="text-gray-300 mb-6">
                                Estamos trabalhando para trazer a melhor experiência de acompanhamento de desempenho para você. 
                                Em breve, você poderá visualizar gráficos de progresso, métricas personalizadas e análise detalhada 
                                do seu desenvolvimento físico.
                            </p>
                            
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a href="/User" className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white rounded-lg font-medium hover:opacity-90 transition-all shadow-lg shadow-indigo-500/20">
                                    Voltar para Home
                                </a>
                                <a href="/User/Treinos" className="px-6 py-3 bg-gray-700 text-gray-300 rounded-lg font-medium hover:bg-gray-600 transition-all">
                                    Ver Treinos
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer with top separator */}
                <footer className="bg-black text-white py-12 mt-auto border-t border-gray-700">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                            <div className="space-y-4">
                                <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">GymTrackr</div>
                                <p className="text-gray-400">A melhor plataforma para acompanhar seu progresso fitness e alcançar seus objetivos.</p>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold mb-4 text-indigo-300">Recursos</h3>
                                <ul className="space-y-3">
                                    <li><a href="#" className="text-gray-500 hover:text-indigo-300 transition-colors">Acompanhamento de Treinos</a></li>
                                    <li><a href="#" className="text-gray-500 hover:text-indigo-300 transition-colors">Métricas Corporais</a></li>
                                    <li><a href="#" className="text-gray-500 hover:text-indigo-300 transition-colors">Biblioteca de Exercícios</a></li>
                                    <li><a href="#" className="text-gray-500 hover:text-indigo-300 transition-colors">Planos de Treino</a></li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold mb-4 text-indigo-300">Empresa</h3>
                                <ul className="space-y-3">
                                    <li><a href="#" className="text-gray-500 hover:text-indigo-300 transition-colors">Sobre Nós</a></li>
                                    <li><a href="#" className="text-gray-500 hover:text-indigo-300 transition-colors">Blog</a></li>
                                    <li><a href="#" className="text-gray-500 hover:text-indigo-300 transition-colors">Carreiras</a></li>
                                    <li><a href="#" className="text-gray-500 hover:text-indigo-300 transition-colors">Contato</a></li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold mb-4 text-indigo-300">Suporte</h3>
                                <ul className="space-y-3">
                                    <li><a href="#" className="text-gray-500 hover:text-indigo-300 transition-colors">Ajuda</a></li>
                                    <li><a href="#" className="text-gray-500 hover:text-indigo-300 transition-colors">FAQ</a></li>
                                    <li><a href="#" className="text-gray-500 hover:text-indigo-300 transition-colors">Termos de Serviço</a></li>
                                    <li><a href="#" className="text-gray-500 hover:text-indigo-300 transition-colors">Política de Privacidade</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="pt-8 mt-8 border-t border-gray-800 text-center text-gray-500">
                            &copy; 2025 GymTrackr. Todos os direitos reservados.
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}