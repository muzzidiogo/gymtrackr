"use client";

import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Sobre() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Dados dos desenvolvedores
  const desenvolvedores = [
    {
      nome: "João Fernando Menezes",
      cargo: "Back-End Developer",
      foto: "/JoaoFernando.jpg",
      descricao: "Electrical Engineering Student @ UFMG | Back-End Developer | Passionate about technology and innovation.",
      github: "https://github.com/jfmenezesm",
      linkedin: "https://www.linkedin.com/in/jfmenezesm/"
    },
    {
      nome: "Diogo Muzzi Mortimer",
      cargo: "Back-End Developer",
      foto: "DiogoMuzzi.jpg",
      descricao: "Data Science, Machine Learning and Robotics | Electrical Engineering Undergrad @ UFMG | Back-End Developer | Passionate about technology and innovation.",
      github: "https://github.com/muzzidiogo",
      linkedin: "https://www.linkedin.com/in/diogo-muzzi/"
    },
    {
      nome: "Elias M. Nacif Rocha",
      cargo: "Front-End Developer",
      foto: "/Elias.jpg",
      descricao: "Estudante de Engenharia Elétrica UFMG | Amante de programação (C++, C, Python) e desenvolvimento web (HTML, CSS, JS, React).",
      github: "https://github.com/Elias-Nacif",
      linkedin: "https://www.linkedin.com/in/elias-nacif-96125a1ba/"
    },
    {
      nome: "Gabriel Silva",
      cargo: "Full-Stack Developer",
      foto: "/GabrielSilva.jpg",
      descricao: "Estagiário de engenharia | Engenharia Elétrica na UFMG | Engenharia da Computação | Cybersecurity",
      github: "https://github.com/gabrovnikov",
      linkedin: "https://www.linkedin.com/in/gsa479/"
    }
  ];

  return (
    <>
      <Head>
        <title>Sobre | GymTrackr</title>
        <meta name="description" content="Conheça a equipe por trás do GymTrackr" />
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
                <a href="/recursos" className="font-medium text-gray-300 hover:text-indigo-400 transition-colors">Recursos</a>
                <a href="/planos" className="font-medium text-gray-300 hover:text-indigo-400 transition-colors">Planos</a>
                <a href="/Sobre" className="font-medium text-indigo-400 transition-colors">Sobre</a>
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
              <a href="/sobre" className="font-medium text-indigo-400 transition-colors py-2">Sobre</a>
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
          {/* Hero Section */}
          <section className="pt-12 md:pt-16 pb-12 md:pb-24 flex flex-col md:flex-row items-center border-b border-gray-700">
            <div className="w-full">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-center text-indigo-300 mb-6">
                Sobre o GymTrackr
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto text-center">
                Conheça a história, missão e a equipe por trás da plataforma que está transformando a maneira como as pessoas acompanham seu progresso fitness.
              </p>
            </div>
          </section>
          
          {/* Nossa História Section */}
          <section className="py-16 md:py-24 border-b border-gray-700">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-100 mb-16">Nossa História</h2>
              <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700">
                <p className="text-gray-300 leading-relaxed mb-6">
                  O GymTrackr nasceu em 2023 com uma missão clara: simplificar o acompanhamento fitness e tornar o progresso visível e motivador. Frustrados com as opções disponíveis no mercado, nossa equipe de desenvolvedores e entusiastas de fitness decidiu criar uma solução que realmente atendesse às necessidades dos praticantes.
                </p>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Desde o início, nosso foco tem sido combinar uma interface intuitiva com recursos poderosos que realmente ajudem as pessoas a alcançarem seus objetivos. Desenvolvemos a plataforma em colaboração constante com personal trainers e atletas para garantir que nosso produto ofereça valor real.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Hoje, estamos orgulhosos de atender milhares de usuários em todo o Brasil, ajudando-os a transformar seus corpos e vidas com dados e insights que realmente importam. Continuamos evoluindo e crescendo, sempre com o objetivo de tornar a jornada fitness mais fácil e gratificante.
                </p>
              </div>
            </div>
          </section>
          
          {/* Nossos Valores Section */}
          <section className="py-16 md:py-24 border-b border-gray-700">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-100 mb-16">Nossos Valores</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-2 transition-transform border border-gray-700">
                <div className="text-5xl mb-6 text-indigo-400">🎯</div>
                <h3 className="text-xl font-bold mb-4 text-indigo-300">Clareza nos Objetivos</h3>
                <p className="text-gray-300 leading-relaxed">
                  Acreditamos que metas claras e mensuráveis são essenciais para o progresso. Nossa plataforma foi desenvolvida para trazer transparência e direção à sua jornada fitness.
                </p>
              </div>
              <div className="bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-2 transition-transform border border-gray-700">
                <div className="text-5xl mb-6 text-indigo-400">🤝</div>
                <h3 className="text-xl font-bold mb-4 text-indigo-300">Comunidade e Suporte</h3>
                <p className="text-gray-300 leading-relaxed">
                  O fitness é uma jornada compartilhada. Valorizamos a comunidade e o apoio mútuo como elementos fundamentais para o sucesso a longo prazo.
                </p>
              </div>
              <div className="bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-2 transition-transform border border-gray-700">
                <div className="text-5xl mb-6 text-indigo-400">📈</div>
                <h3 className="text-xl font-bold mb-4 text-indigo-300">Evolução Constante</h3>
                <p className="text-gray-300 leading-relaxed">
                  Assim como incentivamos nossos usuários a buscarem o progresso contínuo, estamos sempre evoluindo nossa plataforma com base no feedback e nas necessidades da comunidade.
                </p>
              </div>
            </div>
          </section>
          
          {/* Equipe Section */}
          <section className="py-16 md:py-24 border-b border-gray-700">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-100 mb-16">Nossa Equipe</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {desenvolvedores.map((dev, index) => (
                <div key={index} className="bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-700 hover:shadow-xl transition-shadow transform hover:-translate-y-2 transition-transform">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                    <img 
                      src={dev.foto} 
                      alt={`Foto de ${dev.nome}`} 
                      className="w-full h-64 object-cover"
                      onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = "/api/placeholder/300/300";
                      }}
                    />
                    <div className="absolute bottom-0 left-0 p-4">
                      <h3 className="text-xl font-bold text-white">{dev.nome}</h3>
                      <p className="text-indigo-300">{dev.cargo}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-300 leading-relaxed mb-4">{dev.descricao}</p>
                    <div className="flex space-x-4">
                      <a href={dev.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-400 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github">
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                      </a>
                      <a href={dev.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-400 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin">
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                          <rect x="2" y="9" width="4" height="12"></rect>
                          <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
          
          {/* CTA Section */}
          <section className="py-16 md:py-24 text-center">
            <div className="max-w-3xl mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-100">Junte-se a nós nessa jornada</h2>
              <p className="text-xl text-gray-300 mb-10">Faça parte da comunidade GymTrackr e transforme a maneira como você acompanha seu progresso fitness.</p>
              <div className="inline-block bg-gradient-to-r from-indigo-500 to-purple-500 p-0.5 rounded-lg shadow-lg">
                <Link href="/Registrar">
                <button className="px-8 py-4 bg-gray-900 text-white rounded-lg font-medium hover:bg-opacity-90 transition-all transform hover:-translate-y-1">
                  Comece Agora
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