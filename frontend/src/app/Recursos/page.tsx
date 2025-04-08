"use client";

import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function RecursosPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('ferramentas');
  
  return (
    <>
      <Head>
        <title>Recursos - GymTrackr</title>
        <meta name="description" content="Conheça os recursos e ferramentas da plataforma GymTrackr" />
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
                <a href="/Recursos" className="font-medium text-indigo-400 transition-colors">Recursos</a>
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
              <a href="/Recursos" className="font-medium text-indigo-400 transition-colors py-2">Recursos</a>
              <a href="/Blog" className="font-medium text-gray-300 hover:text-indigo-400 transition-colors py-2">Blog</a>
              <a href="/Sobre" className="font-medium text-gray-300 hover:text-indigo-400 transition-colors py-2">Sobre</a>
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
          {/* Page Header */}
          <section className="py-12 md:py-16 border-b border-gray-700">
            <h1 className="text-4xl md:text-5xl font-bold text-center text-white mb-6">Recursos GymTrackr</h1>
            <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto">
              Descubra todas as ferramentas e funcionalidades que o GymTrackr oferece para ajudar você a alcançar seus objetivos fitness.
            </p>
          </section>
          
          {/* Tabs Navigation */}
          <div className="flex justify-center mt-12 border-b border-gray-700">
            <div className="flex space-x-1 md:space-x-8">
              <button 
                onClick={() => setActiveTab('ferramentas')}
                className={`pb-4 px-4 font-medium text-lg ${activeTab === 'ferramentas' ? 'text-indigo-400 border-b-2 border-indigo-400' : 'text-gray-400 hover:text-gray-200'}`}
              >
                Ferramentas
              </button>
              <button 
                onClick={() => setActiveTab('treinos')}
                className={`pb-4 px-4 font-medium text-lg ${activeTab === 'treinos' ? 'text-indigo-400 border-b-2 border-indigo-400' : 'text-gray-400 hover:text-gray-200'}`}
              >
                Treinos
              </button>
              <button 
                onClick={() => setActiveTab('metricas')}
                className={`pb-4 px-4 font-medium text-lg ${activeTab === 'metricas' ? 'text-indigo-400 border-b-2 border-indigo-400' : 'text-gray-400 hover:text-gray-200'}`}
              >
                Métricas
              </button>
              <button 
                onClick={() => setActiveTab('comunidade')}
                className={`pb-4 px-4 font-medium text-lg ${activeTab === 'comunidade' ? 'text-indigo-400 border-b-2 border-indigo-400' : 'text-gray-400 hover:text-gray-200'}`}
              >
                Comunidade
              </button>
            </div>
          </div>
          
          {/* Tab Content - Ferramentas */}
          {activeTab === 'ferramentas' && (
            <section className="py-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 shadow-md hover:shadow-xl transition-shadow">
                  <div className="h-12 w-12 rounded-lg bg-indigo-500 flex items-center justify-center mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">Diário de Treino</h3>
                  <p className="text-gray-300 mb-6">
                    Registre todos os seus treinos, exercícios, séries, repetições e pesos em um só lugar.
                  </p>
                  <a href="#" className="text-indigo-400 hover:text-indigo-300 font-medium flex items-center">
                    Saiba mais
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
                
                <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 shadow-md hover:shadow-xl transition-shadow">
                  <div className="h-12 w-12 rounded-lg bg-indigo-500 flex items-center justify-center mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">Análise de Progresso</h3>
                  <p className="text-gray-300 mb-6">
                    Visualize gráficos detalhados do seu progresso ao longo do tempo para cada exercício.
                  </p>
                  <a href="#" className="text-indigo-400 hover:text-indigo-300 font-medium flex items-center">
                    Saiba mais
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
                
                <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 shadow-md hover:shadow-xl transition-shadow">
                  <div className="h-12 w-12 rounded-lg bg-indigo-500 flex items-center justify-center mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">Criador de Rotinas</h3>
                  <p className="text-gray-300 mb-6">
                    Monte suas próprias rotinas de treino ou utilize nossos modelos pré-definidos otimizados.
                  </p>
                  <a href="#" className="text-indigo-400 hover:text-indigo-300 font-medium flex items-center">
                    Saiba mais
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
                
                <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 shadow-md hover:shadow-xl transition-shadow">
                  <div className="h-12 w-12 rounded-lg bg-indigo-500 flex items-center justify-center mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">Lembretes de Treino</h3>
                  <p className="text-gray-300 mb-6">
                    Configure lembretes para não perder seus treinos e manter a consistência dos seus exercícios.
                  </p>
                  <a href="#" className="text-indigo-400 hover:text-indigo-300 font-medium flex items-center">
                    Saiba mais
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
                
                <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 shadow-md hover:shadow-xl transition-shadow">
                  <div className="h-12 w-12 rounded-lg bg-indigo-500 flex items-center justify-center mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">Dicas Personalizadas</h3>
                  <p className="text-gray-300 mb-6">
                    Receba dicas personalizadas baseadas nos seus objetivos e histórico de treinamento.
                  </p>
                  <a href="#" className="text-indigo-400 hover:text-indigo-300 font-medium flex items-center">
                    Saiba mais
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
                
                <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 shadow-md hover:shadow-xl transition-shadow">
                  <div className="h-12 w-12 rounded-lg bg-indigo-500 flex items-center justify-center mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">Biblioteca de Exercícios</h3>
                  <p className="text-gray-300 mb-6">
                    Acesse nossa vasta biblioteca com centenas de exercícios detalhados com instruções e vídeos.
                  </p>
                  <a href="#" className="text-indigo-400 hover:text-indigo-300 font-medium flex items-center">
                    Saiba mais
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </section>
          )}
          
          {/* Tab Content - Treinos */}
          {activeTab === 'treinos' && (
            <section className="py-12">
              {/* Treinos Populares */}
              <div className="mb-16">
                <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white">Treinos Populares</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="bg-gray-800 rounded-xl overflow-hidden shadow-md border border-gray-700">
                    <div className="relative h-48">
                      <img 
                        src="/recursos/hiper.png" 
                        alt="Treino Hipertrofia"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <span className="bg-indigo-500 text-white text-xs px-2 py-1 rounded-full">Intermediário</span>
                        <h3 className="text-xl font-bold text-white mt-2">Hipertrofia Total</h3>
                      </div>
                    </div>
                    <div className="p-5">
                      <div className="flex justify-between items-center mb-4">
                        <div className="flex items-center space-x-4">
                          <div>
                            <p className="text-sm text-gray-400">5 dias/semana</p>
                            <p className="text-sm text-gray-400">60 min/sessão</p>
                          </div>
                        </div>
                        <div className="bg-gray-700 px-3 py-1 rounded-full">
                          <span className="text-sm text-indigo-300">4.8 ★</span>
                        </div>
                      </div>
                      <a href="#" className="text-indigo-400 hover:text-indigo-300 font-medium flex items-center justify-center w-full border border-indigo-500 rounded-lg py-2 mt-2">
                        Ver detalhes
                      </a>
                    </div>
                  </div>
                  
                  <div className="bg-gray-800 rounded-xl overflow-hidden shadow-md border border-gray-700">
                    <div className="relative h-48">
                      <img 
                        src="/recursos/iniciantes.png" 
                        alt="Treino Iniciantes"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">Iniciante</span>
                        <h3 className="text-xl font-bold text-white mt-2">Programa para Iniciantes</h3>
                      </div>
                    </div>
                    <div className="p-5">
                      <div className="flex justify-between items-center mb-4">
                        <div className="flex items-center space-x-4">
                          <div>
                            <p className="text-sm text-gray-400">3 dias/semana</p>
                            <p className="text-sm text-gray-400">45 min/sessão</p>
                          </div>
                        </div>
                        <div className="bg-gray-700 px-3 py-1 rounded-full">
                          <span className="text-sm text-indigo-300">4.9 ★</span>
                        </div>
                      </div>
                      <a href="#" className="text-indigo-400 hover:text-indigo-300 font-medium flex items-center justify-center w-full border border-indigo-500 rounded-lg py-2 mt-2">
                        Ver detalhes
                      </a>
                    </div>
                  </div>
                  
                  <div className="bg-gray-800 rounded-xl overflow-hidden shadow-md border border-gray-700">
                    <div className="relative h-48">
                      <img 
                        src="/recursos/forca.png" 
                        alt="Treino Força"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">Avançado</span>
                        <h3 className="text-xl font-bold text-white mt-2">Força Máxima</h3>
                      </div>
                    </div>
                    <div className="p-5">
                      <div className="flex justify-between items-center mb-4">
                        <div className="flex items-center space-x-4">
                          <div>
                            <p className="text-sm text-gray-400">4 dias/semana</p>
                            <p className="text-sm text-gray-400">75 min/sessão</p>
                          </div>
                        </div>
                        <div className="bg-gray-700 px-3 py-1 rounded-full">
                          <span className="text-sm text-indigo-300">4.7 ★</span>
                        </div>
                      </div>
                      <a href="#" className="text-indigo-400 hover:text-indigo-300 font-medium flex items-center justify-center w-full border border-indigo-500 rounded-lg py-2 mt-2">
                        Ver detalhes
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Especialistas */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white">Treine com Especialistas</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 shadow-md">
                    <div className="md:flex">
                      <div className="md:w-1/3">
                        <img 
                          src="/recursos/Rodrigo.png" 
                          alt="Personal Trainer"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="md:w-2/3 p-6">
                        <h3 className="text-xl font-bold text-white mb-2">Rodrigo Almeida</h3>
                        <p className="text-indigo-400 text-sm mb-4">Especialista em Hipertrofia</p>
                        <p className="text-gray-300 mb-6">Com mais de 10 anos de experiência, Rodrigo criou programas de treinamento que já ajudaram centenas de alunos a atingir seus objetivos.</p>
                        <div className="flex space-x-3">
                          <span className="bg-gray-700 text-xs px-3 py-1 rounded-full text-gray-300">Hipertrofia</span>
                          <span className="bg-gray-700 text-xs px-3 py-1 rounded-full text-gray-300">Definição</span>
                          <span className="bg-gray-700 text-xs px-3 py-1 rounded-full text-gray-300">Nutrição</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 shadow-md">
                    <div className="md:flex">
                      <div className="md:w-1/3">
                        <img 
                          src="/recursos/Carla.png" 
                          alt="Personal Trainer"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="md:w-2/3 p-6">
                        <h3 className="text-xl font-bold text-white mb-2">Carla Mendes</h3>
                        <p className="text-indigo-400 text-sm mb-4">Especialista em Condicionamento</p>
                        <p className="text-gray-300 mb-6">Atleta e treinadora certificada, Carla desenvolveu programas de treinamento focados em resultados rápidos e sustentáveis.</p>
                        <div className="flex space-x-3">
                          <span className="bg-gray-700 text-xs px-3 py-1 rounded-full text-gray-300">HIIT</span>
                          <span className="bg-gray-700 text-xs px-3 py-1 rounded-full text-gray-300">Funcional</span>
                          <span className="bg-gray-700 text-xs px-3 py-1 rounded-full text-gray-300">Emagrecimento</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}
          
          {/* Tab Content - Métricas */}
          {activeTab === 'metricas' && (
            <section className="py-12">
              {/* Intro */}
              <div className="max-w-3xl mx-auto text-center mb-16">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">Acompanhe Seu Progresso</h2>
                <p className="text-gray-300">
                  O GymTrackr oferece ferramentas avançadas para monitorar suas métricas e visualizar seu progresso ao longo do tempo, permitindo ajustar seu treinamento para resultados ótimos.
                </p>
              </div>
              
              {/* Demo Charts */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 shadow-md">
                  <h3 className="text-xl font-bold mb-6 text-white">Evolução de Força</h3>
                  <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <p className="text-gray-400">[Gráfico de Linha: Evolução de Carga]</p>
                  </div>
                  <div className="mt-4 grid grid-cols-3 gap-4">
                    <div className="bg-gray-700 rounded-lg p-3 text-center">
                      <p className="text-xs text-gray-400 mb-1">Peso Atual</p>
                      <p className="text-lg font-bold text-indigo-400">120kg</p>
                      <p className="text-xs text-green-400">+5kg</p>
                    </div>
                    <div className="bg-gray-700 rounded-lg p-3 text-center">
                      <p className="text-xs text-gray-400 mb-1">Récorde</p>
                      <p className="text-lg font-bold text-indigo-400">125kg</p>
                      <p className="text-xs text-gray-400">Supino</p>
                    </div>
                    <div className="bg-gray-700 rounded-lg p-3 text-center">
                      <p className="text-xs text-gray-400 mb-1">Progresso</p>
                      <p className="text-lg font-bold text-indigo-400">15%</p>
                      <p className="text-xs text-green-400">Este mês</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 shadow-md">
                  <h3 className="text-xl font-bold mb-6 text-white">Composição Corporal</h3>
                  <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                    <p className="text-gray-400">[Gráfico de Área: Massa Magra vs Gordura]</p>
                  </div>
                  <div className="mt-4 grid grid-cols-3 gap-4">
                    <div className="bg-gray-700 rounded-lg p-3 text-center">
                      <p className="text-xs text-gray-400 mb-1">Peso Atual</p>
                      <p className="text-lg font-bold text-indigo-400">78kg</p>
                      <p className="text-xs text-red-400">-2kg</p>
                    </div>
                    <div className="bg-gray-700 rounded-lg p-3 text-center">
                      <p className="text-xs text-gray-400 mb-1">% Gordura</p>
                      <p className="text-lg font-bold text-indigo-400">14%</p>
                      <p className="text-xs text-green-400">-1.5%</p>
                    </div>
                    <div className="bg-gray-700 rounded-lg p-3 text-center">
                      <p className="text-xs text-gray-400 mb-1">Massa Magra</p>
                      <p className="text-lg font-bold text-indigo-400">67kg</p>
                      <p className="text-xs text-green-400">+0.5kg</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Métricas Disponíveis */}
              <div>
                <h3 className="text-2xl font-bold mb-8 text-white">Métricas Disponíveis</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 shadow-md">
                    <div className="flex items-center mb-4">
                      <div className="h-10 w-10 rounded-lg bg-indigo-500 flex items-center justify-center mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                      <h4 className="text-lg font-bold text-white">Progressão de Carga</h4>
                    </div>
                    <p className="text-gray-300">
                      Acompanhe o aumento de peso em cada exercício com gráficos detalhados e sugestões de progressão.
                    </p>
                  </div>
                  
                  <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 shadow-md">
                    <div className="flex items-center mb-4">
                      <div className="h-10 w-10 rounded-lg bg-indigo-500 flex items-center justify-center mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <h4 className="text-lg font-bold text-white">Composição Corporal</h4>
                    </div>
                    <p className="text-gray-300">
                      Registre e visualize mudanças no seu peso, percentual de gordura, massa magra e medidas corporais.
                    </p>
                  </div>
                  
                  <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 shadow-md">
                    <div className="flex items-center mb-4">
                      <div className="h-10 w-10 rounded-lg bg-indigo-500 flex items-center justify-center mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <h4 className="text-lg font-bold text-white">Níveis de Energia</h4>
                    </div>
                    <p className="text-gray-300">
                      Monitore seu nível de energia antes, durante e após os treinos para otimizar sua rotina e descanso.
                    </p>
                  </div>
                  
                  <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 shadow-md">
                    <div className="flex items-center mb-4">
                      <div className="h-10 w-10 rounded-lg bg-indigo-500 flex items-center justify-center mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h4 className="text-lg font-bold text-white">Tempo de Treino</h4>
                    </div>
                    <p className="text-gray-300">
                      Analise o tempo gasto em cada exercício, descanso entre séries e duração total dos treinos.
                    </p>
                  </div>
                  
                  <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 shadow-md">
                    <div className="flex items-center mb-4">
                      <div className="h-10 w-10 rounded-lg bg-indigo-500 flex items-center justify-center mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <h4 className="text-lg font-bold text-white">Frequência Cardíaca</h4>
                    </div>
                    <p className="text-gray-300">
                      Integre seu monitor cardíaco para acompanhar suas zonas de frequência durante os exercícios.
                    </p>
                  </div>
                  
                  <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 shadow-md">
                    <div className="flex items-center mb-4">
                      <div className="h-10 w-10 rounded-lg bg-indigo-500 flex items-center justify-center mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                      </div>
                      <h4 className="text-lg font-bold text-white">Histórico Completo</h4>
                    </div>
                    <p className="text-gray-300">
                      Acesse todo seu histórico de treinos para análises detalhadas e relatórios personalizados.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          )}
          
          {/* Tab Content - Comunidade */}
          {activeTab === 'comunidade' && (
            <section className="py-12">
              {/* Destaques da Comunidade */}
              <div className="mb-16">
                <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white">Comunidade GymTrackr</h2>
                
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                  {/* Coluna da Esquerda */}
                  <div className="lg:col-span-3">
                    <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 shadow-md mb-8">
                      <h3 className="text-xl font-bold mb-6 text-white">Destaques da Comunidade</h3>
                      
                      <div className="space-y-6">
                        <div className="bg-gray-700 rounded-lg p-5">
                          <div className="flex items-start mb-4">
                            <img src="/recursos/Icon.png" alt="Usuário" className="w-10 h-10 rounded-full mr-4" />
                            <div>
                              <h4 className="font-medium text-white">Marcos Silva</h4>
                              <p className="text-sm text-gray-400">Há 2 dias</p>
                            </div>
                          </div>
                          <p className="text-gray-300 mb-4">
                            Acabei de completar meu primeiro mês usando o programa de hipertrofia. Os resultados já estão aparecendo! Obrigado pela comunidade incrível.
                          </p>
                          <div className="flex justify-between items-center">
                            <div className="flex space-x-4">
                              <button className="flex items-center text-gray-400 hover:text-indigo-400">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                                </svg>
                                45
                              </button>
                              <button className="flex items-center text-gray-400 hover:text-indigo-400">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                                </svg>
                                12
                              </button>
                            </div>
                            <button className="text-indigo-400 hover:text-indigo-300 text-sm">Ver mais</button>
                          </div>
                        </div>
                        
                        <div className="bg-gray-700 rounded-lg p-5">
                          <div className="flex items-start mb-4">
                            <img src="/recursos/Icon.png" alt="Usuário" className="w-10 h-10 rounded-full mr-4" />
                            <div>
                              <h4 className="font-medium text-white">Amanda Costa</h4>
                              <p className="text-sm text-gray-400">Há 5 dias</p>
                            </div>
                          </div>
                          <p className="text-gray-300 mb-4">
                            Dica para iniciantes: comece com o programa básico e foque na execução correta dos movimentos antes de aumentar as cargas. O GymTrackr tem ótimos vídeos explicativos!
                          </p>
                          <div className="flex justify-between items-center">
                            <div className="flex space-x-4">
                              <button className="flex items-center text-gray-400 hover:text-indigo-400">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                                </svg>
                                67
                              </button>
                              <button className="flex items-center text-gray-400 hover:text-indigo-400">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                                </svg>
                                23
                              </button>
                            </div>
                            <button className="text-indigo-400 hover:text-indigo-300 text-sm">Ver mais</button>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex justify-center mt-8">
                        <button className="px-6 py-2 border border-indigo-500 text-indigo-400 rounded-lg font-medium hover:bg-gray-700 transition-colors">
                          Carregar mais posts
                        </button>
                      </div>
                    </div>
                    
                    <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 shadow-md">
                      <h3 className="text-xl font-bold mb-6 text-white">Transformações Inspiradoras</h3>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="bg-gray-700 rounded-lg overflow-hidden">
                          <div className="relative h-48">
                            <img src="/recursos/Carlos.png" alt="Antes e Depois" className="w-full h-full object-cover" />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                              <h4 className="text-white font-medium">Carlos Pereira</h4>
                              <p className="text-sm text-gray-300">12 semanas de transformação</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-gray-700 rounded-lg overflow-hidden">
                          <div className="relative h-48">
                            <img src="/recursos/Juliana.png" alt="Antes e Depois" className="w-full h-full object-cover" />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                              <h4 className="text-white font-medium">Juliana Torres</h4>
                              <p className="text-sm text-gray-300">6 meses de dedicação</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Coluna da Direita */}
                  <div className="lg:col-span-2">
                    <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 shadow-md mb-8">
                      <h3 className="text-xl font-bold mb-6 text-white">Desafios Ativos</h3>
                      
                      <div className="space-y-4">
                        <div className="bg-gray-700 rounded-lg p-4">
                          <div className="flex justify-between items-center mb-3">
                            <h4 className="font-medium text-white">Desafio 30 dias Abs</h4>
                            <span className="bg-indigo-500 text-white text-xs px-2 py-1 rounded-full">19 dias restantes</span>
                          </div>
                          <div className="w-full bg-gray-600 rounded-full h-2 mb-3">
                            <div className="bg-indigo-400 h-2 rounded-full" style={{ width: '37%' }}></div>
                          </div>
                          <p className="text-sm text-gray-300">352 participantes</p>
                        </div>
                        
                        <div className="bg-gray-700 rounded-lg p-4">
                          <div className="flex justify-between items-center mb-3">
                            <h4 className="font-medium text-white">Corrida Semanal</h4>
                            <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">5 dias restantes</span>
                          </div>
                          <div className="w-full bg-gray-600 rounded-full h-2 mb-3">
                            <div className="bg-green-400 h-2 rounded-full" style={{ width: '28%' }}></div>
                          </div>
                          <p className="text-sm text-gray-300">186 participantes</p>
                        </div>
                        
                        <div className="bg-gray-700 rounded-lg p-4">
                          <div className="flex justify-between items-center mb-3">
                            <h4 className="font-medium text-white">Superação de PR</h4>
                            <span className="bg-purple-500 text-white text-xs px-2 py-1 rounded-full">2 semanas restantes</span>
                          </div>
                          <div className="w-full bg-gray-600 rounded-full h-2 mb-3">
                            <div className="bg-purple-400 h-2 rounded-full" style={{ width: '65%' }}></div>
                          </div>
                          <p className="text-sm text-gray-300">429 participantes</p>
                        </div>
                      </div>
                      
                      <button className="w-full mt-6 py-2 text-center text-indigo-400 border border-indigo-500 rounded-lg font-medium hover:bg-gray-700 transition-colors">
                        Ver todos os desafios
                      </button>
                    </div>
                    
                    <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 shadow-md">
                      <h3 className="text-xl font-bold mb-6 text-white">Grupos Populares</h3>
                      
                      <div className="space-y-4">
                        <div className="flex items-center p-3 bg-gray-700 rounded-lg">
                          <img src="/recursos/muscle.png" alt="Grupo" className="w-10 h-10 rounded-full mr-4" />
                          <div className="flex-grow">
                            <h4 className="font-medium text-white">Hipertrofia Natural</h4>
                            <p className="text-xs text-gray-400">2.4k membros</p>
                          </div>
                          <button className="bg-indigo-500 text-white text-xs px-3 py-1 rounded-full hover:bg-indigo-600">
                            Entrar
                          </button>
                        </div>
                        
                        <div className="flex items-center p-3 bg-gray-700 rounded-lg">
                          <img src="/recursos/run.png" alt="Grupo" className="w-10 h-10 rounded-full mr-4" />
                          <div className="flex-grow">
                            <h4 className="font-medium text-white">Corrida e Cardio</h4>
                            <p className="text-xs text-gray-400">1.8k membros</p>
                          </div>
                          <button className="bg-indigo-500 text-white text-xs px-3 py-1 rounded-full hover:bg-indigo-600">
                            Entrar
                          </button>
                        </div>
                        
                        <div className="flex items-center p-3 bg-gray-700 rounded-lg">
                          <img src="/recursos/nutri.png" alt="Grupo" className="w-10 h-10 rounded-full mr-4" />
                          <div className="flex-grow">
                            <h4 className="font-medium text-white">Nutrição Fitness</h4>
                            <p className="text-xs text-gray-400">3.1k membros</p>
                          </div>
                          <button className="bg-indigo-500 text-white text-xs px-3 py-1 rounded-full hover:bg-indigo-600">
                            Entrar
                          </button>
                        </div>
                        
                        <div className="flex items-center p-3 bg-gray-700 rounded-lg">
                          <img src="/recursos/beg.png" alt="Grupo" className="w-10 h-10 rounded-full mr-4" />
                          <div className="flex-grow">
                            <h4 className="font-medium text-white">Iniciantes</h4>
                            <p className="text-xs text-gray-400">5.3k membros</p>
                          </div>
                          <button className="bg-indigo-500 text-white text-xs px-3 py-1 rounded-full hover:bg-indigo-600">
                            Entrar
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}
        </div>
        
        {/* CTA Section */}
        <section className="bg-gradient-to-r from-indigo-600 to-purple-600 py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Pronto para Transformar seu Treino?</h2>
            <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
              Junte-se a milhares de usuários que já estão alcançando resultados impressionantes com o GymTrackr.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/Registrar">
              <button className="px-8 py-3 bg-white text-indigo-600 rounded-lg font-medium hover:bg-indigo-50 transition-colors shadow-md">
                Começar Gratuitamente
              </button>
            </Link>
            </div>
          </div>
        </section>
        
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