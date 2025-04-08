"use client";

import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Blog() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Sample blog posts data
  const blogPosts = [
    {
      id: 1,
      title: "7 Dicas para Maximizar seus Ganhos Musculares",
      excerpt: "Descubra estratégias comprovadas para otimizar seus resultados de hipertrofia com estes métodos baseados em evidências.",
      author: "Carlos Silva",
      date: "15 Março, 2025",
      category: "Hipertrofia",
      image: "/blog/GanhosMusculares.png"
    },
    {
      id: 2,
      title: "Guia Completo de Nutrição para Atletas",
      excerpt: "Tudo o que você precisa saber sobre alimentação para melhorar seu desempenho e recuperação nos treinos.",
      author: "Ana Costa",
      date: "2 Março, 2025",
      category: "Nutrição",
      image: "/blog/NutricaoAtletas.png"
    },
    {
      id: 3,
      title: "Como Monitorar sua Progressão de Força Efetivamente",
      excerpt: "Aprenda a utilizar o GymTrackr para acompanhar seus ganhos de força e identificar padrões para melhorar seus resultados.",
      author: "Marcos Oliveira",
      date: "24 Fevereiro, 2025",
      category: "Treinamento",
      image: "/blog/progresso.png"
    },
    {
      id: 4,
      title: "Periodização de Treino para Iniciantes",
      excerpt: "Entenda como estruturar seu treinamento em ciclos para continuar progredindo e evitar platôs.",
      author: "Juliana Santos",
      date: "15 Fevereiro, 2025",
      category: "Programação",
      image: "/blog/Iniciantes.png"
    },
    {
      id: 5,
      title: "Alongamento e Mobilidade: A Chave para Prevenir Lesões",
      excerpt: "Conheça rotinas de mobilidade que podem melhorar seu desempenho nos exercícios e reduzir riscos de lesões.",
      author: "Roberto Fernandes",
      date: "3 Fevereiro, 2025",
      category: "Recuperação",
      image: "/blog/Alongamento.png"
    },
  ];

  // Featured post is the first one
  const featuredPost = blogPosts[0];
  const regularPosts = blogPosts.slice(1);

  return (
    <>
      <Head>
        <title>Blog - GymTrackr</title>
        <meta name="description" content="Dicas, guias e notícias sobre fitness e treinamento" />
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
                <a href="/Blog" className="font-medium text-indigo-400 transition-colors">Blog</a>
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
              <a href="/Recursos" className="font-medium text-gray-300 hover:text-indigo-400 transition-colors py-2">Recursos</a>
              <a href="/Blog" className="font-medium text-indigo-400 transition-colors py-2">Blog</a>
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
          {/* Blog Header */}
          <section className="py-12 md:py-16 border-b border-gray-700">
            <h1 className="text-4xl md:text-5xl font-bold text-center text-white mb-6">Blog GymTrackr</h1>
            <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto">
              Dicas, guias e notícias sobre fitness, treinamento de força, nutrição e como aproveitar ao máximo o GymTrackr.
            </p>
          </section>
          
          {/* Blog Categories */}
          <div className="py-8 flex justify-center flex-wrap gap-4">
            <button className="px-4 py-2 bg-indigo-500 text-white rounded-full">Todos</button>
            <button className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-full transition-colors">Treinamento</button>
            <button className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-full transition-colors">Nutrição</button>
            <button className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-full transition-colors">Hipertrofia</button>
            <button className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-full transition-colors">Recuperação</button>
            <button className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-full transition-colors">Dicas</button>
          </div>
          
          {/* Featured Post */}
          <section className="pb-12 pt-6">
            <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-700 hover:shadow-xl transition-shadow">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <div className="relative h-64 md:h-full">
                    <img 
                      src={featuredPost.image || "/api/placeholder/800/600"}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-indigo-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {featuredPost.category}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-between">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{featuredPost.title}</h2>
                    <p className="text-gray-300 mb-6">{featuredPost.excerpt}</p>
                  </div>
                  <div>
                    <div className="flex items-center text-sm text-gray-400 mb-4">
                      <span>{featuredPost.author}</span>
                      <span className="mx-2">•</span>
                      <span>{featuredPost.date}</span>
                    </div>
                    <Link href={`/blog/${featuredPost.id}`}>
                      <button className="px-6 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg font-medium hover:opacity-90 transition-opacity shadow-md">
                        Ler mais
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Regular Posts Grid */}
          <section className="py-12 border-t border-gray-700">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white">Artigos Recentes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {regularPosts.map(post => (
                <div key={post.id} className="bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-gray-700">
                  <div className="relative h-48">
                    <img 
                      src={post.image || "/api/placeholder/600/400"}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-indigo-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3">{post.title}</h3>
                    <p className="text-gray-300 mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-400">
                        <span>{post.author}</span>
                        <span className="mx-2">•</span>
                        <span>{post.date}</span>
                      </div>
                      <Link href={`/blog/${post.id}`}>
                        <span className="text-indigo-400 hover:text-indigo-300 font-medium transition-colors">
                          Ler mais →
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
          
          {/* Newsletter Section */}
          <section className="py-16 bg-gray-800 rounded-xl my-12 border border-gray-700">
            <div className="text-center px-4">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Inscreva-se no nosso Newsletter</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Receba as últimas dicas de fitness, novidades sobre o GymTrackr e conteúdo exclusivo diretamente em seu email.
              </p>
              <form className="max-w-md mx-auto flex">
                <input 
                  type="email" 
                  placeholder="Seu email" 
                  className="flex-grow px-4 py-3 rounded-l-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <button 
                  type="submit" 
                  className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-r-lg font-medium hover:opacity-90 transition-opacity"
                >
                  Inscrever
                </button>
              </form>
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