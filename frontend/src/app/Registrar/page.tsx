"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

export default function Registro() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const router = useRouter(); // Initialize useRouter

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("As senhas não coincidem.");
      return;
    }

    const payload = {
      nome,
      email,
      senha: password,
      data_nascimento: dataNascimento,
    };

    try {
      const response = await fetch('http://localhost:5000/api/usuarios', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response.json();
        alert(errorData.mensagem || "Erro ao criar conta.");
        return;
      }

      const data = await response.json();
      alert("Conta criada com sucesso!");

      // Automatically log in the user
      const loginResponse = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, senha: password }),
      });

      if (!loginResponse.ok) {
        alert("Conta criada, mas falha ao realizar login.");
        return;
      }

      const loginData = await loginResponse.json();
      alert("Login realizado com sucesso!");
      console.log(loginData);
      // Store the user ID in localStorage (replace if it already exists)
      localStorage.setItem('userId', data.usuario.id);
      // Redirect to the dashboard
      router.push('/User');
    } catch (error) {
      console.error("Erro ao conectar com o servidor:", error);
      alert("Erro ao conectar com o servidor.");
    }
  };

  return (
    <>
      <Head>
        <title>Registro | GymTrackr</title>
        <meta name="description" content="Crie sua conta GymTrackr" />
      </Head>
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100">
        {/* Header with logo */}
        <header className="border-b border-gray-700 py-4">
          <div className="container mx-auto px-4">
            <Link href="/" className="flex items-center justify-center md:justify-start">
              <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
                GymTrackr
              </div>
            </Link>
          </div>
        </header>

        {/* Registration Form */}
        <main className="flex-grow flex items-center justify-center py-12 px-4">
          <div className="w-full max-w-md">
            {/* Card with glowing border effect */}
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl blur opacity-20"></div>
              <div className="relative bg-gray-800 rounded-xl shadow-2xl p-8 border border-gray-700">
                <div className="text-center mb-8">
                  <h1 className="text-3xl font-bold text-indigo-300">Crie sua conta</h1>
                  <p className="text-gray-400 mt-2">Comece sua jornada com o GymTrackr</p>
                </div>

                <form onSubmit={handleSubmit}>
                  <div className="space-y-6">
                    {/* Nome Field */}
                    <div>
                      <label htmlFor="nome" className="block text-sm font-medium text-gray-300 mb-2">
                        Nome completo
                      </label>
                      <input
                        id="nome"
                        name="nome"
                        type="text"
                        autoComplete="name"
                        required
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-100 placeholder-gray-400"
                        placeholder="Seu nome completo"
                      />
                    </div>

                    {/* Email Field */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-100 placeholder-gray-400"
                        placeholder="seu@email.com"
                      />
                    </div>

                    {/* Data de Nascimento Field */}
                    <div>
                      <label htmlFor="dataNascimento" className="block text-sm font-medium text-gray-300 mb-2">
                        Data de Nascimento
                      </label>
                      <input
                        id="dataNascimento"
                        name="dataNascimento"
                        type="date"
                        required
                        value={dataNascimento}
                        onChange={(e) => setDataNascimento(e.target.value)}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-100 placeholder-gray-400"
                      />
                    </div>

                    {/* Password Field */}
                    <div>
                      <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                        Senha
                      </label>
                      <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="new-password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-100 placeholder-gray-400"
                        placeholder="••••••••"
                      />
                    </div>

                    {/* Confirm Password Field */}
                    <div>
                      <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300 mb-2">
                        Confirmar Senha
                      </label>
                      <input
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        autoComplete="new-password"
                        required
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-100 placeholder-gray-400"
                        placeholder="••••••••"
                      />
                    </div>

                    {/* Terms and Conditions Checkbox */}
                    <div className="flex items-center">
                      <input
                        id="terms"
                        name="terms"
                        type="checkbox"
                        required
                        checked={termsAccepted}
                        onChange={(e) => setTermsAccepted(e.target.checked)}
                        className="h-4 w-4 text-indigo-500 focus:ring-indigo-500 border-gray-600 rounded bg-gray-700"
                      />
                      <label htmlFor="terms" className="ml-2 block text-sm text-gray-300">
                        Concordo com os{' '}
                        <Link href="/termos" className="text-indigo-400 hover:text-indigo-300">
                          Termos de Serviço
                        </Link>{' '}
                        e{' '}
                        <Link href="/privacidade" className="text-indigo-400 hover:text-indigo-300">
                          Política de Privacidade
                        </Link>
                      </label>
                    </div>

                    {/* Submit Button */}
                    <div>
                      <button
                        type="submit"
                        className="w-full py-3 px-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg font-medium hover:opacity-90 transition-opacity shadow-lg flex items-center justify-center"
                      >
                        Criar Conta
                      </button>
                    </div>

                    {/* Social Registration Options */}
                    <div className="mt-6">
                      <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                          <div className="w-full border-t border-gray-600"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>

                {/* Sign In Link */}
                <div className="text-center mt-8">
                  <p className="text-gray-400">
                    Já tem uma conta?{' '}
                    <Link href="/Entrar" className="text-indigo-400 font-medium hover:text-indigo-300">
                      Entrar
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="border-t border-gray-700 py-6">
          <div className="container mx-auto px-4">
            <div className="text-center text-gray-500 text-sm">
              &copy; 2025 GymTrackr. Todos os direitos reservados.
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}