"use client";

import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import Head from 'next/head';
import Link from 'next/link';

const dummyUserData = {
    nome: "Carlos Silva",
    email: "carlos.silva@email.com",
    telefone: "(11) 98765-4321",
    dataNascimento: "12/05/1990",
    altura: "1.78m",
    peso: "75kg"
};

export default function UserProfile() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [formData, setFormData] = useState(dummyUserData);
    const [editMode, setEditMode] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const [showPasswordForm, setShowPasswordForm] = useState(false);
    const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
    const [passwordFormData, setPasswordFormData] = useState({
        currentPassword: "",
        newPassword: "",
        confirmPassword: ""
    });
    const [deletePassword, setDeletePassword] = useState("");

    useEffect(() => {
        async function fetchUserData() {
            try {
                const response = await fetch('http://localhost:5000/api/usuarios/1', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                if (response.ok) {
                    const data = await response.json();
                    setFormData({
                        nome: data.nome,
                        email: data.email,
                        telefone: data.telefone || "(não informado)",
                        dataNascimento: data.data_nascimento || "(não informado)",
                        altura: data.altura ? `${data.altura / 100}m` : "(não informado)",
                        peso: data.peso ? `${data.peso}kg` : "(não informado)"
                    });
                }
            } catch (error) {
                console.error("Erro ao buscar dados do usuário:", error);
            }
        }

        fetchUserData();
    }, []);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData({
          ...formData,
          [name]: type === 'checkbox' ? checked : value
        });
      };
      
      const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setPasswordFormData({
          ...passwordFormData,
          [name]: value
        });
      };

      const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Simulação de salvar os dados
                setTimeout(() => {
                setEditMode(false);
            setSuccessMessage("Dados atualizados com sucesso!");
          
          // Limpar mensagem após 3 segundos
          setTimeout(() => {
            setSuccessMessage("");
          }, 3000);
        }, 500);
      };

      const handlePasswordSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
// Simulação de alteração de senha
        setTimeout(() => {
          setShowPasswordForm(false);
          setPasswordFormData({
            currentPassword: "",
            newPassword: "",
            confirmPassword: ""
          });
          setSuccessMessage("Senha alterada com sucesso!");

          // Limpar mensagem após 3 segundos
          setTimeout(() => {
            setSuccessMessage("");
          }, 3000);
        }, 500);
      };

      const handleDeleteChange = (e: ChangeEvent<HTMLInputElement>) => {
        setDeletePassword(e.target.value);
      };

      const handleDeleteSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
// Simulação de exclusão de conta
        setTimeout(() => {
          window.location.href = "/";
        }, 1000);
      };

      const showDeleteConfirmation = () => {
        setShowDeleteConfirm(true);
        setEditMode(false);
        setShowPasswordForm(false);
      };

      const cancelDelete = () => {
        setShowDeleteConfirm(false);
        setDeletePassword("");
      };

    return (
        <>
            <Head>
                <title>Meus Dados - GymTrackr</title>
                <meta name="description" content="Gerencie seus dados pessoais" />
            </Head>
            <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100">
{/* Navbar */}
                <div className="border-b border-gray-700 shadow-md bg-gray-900 sticky top-0 z-10">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <nav className="flex items-center justify-between py-6">
                            <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">GymTrackr</div>
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
                                            {formData.nome.charAt(0)}
                                        </div>
                                        <span className="text-gray-300">{formData.nome}</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
                                    <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-lg border border-gray-700 py-1 hidden group-hover:block">
                                        <Link href="/User/Dados" className="block px-4 py-2 text-sm text-indigo-400 bg-gray-700 hover:bg-gray-600">
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
                {mobileMenuOpen && (
                    <div className="md:hidden bg-gray-800 rounded-lg shadow-lg p-4 mx-4 mb-4 border border-gray-700 mt-2">
                        <div className="flex flex-col space-y-4">
                            <a href="/User" className="font-medium text-gray-300 hover:text-indigo-400 transition-colors py-2">Home</a>
                            <a href="/User/Treinos" className="font-medium text-gray-300 hover:text-indigo-400 transition-colors py-2">Treinos</a>
                            <a href="/User/Desempenho" className="font-medium text-gray-300 hover:text-indigo-400 transition-colors py-2">Desempenho</a>
                            <a href="/User/Comunidade" className="font-medium text-gray-300 hover:text-indigo-400 transition-colors py-2">Comunidade</a>
                            <div className="pt-4 border-t border-gray-700">
                                <Link href="/User/Dados" className="block py-2 text-indigo-400">
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
                    <div className="flex items-center text-sm text-gray-400 mb-8">
                        <Link href="/User" className="hover:text-indigo-400">Home</Link>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mx-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        <span className="text-indigo-400">Meus Dados</span>
                    </div>
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-white mb-2">Meus Dados</h1>
                        <p className="text-gray-400">Visualize e edite suas informações pessoais</p>
                    </div>
                    {successMessage && (
                        <div className="bg-green-500/20 border border-green-500/30 text-green-300 px-4 py-3 rounded mb-6 flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {successMessage}
                        </div>
                    )}
                    <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl border border-gray-700 shadow-xl overflow-hidden">
                        <div className="md:flex">
                            <div className="md:w-1/3 bg-gray-800 p-8 border-r border-gray-700">
                                <div className="flex flex-col items-center">
                                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-white text-4xl font-bold mb-4">
                                        {formData.nome.charAt(0)}
                                    </div>
                                    <h2 className="text-xl font-bold text-white mb-1">{formData.nome}</h2>
                                </div>
                                <div className="mt-8 space-y-3">
                                    <button 
                                        onClick={() => { setEditMode(!editMode); setShowPasswordForm(false); setShowDeleteConfirm(false); }} 
                                        className={`w-full py-3 rounded-lg font-medium shadow-lg ${editMode 
                                            ? "bg-gray-700 text-gray-300 hover:bg-gray-600" 
                                            : "bg-gradient-to-r from-indigo-600 to-indigo-500 text-white hover:opacity-90"} 
                                            transition-all`}>
                                        {editMode ? "Cancelar Edição" : "Editar Dados"}
                                    </button>
                                    <button 
                                        onClick={() => { setShowPasswordForm(!showPasswordForm); setEditMode(false); setShowDeleteConfirm(false); }} 
                                        className={`w-full py-3 rounded-lg font-medium shadow-lg ${showPasswordForm 
                                            ? "bg-gray-700 text-gray-300 hover:bg-gray-600" 
                                            : "bg-gradient-to-r from-purple-600 to-purple-500 text-white hover:opacity-90"} 
                                            transition-all`}>
                                        {showPasswordForm ? "Cancelar" : "Alterar Senha"}
                                    </button>
                                    <button 
                                        onClick={showDeleteConfirmation} 
                                        className="w-full py-3 rounded-lg font-medium shadow-lg bg-gradient-to-r from-red-600 to-red-500 text-white hover:opacity-90 transition-all">
                                        Excluir Conta
                                    </button>
                                </div>
                            </div>
                            <div className="md:w-2/3 p-8">
                                {!showPasswordForm && !showDeleteConfirm ? (
                                    <form onSubmit={handleSubmit}>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-gray-400 text-sm font-medium mb-2">Nome Completo</label>
                                                {editMode ? (
                                                    <input 
                                                        type="text" 
                                                        name="nome" 
                                                        value={formData.nome} 
                                                        onChange={handleChange}
                                                        className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:border-indigo-500 focus:outline-none"
                                                    />
                                                ) : (
                                                    <div className="bg-gray-700/50 px-4 py-3 rounded-lg text-white">{formData.nome}</div>
                                                )}
                                            </div>
                                            <div>
                                                <label className="block text-gray-400 text-sm font-medium mb-2">Email</label>
                                                {editMode ? (
                                                    <input 
                                                        type="email" 
                                                        name="email" 
                                                        value={formData.email} 
                                                        onChange={handleChange}
                                                        className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:border-indigo-500 focus:outline-none"
                                                    />
                                                ) : (
                                                    <div className="bg-gray-700/50 px-4 py-3 rounded-lg text-white">{formData.email}</div>
                                                )}
                                            </div>
                                            <div>
                                                <label className="block text-gray-400 text-sm font-medium mb-2">Telefone</label>
                                                {editMode ? (
                                                    <input 
                                                        type="tel" 
                                                        name="telefone" 
                                                        value={formData.telefone} 
                                                        onChange={handleChange}
                                                        className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:border-indigo-500 focus:outline-none"
                                                    />
                                                ) : (
                                                    <div className="bg-gray-700/50 px-4 py-3 rounded-lg text-white">{formData.telefone}</div>
                                                )}
                                            </div>
                                            <div>
                                                <label className="block text-gray-400 text-sm font-medium mb-2">Data de Nascimento</label>
                                                {editMode ? (
                                                    <input 
                                                        type="text" 
                                                        name="dataNascimento" 
                                                        value={formData.dataNascimento} 
                                                        onChange={handleChange}
                                                        className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:border-indigo-500 focus:outline-none"
                                                    />
                                                ) : (
                                                    <div className="bg-gray-700/50 px-4 py-3 rounded-lg text-white">{formData.dataNascimento}</div>
                                                )}
                                            </div>
                                            <div>
                                                <label className="block text-gray-400 text-sm font-medium mb-2">Altura</label>
                                                {editMode ? (
                                                    <input 
                                                        type="text" 
                                                        name="altura" 
                                                        value={formData.altura} 
                                                        onChange={handleChange}
                                                        className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:border-indigo-500 focus:outline-none"
                                                    />
                                                ) : (
                                                    <div className="bg-gray-700/50 px-4 py-3 rounded-lg text-white">{formData.altura}</div>
                                                )}
                                            </div>
                                            <div>
                                                <label className="block text-gray-400 text-sm font-medium mb-2">Peso</label>
                                                {editMode ? (
                                                    <input 
                                                        type="text" 
                                                        name="peso" 
                                                        value={formData.peso} 
                                                        onChange={handleChange}
                                                        className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:border-indigo-500 focus:outline-none"
                                                    />
                                                ) : (
                                                    <div className="bg-gray-700/50 px-4 py-3 rounded-lg text-white">{formData.peso}</div>
                                                )}
                                            </div>
                                        </div>
                                        {editMode && (
                                            <div className="mt-8 flex justify-end">
                                                <button 
                                                    type="submit" 
                                                    className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-medium hover:opacity-90 transition-all shadow-lg shadow-indigo-500/20"
                                                >
                                                    Salvar Alterações
                                                </button>
                                            </div>
                                        )}
                                    </form>
                                ) : showPasswordForm ? (
                                    <form onSubmit={handlePasswordSubmit}>
                                        <h3 className="text-xl font-bold text-white mb-6">Alterar Senha</h3>
                                        <div className="space-y-5">
                                            <div>
                                                <label className="block text-gray-400 text-sm font-medium mb-2">Senha Atual</label>
                                                <input 
                                                    type="password" 
                                                    name="currentPassword" 
                                                    value={passwordFormData.currentPassword} 
                                                    onChange={handlePasswordChange}
                                                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:border-indigo-500 focus:outline-none"
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-gray-400 text-sm font-medium mb-2">Nova Senha</label>
                                                <input 
                                                    type="password" 
                                                    name="newPassword" 
                                                    value={passwordFormData.newPassword} 
                                                    onChange={handlePasswordChange}
                                                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:border-indigo-500 focus:outline-none"
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-gray-400 text-sm font-medium mb-2">Confirmar Nova Senha</label>
                                                <input 
                                                    type="password" 
                                                    name="confirmPassword" 
                                                    value={passwordFormData.confirmPassword} 
                                                    onChange={handlePasswordChange}
                                                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:border-indigo-500 focus:outline-none"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="mt-8 flex justify-end">
                                            <button 
                                                type="submit" 
                                                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg font-medium hover:opacity-90 transition-all shadow-lg shadow-purple-500/20"
                                            >
                                                Atualizar Senha
                                            </button>
                                        </div>
                                    </form>
                                ) : (
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-4">Excluir Conta</h3>
                                        <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 mb-6">
                                            <div className="flex items-start">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-400 mt-0.5 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                                </svg>
                                                <div>
                                                    <h4 className="text-red-400 font-semibold mb-1">Atenção: Esta ação é irreversível</h4>
                                                    <p className="text-gray-300 text-sm">Ao excluir sua conta, todos os seus dados serão permanentemente removidos de nossos servidores. Isso inclui seu histórico de treinos, métricas corporais e todas as informações pessoais.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <form onSubmit={handleDeleteSubmit} className="mt-6">
                                            <div className="mb-6">
                                                <label className="block text-gray-400 text-sm font-medium mb-2">Digite sua senha para confirmar</label>
                                                <input 
                                                    type="password" 
                                                    value={deletePassword} 
                                                    onChange={handleDeleteChange}
                                                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:border-red-500 focus:outline-none"
                                                    required
                                                    placeholder="Sua senha atual"
                                                />
                                            </div>
                                            <div className="flex items-center justify-between mt-8">
                                                <button 
                                                    type="button" 
                                                    onClick={cancelDelete}
                                                    className="px-6 py-3 bg-gray-700 text-gray-300 rounded-lg font-medium hover:bg-gray-600 transition-all"
                                                >
                                                    Cancelar
                                                </button>
                                                <button 
                                                    type="submit" 
                                                    className="px-6 py-3 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-all shadow-lg shadow-red-500/20 flex items-center"
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                    </svg>
                                                    Excluir Minha Conta
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
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