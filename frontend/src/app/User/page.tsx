"use client";

import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';

const dummyUserData = {
    nome: "Carlos Silva",
    email: "carlos.silva@email.com",
    dataCadastro: "15/01/2025",
    ultimoTreino: "08/04/2025",
    meta: "Perda de peso",
    treinos: [
        {
            id: 1,
            nome: "Peito e Tríceps",
            musculo_primario: "Peito",
            musculo_secundario: "Tríceps, Ombros",
            descricao: null,
            series: 4,
            repeticoes: 12,
            peso: 60
        },
        {
            id: 2,
            nome: "Pernas",
            musculo_primario: "Quadríceps",
            musculo_secundario: "Glúteos",
            descricao: null,
            series: 5,
            repeticoes: 10,
            peso: 80
        },
        {
            id: 3,
            nome: "Costas e Bíceps",
            musculo_primario: "Costas",
            musculo_secundario: "Bíceps",
            descricao: null,
            series: 3,
            repeticoes: 15,
            peso: 50
        },
        {
            id: 4,
            nome: "Ombros",
            musculo_primario: "Ombros",
            musculo_secundario: "Trapézio",
            descricao: null,
            series: 4,
            repeticoes: 10,
            peso: 40
        }
    ],
    estatisticas: {
        treinosTotal: 45,
        mediaMinutos: 62,
        diasConsecutivos: 8
    }
};

// Define the type for exercicio based on the backend model
interface Exercicio {
    id: number;
    nome: string;
    musculo_primario: string;
    musculo_secundario?: string | null;
    descricao?: string | null;
    series: number;
    repeticoes: number;
    peso?: number;
}

export default function Home() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [userData, setUserData] = useState(dummyUserData);
    const [sessions, setSessions] = useState([]);

    useEffect(() => {
        async function fetchUserData() {
            try {
                const userId = localStorage.getItem('userId');

                if (!userId) {
                    console.error("User ID not found");
                    return;
                }

                const userResponse = await fetch(`http://localhost:5000/api/usuarios/${userId}`, {
                    method: 'GET',
                    headers: { 'Content-Type': 'application/json' },
                });

                if (!userResponse.ok) {
                    console.error("Failed to fetch user data");
                }

                const sessionsResponse = await fetch(`http://localhost:5000/api/usuarios/${userId}/sessoes`);
                if (!sessionsResponse.ok) {
                    console.error("Failed to fetch sessions");
                }

                const userData = await userResponse.json();
                const sessionsData = await sessionsResponse.json();
                setSessions(sessionsData);
                setUserData({
                    nome: userData.nome,
                    email: userData.email,
                    dataCadastro: userData.data_criacao,
                    ultimoTreino: sessionsData[0]?.ultima_atualizacao || "N/A", // Add optional chaining
                    meta: dummyUserData.meta, // Replace with actual meta if available
                    treinos: sessionsData.flatMap((session: any) =>
                        session.exercicios.map((exercicio: any) => ({
                            id: exercicio.exercicio.id,
                            nome: exercicio.exercicio.nome,
                            musculo_primario: exercicio.exercicio.musculo_primario,
                            musculo_secundario: exercicio.exercicio.musculo_secundario || null,
                            descricao: exercicio.exercicio.descricao || null,
                            series: exercicio.series,
                            repeticoes: exercicio.repeticoes,
                            peso: exercicio.peso || 0,
                        }))
                    ), // Map session data correctly
                    estatisticas: dummyUserData.estatisticas, // Replace with actual stats if available
                });


            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        fetchUserData();
    }, []);

    return (
        <>
            <Head>
                <title>GymTrackr</title>
                <meta name="description" content="Acompanhe seu progresso fitness" />
            </Head>
            <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100">
                {/* Navbar with bottom border */}
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
                                <a href="/User/Desempenho" className="font-medium text-gray-300 hover:text-indigo-400 transition-colors">Desempenho</a>
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
                            <a href="/" className="font-medium text-gray-300 hover:text-indigo-400 transition-colors py-2">Home</a>
                            <a href="/recursos" className="font-medium text-gray-300 hover:text-indigo-400 transition-colors py-2">Recursos</a>
                            <a href="/blog" className="font-medium text-gray-300 hover:text-indigo-400 transition-colors py-2">Blog</a>
                            <a href="/sobre" className="font-medium text-gray-300 hover:text-indigo-400 transition-colors py-2">Sobre</a>
                            {/* Opções de perfil para usuário logado */}
                            <div className="pt-4 border-t border-gray-700">
                                <Link href="/configuracoes" className="block py-2 text-gray-300 hover:text-indigo-400">
                                    Configurações
                                </Link>
                                <Link href="/assinatura" className="block py-2 text-gray-300 hover:text-indigo-400">
                                    Minha Assinatura
                                </Link>
                                <button className="w-full text-left py-2 text-gray-300 hover:text-indigo-400">
                                    Sair
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex-grow">
                    {/* Hero Section com gradiente aprimorado e espaçamento correto */}
                    <section className="mt-20 pt-12 md:pt-16 pb-12 md:pb-24 relative rounded-xl shadow-inner overflow-hidden">
                        {/* Background gradient aprimorado */}
                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-800 to-blue-900 opacity-90"></div>
                        <div className="absolute inset-0 bg-[url('/mesh-gradient.png')] bg-cover opacity-20"></div>
                        <div className="absolute inset-0 bg-gradient-radial from-indigo-500/30 to-transparent"></div>

                        {/* Pontilhados decorativos */}
                        <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full filter blur-xl opacity-20"></div>
                        <div className="absolute bottom-10 right-10 w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full filter blur-xl opacity-20"></div>

                        <div className="container mx-auto px-4 relative  flex flex-col items-center justify-center text-center">
                            <div className="max-w-3xl">
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6 drop-shadow-lg">
                                    Bem vindo de volta, {userData.nome}!
                                </h1>
                                <p className="text-lg md:text-xl text-gray-100 mb-8 leading-relaxed">
                                    Cada treino é um passo rumo à sua melhor versão.
                                    Não se trata apenas de músculos, mas de disciplina, foco e superação.
                                    O seu progresso começa agora. Vamos juntos transformar esforço em conquista.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="py-16 md:py-24 bg-gray-900 border-b border-gray-700">
                        <div className="container mx-auto px-4">
                            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500">Seu Desempenho</span>
                            </h2>

                            <div className="mb-16">
                                <div className="bg-gray-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300">
                                    <div className="text-center">
                                        <h3 className="text-2xl font-bold text-indigo-300 mb-4">Estatísticas</h3>
                                        <div className="flex flex-col items-center justify-center space-y-4">
                                            <div className="w-16 h-16 rounded-full bg-indigo-600/20 flex items-center justify-center">
                                                <svg className="w-8 h-8 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                                </svg>
                                            </div>
                                            <p className="text-gray-400 text-lg">Em desenvolvimento</p>
                                            <p className="text-gray-500">Esta funcionalidade estará disponível em breve!</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Últimos treinos - Tabela melhorada */}
                            <div className="bg-gray-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300">
                                <div className="flex justify-between items-center mb-6">
                                    <h3 className="text-2xl font-bold text-indigo-300">Últimos Exercícios</h3>
                                    <div className="bg-indigo-500/20 text-indigo-300 px-3 py-1 rounded-full text-sm font-medium">
                                        Semana Atual
                                    </div>
                                </div>
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left">
                                        <thead>
                                            <tr>
                                                <th className="pb-4 text-gray-400 font-medium">Data</th>
                                                <th className="pb-4 text-gray-400 font-medium">Nome</th>
                                                <th className="pb-4 text-gray-400 font-medium">Duração</th>
                                                <th className="pb-4 text-gray-400 font-medium text-right">Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {userData.treinos.map((treino, index) => (
                                                <tr key={index} className="border-b border-gray-700/30 hover:bg-gray-700/20 transition-colors">
                                                    <td className="py-4 text-gray-200">{userData.ultimoTreino}</td>
                                                    <td className="py-4">
                                                        <span className="px-3 py-1 rounded-full text-sm font-medium bg-indigo-500/10 text-indigo-300">
                                                            {treino.nome}
                                                        </span>
                                                    </td>
                                                    <td className="py-4 text-gray-200">{treino.series * treino.repeticoes * 2} min</td>
                                                    <td className="py-4 text-right">
                                                        <span className="px-3 py-1 rounded-full text-sm font-medium bg-green-500/10 text-green-300">
                                                            Completo
                                                        </span>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                                <div className="mt-6 text-right">
                                    <Link href="/User/Treinos">
                                        <span className="text-indigo-400 hover:text-indigo-300 cursor-pointer inline-flex items-center font-medium">
                                            Ver histórico completo
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </span>
                                    </Link>
                                </div>
                            </div>

                            {/* Botões solicitados */}
                            <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-6">
                                <Link href="/User/Treinos">
                                    <button className="w-64 px-8 py-4 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white rounded-xl font-medium hover:opacity-90 transition-all shadow-lg shadow-indigo-500/20 transform hover:-translate-y-1 duration-300 border border-indigo-400/30 flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 a2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                        </svg>
                                        Ver Treinos
                                    </button>
                                </Link>
                                <Link href="User/Desempenho">
                                    <button className="w-64 px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-500 text-white rounded-xl font-medium hover:opacity-90 transition-all shadow-lg shadow-purple-500/20 transform hover:-translate-y-1 duration-300 border border-purple-400/30 flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                        </svg>
                                        Ver Desempenho
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </section>

                    {/* Seção de Comunidade */}
                    <section className="py-16 md:py-24 border-b border-gray-700">
                        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-100 mb-16">Comunidade GymTrackr</h2>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {/* Desafios da comunidade */}
                            <div className="bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-700 lg:col-span-2">
                                <h3 className="text-xl font-bold mb-4 text-indigo-300 flex items-center">
                                    <span className="mr-2">🏆</span> Desafios em Destaque
                                </h3>

                                <div className="flex flex-col items-center justify-center py-8 space-y-4">
                                    <div className="w-16 h-16 rounded-full bg-indigo-600/20 flex items-center justify-center">
                                        <svg className="w-8 h-8 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                    <p className="text-gray-400 text-lg">Em desenvolvimento</p>
                                    <p className="text-gray-500">Os desafios da comunidade estarão disponíveis em breve!</p>
                                </div>
                            </div>

                            {/* Ranking e amigos */}
                            <div className="bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-700">
                                <h3 className="text-xl font-bold mb-4 text-indigo-300 flex items-center">
                                    <span className="mr-2">👥</span> Amigos Ativos
                                </h3>

                                <div className="flex flex-col items-center justify-center py-8 space-y-4">
                                    <div className="w-16 h-16 rounded-full bg-purple-600/20 flex items-center justify-center">
                                        <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                        </svg>
                                    </div>
                                    <p className="text-gray-400 text-lg">Em desenvolvimento</p>
                                    <p className="text-gray-500">O sistema de amigos estará disponível em breve!</p>
                                </div>
                            </div>
                        </div>
                    </section>
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