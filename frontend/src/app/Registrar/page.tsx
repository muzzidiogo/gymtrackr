"use client";

import { useState } from 'react';
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

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Implement registration logic here
    console.log({ nome, email, password, confirmPassword, dataNascimento, termsAccepted });
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
                        <div className="relative flex justify-center text-sm">
                          <span className="px-2 bg-gray-800 text-gray-400">Ou registre-se com</span>
                        </div>
                      </div>

                      <div className="mt-6 grid grid-cols-2 gap-3">
                        <button
                          type="button"
                          className="py-2 px-4 bg-gray-700 hover:bg-gray-600 focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 flex items-center justify-center rounded-lg border border-gray-600"
                        >
                          <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                          </svg>
                          Google
                        </button>
                        <button
                          type="button"
                          className="py-2 px-4 bg-gray-700 hover:bg-gray-600 focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 flex items-center justify-center rounded-lg border border-gray-600"
                        >
                          <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M13.32 2.06H10.5C9.23 2.06 7.98 2.51 7.01 3.34C6.04 4.16 5.44 5.33 5.36 6.54C5.28 7.75 5.74 8.93 6.62 9.86C7.5 10.79 8.73 11.38 10.04 11.48V21.94H13.96V11.48C15.27 11.38 16.5 10.79 17.38 9.86C18.26 8.93 18.72 7.75 18.64 6.54C18.56 5.33 17.96 4.16 16.99 3.34C16.02 2.51 14.77 2.06 13.5 2.06" fill="#0866FF" />
                            <path d="M13.32 2.06H10.5C9.23 2.06 7.98 2.51 7.01 3.34C6.04 4.16 5.44 5.33 5.36 6.54C5.28 7.75 5.74 8.93 6.62 9.86C7.5 10.79 8.73 11.38 10.04 11.48V21.94H13.96V11.48C15.27 11.38 16.5 10.79 17.38 9.86C18.26 8.93 18.72 7.75 18.64 6.54C18.56 5.33 17.96 4.16 16.99 3.34C16.02 2.51 14.77 2.06 13.5 2.06" fill="#0866FF" />
                          </svg>
                          Facebook
                        </button>
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