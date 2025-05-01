"use client";

import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Entrar() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Implement registration logic here
    console.log({ email, password, confirmPassword });
  };

  return (
    <>
      <Head>
        <title>Nova Senha | GymTrackr</title>
        <meta name="description" content="Renove a sua senha" />
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

        {/* Sign In Form */}
        <main className="flex-grow flex items-center justify-center py-12 px-4">
          <div className="w-full max-w-md">
            {/* Card with glowing border effect */}
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl blur opacity-20"></div>
              <div className="relative bg-gray-800 rounded-xl shadow-2xl p-8 border border-gray-700">
                <div className="text-center mb-8">
                  <h1 className="text-3xl font-bold text-indigo-300">Nova Senha</h1>
                  <p className="text-gray-400 mt-2">Entre com uma nova senha para continuar</p>
                </div>

                <form onSubmit={handleSubmit}>
                  <div className="space-y-6">

                    {/* Password Field */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                          Nova Senha
                        </label>
                      </div>
                      <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-100 placeholder-gray-400"
                        placeholder="••••••••"
                      />
                    </div>
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

                    {/* Submit Button */}
                    <div>
                      <Link href="/Entrar">
                      <button
                        type="submit"
                        className="w-full py-3 px-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg font-medium hover:opacity-90 transition-opacity shadow-lg flex items-center justify-center"
                      >
                        Retornar
                      </button>
                      </Link>
                    </div>

                    {/* Social Login Options */}
                    <div className="mt-6">
                      <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                          <div className="w-full border-t border-gray-600"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>

                {/* Sign Up Link */}
                <div className="text-center mt-8">
                  <p className="text-gray-400">
                    Não tem uma conta?{' '}
                    <Link href="/Registrar" className="text-indigo-400 font-medium hover:text-indigo-300">
                      Registre-se
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