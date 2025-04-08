"use client";

import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
                <a href="/" className="font-medium text-gray-300 hover:text-indigo-400 transition-colors">Home</a>
                <a href="/Recursos" className="font-medium text-gray-300 hover:text-indigo-400 transition-colors">Recursos</a>
                <a href="/Blog" className="font-medium text-gray-300 hover:text-indigo-400 transition-colors">Blog</a>
                <a href="/Sobre" className="font-medium text-gray-300 hover:text-indigo-400 transition-colors">Sobre</a>
              </div>
              
              {/* Auth Buttons */}
              <div className="hidden md:flex space-x-4">
                <Link href="/Entrar">
                <button className="px-4 py-2 border border-indigo-500 text-indigo-400 rounded-lg font-medium hover:bg-gray-700 transition-colors">
                  Entrar
                </button>
                </Link>
                <Link href="/Registrar">
                <button className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg font-medium hover:opacity-90 transition-opacity shadow-md">
                  Registrar
                </button>
                </Link>
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
              <a href="/planos" className="font-medium text-gray-300 hover:text-indigo-400 transition-colors py-2">Planos</a>
              <a href="/sobre" className="font-medium text-gray-300 hover:text-indigo-400 transition-colors py-2">Sobre</a>
              <div className="flex space-x-4 pt-2 border-t border-gray-700">
                <button className="flex-1 px-4 py-2 border border-indigo-500 text-indigo-400 rounded-lg font-medium hover:bg-gray-700 transition-colors">
                  Entrar
                </button>
                <button className="flex-1 px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg font-medium hover:opacity-90 transition-opacity shadow-md">
                  Registrar
                </button>
              </div>
            </div>
          </div>
        )}
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex-grow">
          {/* Hero Section with top padding and visible separator */}
          <section className="pt-12 md:pt-16 pb-12 md:pb-24 flex flex-col md:flex-row items-center border-b border-gray-700">
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-indigo-300 mb-6">
                Acompanhe seu progresso fitness
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                GymTrackr é a plataforma perfeita para monitorar seus treinos, definir metas e visualizar seu progresso. Alcance seus objetivos fitness com dados precisos e insights valiosos.
              </p>
              <Link href="/Registrar">
              <button className="px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg font-medium hover:opacity-90 transition-opacity shadow-lg transform hover:-translate-y-1 transition-transform">
                Comece Agora
              </button>
              </Link>
            </div>
            <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl blur opacity-30"></div>
                <div className="relative">
                  <img 
                    src="/hero_image.png" 
                    alt="GymTrackr App Screenshot" 
                    className="rounded-xl shadow-2xl max-w-full h-auto border border-gray-700"
                  />
                </div>
              </div>
            </div>
          </section>
          
          {/* Features Section with visible separator */}
          <section className="py-16 md:py-24 border-b border-gray-700">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-100 mb-16">Recursos Principais</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-2 transition-transform border border-gray-700">
                <div className="text-5xl mb-6 text-indigo-400">📊</div>
                <h3 className="text-xl font-bold mb-4 text-indigo-300">Acompanhamento de Treinos</h3>
                <p className="text-gray-300 leading-relaxed">
                  Registre seus treinos, séries, repetições e pesos para acompanhar seu progresso ao longo do tempo.
                </p>
              </div>
              <div className="bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-2 transition-transform border border-gray-700">
                <div className="text-5xl mb-6 text-indigo-400">🎯</div>
                <h3 className="text-xl font-bold mb-4 text-indigo-300">Definição de Metas</h3>
                <p className="text-gray-300 leading-relaxed">
                  Estabeleça metas claras e acompanhe seu progresso em direção a elas com visualizações intuitivas.
                </p>
              </div>
              <div className="bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-2 transition-transform border border-gray-700">
                <div className="text-5xl mb-6 text-indigo-400">📱</div>
                <h3 className="text-xl font-bold mb-4 text-indigo-300">Acesso em Qualquer Lugar</h3>
                <p className="text-gray-300 leading-relaxed">
                  Use o GymTrackr em qualquer dispositivo, mantenha seus dados sincronizados onde quer que esteja.
                </p>
              </div>
            </div>
          </section>
          
          {/* CTA Section */}
          <section className="py-16 md:py-24 text-center">
            <div className="max-w-3xl mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-100">Pronto para transformar seus treinos?</h2>
              <p className="text-xl text-gray-300 mb-10">Junte-se a milhares de usuários que já melhoraram seus resultados com o GymTrackr.</p>
              <div className="inline-block bg-gradient-to-r from-indigo-500 to-purple-500 p-0.5 rounded-lg shadow-lg">
                <Link href="/Registrar">
                <button className="px-8 py-4 bg-gray-900 text-white rounded-lg font-medium hover:bg-opacity-90 transition-all transform hover:-translate-y-1">
                  Criar Conta Gratuita
                </button>
                </Link>
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