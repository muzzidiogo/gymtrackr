"use client";

import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';

const userData = {
    nome: "Carlos Silva",
    email: "carlos.silva@email.com"
};

// Dados de exemplo para treino atual
const currentWorkout = {
    id: 1,
    nome: "Treino A - Superior",
    categoria: "Hipertrofia",
    ultimoTempo: "02h30",
    exercicios: [
        { nome: "Supino Reto", series: 4, repeticoes: "10-12", peso: "80kg", completed: false },
        { nome: "Puxada Frontal", series: 4, repeticoes: "10-12", peso: "70kg", completed: false },
        { nome: "Desenvolvimento", series: 3, repeticoes: "10-12", peso: "20kg", completed: false },
        { nome: "Rosca Direta", series: 3, repeticoes: "12-15", peso: "25kg", completed: false },
        { nome: "Tríceps Corda", series: 3, repeticoes: "12-15", peso: "30kg", completed: false }
    ]
};

export default function ExecutarTreino() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [workout, setWorkout] = useState(currentWorkout);
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [editingExercise, setEditingExercise] = useState<number | null>(null);
    const [exerciseEdits, setExerciseEdits] = useState({
        series: 0,
        repeticoes: "",
        peso: ""
    });
    const [showFinishConfirmation, setShowFinishConfirmation] = useState(false);
    const [showAddExerciseForm, setShowAddExerciseForm] = useState(false);
    const [newExercise, setNewExercise] = useState({
        nome: "",
        series: 3,
        repeticoes: "10-12",
        peso: "0kg",
        completed: false
    });

    // Efeito para o cronômetro
    useEffect(() => {
        let interval: NodeJS.Timeout | null = null;

        if (isRunning) {
            interval = setInterval(() => {
                setTime(prevTime => prevTime + 1);
            }, 1000);
        } else if (interval) {
            clearInterval(interval);
        }

        return () => {
            if (interval) clearInterval(interval);
        };
    }, [isRunning]);

    // Funções para cronômetro
    const startTimer = () => setIsRunning(true);
    const pauseTimer = () => setIsRunning(false);
    const resetTimer = () => {
        setIsRunning(false);
        setTime(0);
    };

    // Formatar o tempo para exibição (HH:MM:SS)
    const formatTime = (timeInSeconds: number) => {
        const hours = Math.floor(timeInSeconds / 3600);
        const minutes = Math.floor((timeInSeconds % 3600) / 60);
        const seconds = timeInSeconds % 60;

        return [
            hours.toString().padStart(2, '0'),
            minutes.toString().padStart(2, '0'),
            seconds.toString().padStart(2, '0')
        ].join(':');
    };

    // Marcar exercício como concluído ou não
    const toggleExerciseCompletion = (index: number) => {
        const updatedExercicios = [...workout.exercicios];
        updatedExercicios[index] = {
            ...updatedExercicios[index],
            completed: !updatedExercicios[index].completed
        };

        setWorkout({
            ...workout,
            exercicios: updatedExercicios
        });
    };

    // Iniciar edição de um exercício
    const startEditingExercise = (index: number) => {
        setEditingExercise(index);
        setExerciseEdits({
            series: workout.exercicios[index].series,
            repeticoes: workout.exercicios[index].repeticoes,
            peso: workout.exercicios[index].peso
        });
    };

    // Salvar edição de exercício
    const saveExerciseEdit = () => {
        if (editingExercise === null) return;

        const updatedExercicios = [...workout.exercicios];
        updatedExercicios[editingExercise] = {
            ...updatedExercicios[editingExercise],
            series: exerciseEdits.series,
            repeticoes: exerciseEdits.repeticoes,
            peso: exerciseEdits.peso
        };

        setWorkout({
            ...workout,
            exercicios: updatedExercicios
        });

        setEditingExercise(null);
    };

    const addExercise = () => {
        // Validação básica
        if (!newExercise.nome) {
            alert("Nome do exercício é obrigatório");
            return;
        }

        const updatedExercicios = [...workout.exercicios, newExercise];

        setWorkout({
            ...workout,
            exercicios: updatedExercicios
        });

        // Resetar o formulário
        setNewExercise({
            nome: "",
            series: 3,
            repeticoes: "10-12",
            peso: "0kg",
            completed: false
        });

        // Fechar o formulário
        setShowAddExerciseForm(false);
    };

    const deleteExercise = (index: number) => {
        if (window.confirm("Tem certeza que deseja excluir este exercício?")) {
            const updatedExercicios = workout.exercicios.filter((_, i) => i !== index);

            setWorkout({
                ...workout,
                exercicios: updatedExercicios
            });
        }
    };

    // Concluir treino
    const finishWorkout = () => {
        // Aqui você pode adicionar lógica para salvar o treino concluído
        // Por exemplo, guardar o tempo total, os exercícios feitos, etc.
        const totalTime = formatTime(time);
        console.log(`Treino concluído em ${totalTime}`);

        // Simular retorno à página de treinos
        window.location.href = "/User/Treinos";
    };

    const openFinishConfirmation = () => {
        setIsRunning(false); // Pausa o cronômetro
        setShowFinishConfirmation(true);
    };

    return (
        <>
            <Head>
                <title>Executar Treino - GymTrackr</title>
                <meta name="description" content="Execução de treino personalizado" />
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
                                <a href="/User/Treinos" className="font-medium text-indigo-400 transition-colors">Treinos</a>
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
                            <a href="/User" className="font-medium text-gray-300 hover:text-indigo-400 transition-colors py-2">Home</a>
                            <a href="/User/Treinos" className="font-medium text-indigo-400 transition-colors py-2">Treinos</a>
                            <a href="/User/Desempenho" className="font-medium text-gray-300 hover:text-indigo-400 transition-colors py-2">Desempenho</a>
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
                        <Link href="/User/Treinos" className="hover:text-indigo-400">Treinos</Link>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mx-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        <span className="text-indigo-400">{workout.nome}</span>
                    </div>

                    {/* Page Header */}
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-white mb-2">{workout.nome}</h1>
                        <div className="flex items-center text-gray-400">
                            <span className="px-3 py-1 bg-gray-700 rounded-md text-indigo-300 text-sm mr-3">{workout.categoria}</span>
                            <span>Tempo anterior: {workout.ultimoTempo}</span>
                        </div>
                    </div>

                    {/* Cronômetro e Controles */}
                    <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl border border-gray-700 shadow-xl mb-8">
                        <div className="p-6">
                            <h2 className="text-xl font-semibold text-white mb-6">Cronômetro do Treino</h2>
                            <div className="flex flex-col items-center">
                                <div className="text-6xl font-bold text-white mb-8 font-mono">{formatTime(time)}</div>
                                <div className="flex space-x-4">
                                    {!isRunning ? (
                                        <button
                                            onClick={startTimer}
                                            className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            Rodar
                                        </button>
                                    ) : (
                                        <button
                                            onClick={pauseTimer}
                                            className="px-6 py-3 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors flex items-center"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            Pausar
                                        </button>
                                    )}
                                    {time > 0 && (
                                        <button
                                            onClick={resetTimer}
                                            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                            </svg>
                                            Zerar
                                        </button>
                                    )}
                                    <button
                                        onClick={openFinishConfirmation}
                                        className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors flex items-center"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        Finalizar Treino
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Lista de Exercícios */}
                    <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl border border-gray-700 shadow-xl">
                        <div className="p-6">
                            <h2 className="text-xl font-semibold text-white mb-6">Exercícios</h2>
                            <div className="space-y-4">
                                {workout.exercicios.map((exercicio, index) => (
                                    <div
                                        key={index}
                                        className={`p-4 rounded-lg border ${exercicio.completed ? 'bg-gray-700/60 border-green-500' : 'bg-gray-750 border-gray-700'}`}
                                    >
                                        {editingExercise === index ? (
                                            // Modo de edição
                                            <div className="space-y-4">
                                                <div className="flex justify-between items-center">
                                                    <h3 className="text-lg font-medium text-white">{exercicio.nome}</h3>
                                                    <div className="flex space-x-2">
                                                        <button
                                                            onClick={saveExerciseEdit}
                                                            className="p-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                                                        >
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                            </svg>
                                                        </button>
                                                        <button
                                                            onClick={() => setEditingExercise(null)}
                                                            className="p-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                                                        >
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                                    <div>
                                                        <label className="block text-xs text-gray-400 mb-1">Séries</label>
                                                        <input
                                                            type="number"
                                                            className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500"
                                                            value={exerciseEdits.series}
                                                            onChange={(e) => setExerciseEdits({ ...exerciseEdits, series: parseInt(e.target.value) || 0 })}
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="block text-xs text-gray-400 mb-1">Repetições</label>
                                                        <input
                                                            type="text"
                                                            className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500"
                                                            value={exerciseEdits.repeticoes}
                                                            onChange={(e) => setExerciseEdits({ ...exerciseEdits, repeticoes: e.target.value })}
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="block text-xs text-gray-400 mb-1">Peso</label>
                                                        <input
                                                            type="text"
                                                            className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500"
                                                            value={exerciseEdits.peso}
                                                            onChange={(e) => setExerciseEdits({ ...exerciseEdits, peso: e.target.value })}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        ) : (
                                            // Modo de visualização
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center">
                                                    <button
                                                        onClick={() => toggleExerciseCompletion(index)}
                                                        className={`w-6 h-6 rounded-full flex items-center justify-center mr-4 ${exercicio.completed ? 'bg-green-500 text-white' : 'border border-gray-500'}`}
                                                    >
                                                        {exercicio.completed && (
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                            </svg>
                                                        )}
                                                    </button>
                                                    <div>
                                                        <h3 className={`text-lg font-medium ${exercicio.completed ? 'text-gray-300 line-through' : 'text-white'}`}>
                                                            {exercicio.nome}
                                                        </h3>
                                                        <div className="flex items-center space-x-4 text-sm text-gray-400 mt-1">
                                                            <span>{exercicio.series} séries</span>
                                                            <span>{exercicio.repeticoes} repetições</span>
                                                            <span>{exercicio.peso}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex space-x-2">
                                                    <button
                                                        onClick={() => startEditingExercise(index)}
                                                        className="p-2 text-gray-400 hover:text-indigo-400 transition-colors"
                                                    >
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                        </svg>
                                                    </button>
                                                    <button
                                                        onClick={() => deleteExercise(index)}
                                                        className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                                                    >
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ))}
                                {/* Botão Adicionar Exercício */}
                                <div className="mt-6 flex justify-center">
                                    <button
                                        onClick={() => setShowAddExerciseForm(true)}
                                        className="px-5 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors flex items-center"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                        </svg>
                                        Adicionar Exercício
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* Botão de voltar */}
                    <div className="mt-8 flex justify-end">
                        <Link href="/User/Treinos">
                            <button
                                className="px-5 py-3 bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600 transition-colors flex items-center"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                                </svg>
                                Voltar para Treinos
                            </button>
                        </Link>
                    </div>

                    {/* Modal de confirmação para finalizar treino */}
                    {showFinishConfirmation && (
                        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                            <div className="bg-gray-800 rounded-xl border border-gray-700 max-w-md w-full">
                                <div className="p-6 border-b border-gray-700">
                                    <h3 className="text-xl font-bold text-white">Finalizar Treino</h3>
                                </div>
                                <div className="p-6">
                                    <p className="text-gray-300">Deseja realmente finalizar este treino? Seu tempo será registrado.</p>
                                    <div className="mt-4 bg-gray-700 p-4 rounded-lg">
                                        <p className="text-gray-300">Tempo atual: <span className="text-white font-bold">{formatTime(time)}</span></p>
                                        <p className="text-gray-300 mt-2">Exercícios concluídos: <span className="text-white font-bold">{workout.exercicios.filter(ex => ex.completed).length} de {workout.exercicios.length}</span></p>
                                    </div>
                                </div>
                                <div className="p-6 border-t border-gray-700 flex justify-end space-x-3">
                                    <button
                                        className="px-4 py-2 bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600 transition-colors"
                                        onClick={() => setShowFinishConfirmation(false)}
                                    >
                                        Cancelar
                                    </button>
                                    <button
                                        className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                                        onClick={finishWorkout}
                                    >
                                        Confirmar
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Modal para adicionar exercício */}
                {showAddExerciseForm && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                        <div className="bg-gray-800 rounded-xl border border-gray-700 max-w-md w-full">
                            <div className="p-6 border-b border-gray-700">
                                <h3 className="text-xl font-bold text-white">Adicionar Novo Exercício</h3>
                            </div>
                            <div className="p-6">
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm text-gray-400 mb-1">Nome do Exercício</label>
                                        <input
                                            type="text"
                                            className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-1 focus:ring-indigo-500"
                                            placeholder="Ex: Supino Reto"
                                            value={newExercise.nome}
                                            onChange={(e) => setNewExercise({ ...newExercise, nome: e.target.value })}
                                        />
                                    </div>
                                    <div className="grid grid-cols-3 gap-4">
                                        <div>
                                            <label className="block text-sm text-gray-400 mb-1">Séries</label>
                                            <input
                                                type="number"
                                                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-1 focus:ring-indigo-500"
                                                value={newExercise.series}
                                                onChange={(e) => setNewExercise({ ...newExercise, series: parseInt(e.target.value) || 0 })}
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm text-gray-400 mb-1">Repetições</label>
                                            <input
                                                type="text"
                                                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-1 focus:ring-indigo-500"
                                                placeholder="Ex: 10-12"
                                                value={newExercise.repeticoes}
                                                onChange={(e) => setNewExercise({ ...newExercise, repeticoes: e.target.value })}
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm text-gray-400 mb-1">Peso</label>
                                            <input
                                                type="text"
                                                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-1 focus:ring-indigo-500"
                                                placeholder="Ex: 30kg"
                                                value={newExercise.peso}
                                                onChange={(e) => setNewExercise({ ...newExercise, peso: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-6 border-t border-gray-700 flex justify-end space-x-3">
                                <button
                                    className="px-4 py-2 bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600 transition-colors"
                                    onClick={() => setShowAddExerciseForm(false)}
                                >
                                    Cancelar
                                </button>
                                <button
                                    className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                                    onClick={addExercise}
                                >
                                    Adicionar
                                </button>
                            </div>
                        </div>
                    </div>
                )}

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
            </div >
        </>
    );
}