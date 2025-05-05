"use client";

import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';

interface Exercise {
    id: number;
    nome: string;
    series: number;
    repeticoes: number;
    peso: number;
}

interface Session {
    id: number;
    nome: string;
    ultima_atualizacao: string;
    exercicios: Exercise[];
}

export default function Treinos() {
    const [sessions, setSessions] = useState<Session[]>([]);
    const [expandedSession, setExpandedSession] = useState<number | null>(null);
    const [availableExercises, setAvailableExercises] = useState<Exercise[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedSessionId, setSelectedSessionId] = useState<number | null>(null);
    const [selectedExerciseId, setSelectedExerciseId] = useState<number | null>(null);
    const seriesRef = useRef<HTMLInputElement>(null);
    const repeticoesRef = useRef<HTMLInputElement>(null);
    const pesoRef = useRef<HTMLInputElement>(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [userData, setUserData] = useState<{ nome: string }>({ nome: "" });
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [editingExercise, setEditingExercise] = useState<{ sessionId: number; exerciseId: number } | null>(null);

    useEffect(() => {
        async function fetchUserData() {
            try {
                const userId = localStorage.getItem('userId');
                if (!userId) {
                    console.error("User ID not found");
                    return;
                }

                const response = await fetch(`http://localhost:5000/api/usuarios/${userId}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                if (response.ok) {
                    const data = await response.json();
                    setUserData({ nome: data.nome });
                } else {
                    console.error("Failed to fetch user data");
                }
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        }

        async function fetchSessions() {
            try {
                const userId = localStorage.getItem('userId');
                if (!userId) {
                    console.error("User ID not found");
                    return;
                }

                const response = await fetch(`http://localhost:5000/api/usuarios/${userId}/sessoes`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                if (response.ok) {
                    const data = await response.json();
                    setSessions(data);
                } else {
                    console.error("Failed to fetch sessions");
                }
            } catch (error) {
                console.error("Error fetching sessions:", error);
            }
        }

        async function fetchExercises() {
            try {
                const response = await fetch('http://localhost:5000/api/exercicios', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                if (response.ok) {
                    const data = await response.json();
                    setAvailableExercises(data);
                } else {
                    console.error("Failed to fetch exercises");
                }
            } catch (error) {
                console.error("Error fetching exercises:", error);
            }
        }

        fetchUserData();
        fetchSessions();
        fetchExercises();
    }, []);

    const handleEditSession = async (sessionId: number) => {
        try {
            const newName = prompt("Digite o novo nome para o treino:");
            if (!newName) {
                console.error("Session name is required");
                return;
            }

            const userId = localStorage.getItem('userId');
            if (!userId) {
                console.error("User ID not found");
                return;
            }

            const response = await fetch(`http://localhost:5000/api/usuarios/${userId}/sessoes/${sessionId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ nome: newName }),
            });

            if (response.ok) {
                const updatedSession = await response.json();
                setSessions((prevSessions) =>
                    prevSessions.map((session) =>
                        session.id === sessionId ? { ...session, nome: updatedSession.sessao.nome } : session
                    )
                );
            } else {
                console.error("Failed to edit session");
            }
        } catch (error) {
            console.error("Error editing session:", error);
        }
    };

    const handleRemoveSession = async (sessionId: number) => {
        try {
            const confirmDelete = confirm("Tem certeza de que deseja excluir este treino?");
            if (!confirmDelete) return;

            const userId = localStorage.getItem('userId');
            if (!userId) {
                console.error("User ID not found");
                return;
            }

            const response = await fetch(`http://localhost:5000/api/usuarios/${userId}/sessoes/${sessionId}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                setSessions((prevSessions) => prevSessions.filter((session) => session.id !== sessionId));
            } else {
                console.error("Failed to delete session");
            }
        } catch (error) {
            console.error("Error deleting session:", error);
        }
    };

    const handleAddExercise = async (sessionId: number, newExercise: { exercicio_id: number; series: number; repeticoes: number; peso: number }) => {
        try {
            const response = await fetch(`http://localhost:5000/api/usuarios/${localStorage.getItem('userId')}/sessoes/${sessionId}/exercicios`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newExercise),
            });

            if (response.ok) {
                const updatedSession = await response.json();
                setSessions((prevSessions) =>
                    prevSessions.map((session) =>
                        session.id === sessionId ? { ...session, exercicios: [...session.exercicios, updatedSession.exercicio_sessao] } : session
                    )
                );
            } else {
                console.error("Failed to add exercise");
            }
        } catch (error) {
            console.error("Error adding exercise:", error);
        }
    };

    const handleEditExercise = async (sessionId: number, exerciseId: number, updatedExercise: { series?: number; repeticoes?: number; peso?: number }) => {
        try {
            const response = await fetch(`http://localhost:5000/api/usuarios/${localStorage.getItem('userId')}/sessoes/${sessionId}/exercicios/${exerciseId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedExercise),
            });

            if (response.ok) {
                const updatedExerciseData = await response.json();
                setSessions((prevSessions) =>
                    prevSessions.map((session) =>
                        session.id === sessionId
                            ? {
                                  ...session,
                                  exercicios: session.exercicios.map((exercise) =>
                                      exercise.id === exerciseId ? updatedExerciseData.exercicio_sessao : exercise
                                  ),
                              }
                            : session
                    )
                );
            } else {
                console.error("Failed to edit exercise");
            }
        } catch (error) {
            console.error("Error editing exercise:", error);
        }
    };

    const handleRemoveExercise = async (sessionId: number, exerciseId: number) => {
        try {
            const response = await fetch(`http://localhost:5000/api/usuarios/${localStorage.getItem('userId')}/sessoes/${sessionId}/exercicios/${exerciseId}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                setSessions((prevSessions) =>
                    prevSessions.map((session) =>
                        session.id === sessionId
                            ? { ...session, exercicios: session.exercicios.filter((exercise) => exercise.id !== exerciseId) }
                            : session
                    )
                );
            } else {
                console.error("Failed to remove exercise");
            }
        } catch (error) {
            console.error("Error removing exercise:", error);
        }
    };

    const openAddExerciseModal = (sessionId: number) => {
        setSelectedSessionId(sessionId);
        setIsModalOpen(true);
    };

    const closeAddExerciseModal = () => {
        setIsModalOpen(false);
        setSelectedSessionId(null);
        setSelectedExerciseId(null);
    };

    const confirmAddExercise = async () => {
        if (!selectedSessionId || !selectedExerciseId) {
            console.error("Session or exercise not selected");
            return;
        }

        const newExercise = {
            exercicio_id: selectedExerciseId,
            series: parseInt(seriesRef.current?.value || '0', 10),
            repeticoes: parseInt(repeticoesRef.current?.value || '0', 10),
            peso: parseFloat(pesoRef.current?.value || '0'),
        };

        await handleAddExercise(selectedSessionId, newExercise);
        closeAddExerciseModal();
    };

    const openEditExerciseModal = (sessionId: number, exerciseId: number) => {
        const session = sessions.find((s) => s.id === sessionId);
        const exercise = session?.exercicios.find((e) => e.id === exerciseId);

        if (exercise) {
            // Correctly set the selected exercise ID to the actual exercise ID
            setSelectedExerciseId(exercise.exercicio_id);
            // Correctly access series, repeticoes, and peso from the exercise object
            if (seriesRef.current) seriesRef.current.value = exercise.series.toString();
            if (repeticoesRef.current) repeticoesRef.current.value = exercise.repeticoes.toString();
            if (pesoRef.current) pesoRef.current.value = exercise.peso.toString();
        }

        setEditingExercise({ sessionId, exerciseId });
        setIsEditModalOpen(true);
    };

    const closeEditExerciseModal = () => {
        setEditingExercise(null);
        setIsEditModalOpen(false);
    };

    const confirmEditExercise = async () => {
        if (!editingExercise || !selectedExerciseId) {
            console.error("Session or exercise not selected");
            return;
        }

        const { sessionId, exerciseId } = editingExercise;

        const updatedExercise = {
            exercicio_id: selectedExerciseId,
            series: parseInt(seriesRef.current?.value || '0', 10),
            repeticoes: parseInt(repeticoesRef.current?.value || '0', 10),
            peso: parseFloat(pesoRef.current?.value || '0'),
        };

        try {
            const response = await fetch(
                `http://localhost:5000/api/usuarios/${localStorage.getItem('userId')}/sessoes/${sessionId}/exercicios/${exerciseId}`,
                {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(updatedExercise),
                }
            );

            if (response.ok) {
                const updatedExerciseData = await response.json();
                setSessions((prevSessions) =>
                    prevSessions.map((session) =>
                        session.id === sessionId
                            ? {
                                  ...session,
                                  exercicios: session.exercicios.map((exercise) =>
                                      exercise.id === exerciseId ? updatedExerciseData.exercicio_sessao : exercise
                                  ),
                              }
                            : session
                    )
                );
                closeEditExerciseModal();
            } else {
                console.error("Failed to edit exercise");
            }
        } catch (error) {
            console.error("Error editing exercise:", error);
        }
    };

    const handleAddSession = async () => {
        try {
            const userId = localStorage.getItem('userId');
            if (!userId) {
                console.error("User ID not found");
                return;
            }

            const sessionName = prompt("Digite o nome do novo treino:");
            if (!sessionName) {
                console.error("Session name is required");
                return;
            }

            const response = await fetch(`http://localhost:5000/api/usuarios/${userId}/sessoes`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ nome: sessionName }),
            });

            if (response.ok) {
                const newSession = await response.json();
                setSessions((prevSessions) => [...prevSessions, newSession.sessao]);
            } else {
                console.error("Failed to add session");
            }
        } catch (error) {
            console.error("Error adding session:", error);
        }
    };

    return (
        <>
            <Head>
                <title>Meus Treinos - GymTrackr</title>
                <meta name="description" content="Gerencie seus treinos personalizados" />
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
                                        <a href="/User/Dados" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-indigo-400">
                                            Meus Dados
                                        </a>
                                        <a href="/">
                                            <button className="w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-indigo-400">
                                                Sair
                                            </button>
                                        </a>
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
                            <a href="/User/Treinos" className="font-medium text-gray-300 hover:text-indigo-400 transition-colors py-2">Treinos</a>
                            <a href="/User/Desempenho" className="font-medium text-gray-300 hover:text-indigo-400 transition-colors py-2">Desempenho</a>
                            <a href="/User/Comunidade" className="font-medium text-gray-300 hover:text-indigo-400 transition-colors py-2">Comunidade</a>
                            <div className="pt-4 border-t border-gray-700">
                                <a href="/User/Dados" className="block py-2 text-gray-300 hover:text-indigo-400">
                                    Meus Dados
                                </a>
                                <button className="w-full text-left py-2 text-gray-300 hover:text-indigo-400">
                                    Sair
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 flex-grow">
                    <div className="mb-8 flex justify-between items-center">
                        <div>
                            <h1 className="text-3xl font-bold text-white">Meus Treinos</h1>
                            <p className="text-gray-400">Gerencie e visualize suas sessões de treino</p>
                        </div>
                        <button
                            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                            onClick={handleAddSession}
                        >
                            Adicionar novo treino
                        </button>
                    </div>

                    <div className="space-y-6">
                        {sessions.length === 0 ? (
                            <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl border border-gray-700 shadow-xl p-8 text-center">
                                <h3 className="text-xl font-semibold text-white mb-2">Nenhuma sessão encontrada</h3>
                                <p className="text-gray-400 mb-6">Você ainda não possui sessões cadastradas.</p>
                            </div>
                        ) : (
                            sessions.map((session) => (
                                <div
                                    key={session.id}
                                    className="bg-gray-800/80 backdrop-blur-sm rounded-xl border border-gray-700 shadow-xl overflow-hidden"
                                >
                                    <div className="p-6 flex flex-col md:flex-row md:items-center md:justify-between">
                                        <div>
                                            <h3 className="text-xl font-semibold text-white">{session.nome}</h3>
                                            <p className="text-sm text-gray-400">Última atualização: {new Date(session.ultima_atualizacao).toLocaleString()}</p>
                                        </div>
                                        <div className="flex space-x-3 mt-4 md:mt-0">
                                            <button
                                                className="px-4 py-2 border border-indigo-500 text-indigo-400 rounded-lg hover:bg-gray-700 transition-colors"
                                                onClick={() => setExpandedSession(expandedSession === session.id ? null : session.id)}
                                            >
                                                {expandedSession === session.id ? "Fechar" : "Ver Detalhes"}
                                            </button>
                                            <Link href={`/User/Treinos/Executar?sessionId=${session.id}`}>
                                                <button
                                                    className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                                                >
                                                    Executar Treino
                                                </button>
                                            </Link>
                                            <button
                                                className="p-2 text-gray-400 hover:text-indigo-400 transition-colors"
                                                onClick={() => handleEditSession(session.id)}
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                </svg>
                                            </button>
                                            <button
                                                className="p-2 text-gray-400 hover:text-red-400 transition-colors"
                                                onClick={() => handleRemoveSession(session.id)}
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>

                                    {expandedSession === session.id && (
                                        <div className="border-t border-gray-700 bg-gray-800">
                                            <div className="p-6">
                                                <h4 className="text-lg font-medium text-white mb-4">Exercícios</h4>
                                                <div className="overflow-x-auto">
                                                    <table className="min-w-full divide-y divide-gray-700">
                                                        <thead>
                                                            <tr>
                                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Exercício</th>
                                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Séries</th>
                                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Repetições</th>
                                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Peso</th>
                                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Ações</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody className="divide-y divide-gray-700">
                                                            {session.exercicios.map((exercise) => (
                                                                <tr key={exercise.id} className="hover:bg-gray-750">
                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-200">{exercise.exercicio.nome}</td>
                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{exercise.series}</td>
                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{exercise.repeticoes}</td>
                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{exercise.peso} kg</td>
                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                                                                        <button
                                                                            className="text-indigo-400 hover:text-indigo-300 mr-2"
                                                                            onClick={() => openEditExerciseModal(session.id, exercise.id)}
                                                                        >
                                                                            Editar
                                                                        </button>
                                                                        <button
                                                                            className="text-red-400 hover:text-red-300"
                                                                            onClick={() => handleRemoveExercise(session.id, exercise.id)}
                                                                        >
                                                                            Remover
                                                                        </button>
                                                                    </td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <button
                                                    className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                                                    onClick={() => openAddExerciseModal(session.id)}
                                                >
                                                    Adicionar Exercício
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-96">
                        <h3 className="text-lg font-medium text-white mb-4">Adicionar Exercício</h3>
                        <div className="mb-4">
                            <label className="block text-gray-400 mb-2">Exercício</label>
                            <select
                                className="w-full bg-gray-700 text-gray-300 p-2 rounded"
                                value={selectedExerciseId || ''}
                                onChange={(e) => setSelectedExerciseId(parseInt(e.target.value, 10))}
                            >
                                <option value="" disabled>Selecione um exercício</option>
                                {availableExercises.map((exercise) => (
                                    <option key={exercise.id} value={exercise.id}>
                                        {exercise.nome}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-400 mb-2">Séries</label>
                            <input
                                type="number"
                                ref={seriesRef}
                                className="w-full bg-gray-700 text-gray-300 p-2 rounded"
                                placeholder="Número de séries"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-400 mb-2">Repetições</label>
                            <input
                                type="number"
                                ref={repeticoesRef}
                                className="w-full bg-gray-700 text-gray-300 p-2 rounded"
                                placeholder="Número de repetições"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-400 mb-2">Peso (kg)</label>
                            <input
                                type="number"
                                ref={pesoRef}
                                className="w-full bg-gray-700 text-gray-300 p-2 rounded"
                                placeholder="Peso em kg"
                            />
                        </div>
                        <div className="flex justify-end space-x-4">
                            <button
                                className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                                onClick={closeAddExerciseModal}
                            >
                                Cancelar
                            </button>
                            <button
                                className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                                onClick={confirmAddExercise}
                            >
                                Confirmar
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {isEditModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-96">
                        <h3 className="text-lg font-medium text-white mb-4">Editar Exercício</h3>
                        <div className="mb-4">
                            <label className="block text-gray-400 mb-2">Exercício</label>
                            <select
                                className="w-full bg-gray-700 text-gray-300 p-2 rounded"
                                value={selectedExerciseId || ''}
                                onChange={(e) => setSelectedExerciseId(parseInt(e.target.value, 10))}
                            >
                                <option value="" disabled>Selecione um exercício</option>
                                {availableExercises.map((exercise) => (
                                    <option key={exercise.id} value={exercise.id}>
                                        {exercise.nome}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-400 mb-2">Séries</label>
                            <input
                                type="number"
                                ref={seriesRef}
                                className="w-full bg-gray-700 text-gray-300 p-2 rounded"
                                placeholder="Número de séries"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-400 mb-2">Repetições</label>
                            <input
                                type="number"
                                ref={repeticoesRef}
                                className="w-full bg-gray-700 text-gray-300 p-2 rounded"
                                placeholder="Número de repetições"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-400 mb-2">Peso (kg)</label>
                            <input
                                type="number"
                                ref={pesoRef}
                                className="w-full bg-gray-700 text-gray-300 p-2 rounded"
                                placeholder="Peso em kg"
                            />
                        </div>
                        <div className="flex justify-end space-x-4">
                            <button
                                className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                                onClick={closeEditExerciseModal}
                            >
                                Cancelar
                            </button>
                            <button
                                className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                                onClick={confirmEditExercise}
                            >
                                Confirmar
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}