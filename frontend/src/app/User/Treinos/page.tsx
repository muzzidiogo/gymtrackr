"use client";

import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';

interface UserData {
    nome: string;
    email: string;
}

interface Workout {
    id: number;
    nome: string;
    categoria: string;
    ultimoTempo: string;
    exercicios: {
        nome: string;
        series: number;
        repeticoes: string;
        peso: string;
    }[];
}

// Dados de exemplo para treinos
const initialWorkouts = [
    {
        id: 1,
        nome: "Treino A - Superior",
        categoria: "Hipertrofia",
        ultimoTempo: "02h30",
        exercicios: [
            { nome: "Supino Reto", series: 4, repeticoes: "10-12", peso: "80kg" },
            { nome: "Puxada Frontal", series: 4, repeticoes: "10-12", peso: "70kg" },
            { nome: "Desenvolvimento", series: 3, repeticoes: "10-12", peso: "20kg" },
            { nome: "Rosca Direta", series: 3, repeticoes: "12-15", peso: "25kg" },
            { nome: "Tríceps Corda", series: 3, repeticoes: "12-15", peso: "30kg" }
        ]
    },
    {
        id: 2,
        nome: "Treino B - Inferior",
        categoria: "Hipertrofia",
        ultimoTempo: "00h20",
        exercicios: [
            { nome: "Agachamento", series: 4, repeticoes: "8-10", peso: "100kg" },
            { nome: "Leg Press", series: 4, repeticoes: "10-12", peso: "180kg" },
            { nome: "Cadeira Extensora", series: 3, repeticoes: "12-15", peso: "60kg" },
            { nome: "Cadeira Flexora", series: 3, repeticoes: "12-15", peso: "55kg" },
            { nome: "Panturrilha Sentado", series: 4, repeticoes: "15-20", peso: "90kg" }
        ]
    },
    {
        id: 3,
        nome: "Treino C - Fullbody",
        categoria: "Resistência",
        ultimoTempo: "01h00",
        exercicios: [
            { nome: "Agachamento", series: 3, repeticoes: "15", peso: "60kg" },
            { nome: "Remada Curvada", series: 3, repeticoes: "15", peso: "40kg" },
            { nome: "Flexão de Braço", series: 3, repeticoes: "Máximo", peso: "Peso Corporal" },
            { nome: "Elevação Lateral", series: 3, repeticoes: "15", peso: "10kg" },
            { nome: "Abdominal", series: 3, repeticoes: "20", peso: "Peso Corporal" }
        ]
    }
];


export default function Treinos() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [workouts, setWorkouts] = useState<Workout[]>(initialWorkouts);
    const [userData, setUserData] = useState<UserData | null>(null);
    const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
    const [workoutToDelete, setWorkoutToDelete] = useState<number | null>(null);
    const emptyWorkout = {
        id: 0,
        nome: "",
        categoria: "Hipertrofia",
        ultimoTempo: "00h00",
        exercicios: [{ nome: "", series: 3, repeticoes: "", peso: "" }]
    };
    const [editWorkout, setEditWorkout] = useState<Workout>(emptyWorkout);
    const [showAddWorkout, setShowAddWorkout] = useState(false);
    const [showEditWorkout, setShowEditWorkout] = useState(false);
    const [expandedWorkout, setExpandedWorkout] = useState<number | null>(null);
    const [newWorkout, setNewWorkout] = useState<Omit<Workout, 'id' | 'ultimoTempo'>>({
        nome: "",
        categoria: "Hipertrofia",
        exercicios: [{ nome: "", series: 3, repeticoes: "", peso: "" }]
    });
    const [currentWorkoutId, setCurrentWorkoutId] = useState<number | null>(null);

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
                    setUserData({
                        nome: data.nome,
                        email: data.email,
                    });
                }
            } catch (error) {
                console.error("Erro ao buscar dados do usuário:", error);
            }
        }

        fetchUserData();
    }, []);

    // Manipuladores para adicionar treino
    const handleAddWorkout = () => {
        if (newWorkout.nome.trim() === "") return;

        const workoutToAdd = {
            ...newWorkout,
            id: workouts.length > 0 ? Math.max(...workouts.map(w => w.id)) + 1 : 1,
            ultimoTempo: "00h00"
        };

        setWorkouts([...workouts, workoutToAdd]);
        setShowAddWorkout(false);
        setNewWorkout({
            nome: "",
            categoria: "Hipertrofia",
            exercicios: [{ nome: "", series: 3, repeticoes: "", peso: "" }]
        });
    };

    const handleAddExercise = () => {
        if (showEditWorkout) {
            editWorkout && setEditWorkout({
                ...editWorkout,
                exercicios: [...editWorkout.exercicios, { nome: "", series: 3, repeticoes: "", peso: "" }]
            });
        } else {
            setNewWorkout({
                ...newWorkout,
                exercicios: [...newWorkout.exercicios, { nome: "", series: 3, repeticoes: "", peso: "" }]
            });
        }
    };

    const handleRemoveExercise = (index: number) => {
        if (showEditWorkout) {
            const updatedExercises = [...editWorkout.exercicios];
            updatedExercises.splice(index, 1);
            setEditWorkout({
                ...editWorkout,
                exercicios: updatedExercises
            });
        } else {
            const updatedExercises = [...newWorkout.exercicios];
            updatedExercises.splice(index, 1);
            setNewWorkout({
                ...newWorkout,
                exercicios: updatedExercises
            });
        }
    };

    const handleExerciseChange = (index: number, field: string, value: any) => {
        if (showEditWorkout) {
            const updatedExercises = [...editWorkout.exercicios];
            updatedExercises[index] = { ...updatedExercises[index], [field]: value };
            setEditWorkout({
                ...editWorkout,
                exercicios: updatedExercises
            });
        } else {
            const updatedExercises = [...newWorkout.exercicios];
            updatedExercises[index] = { ...updatedExercises[index], [field]: value };
            setNewWorkout({
                ...newWorkout,
                exercicios: updatedExercises
            });
        }
    };

    const handleRemoveWorkout = (id: number) => {
        setWorkoutToDelete(id);
        setShowDeleteConfirmation(true);
    };

    // Manipuladores para editar treino existente
    const handleStartEditWorkout = (workout: Workout) => {
        setEditWorkout({ ...workout });
        setCurrentWorkoutId(workout.id);
        setShowEditWorkout(true);
    };

    const handleSaveEditWorkout = () => {
        if (editWorkout.nome.trim() === "") return;

        const updatedWorkouts = workouts.map(workout =>
            workout.id === currentWorkoutId ? { ...editWorkout, id: currentWorkoutId } : workout
        );

        setWorkouts(updatedWorkouts);
        setShowEditWorkout(false);
        setEditWorkout(emptyWorkout);
        setCurrentWorkoutId(null);
    };

    const confirmDeleteWorkout = () => {
        if (workoutToDelete !== null) {
            setWorkouts(workouts.filter(workout => workout.id !== workoutToDelete));
            if (expandedWorkout === workoutToDelete) {
                setExpandedWorkout(null);
            }
            setShowDeleteConfirmation(false);
            setWorkoutToDelete(null);
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
                                            {userData?.nome.charAt(0) || "?"}
                                        </div>
                                        <span className="text-gray-300">{userData?.nome || "Usuário"}</span>
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
                        <span className="text-indigo-400">Treinos</span>
                    </div>

                    {/* Page Header with Add Button */}
                    <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between">
                        <div>
                            <h1 className="text-3xl font-bold text-white mb-2">Meus Treinos</h1>
                            <p className="text-gray-400">Gerencie e execute seus treinos personalizados</p>
                        </div>
                        <button
                            onClick={() => setShowAddWorkout(true)}
                            className="mt-4 md:mt-0 px-5 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-medium hover:opacity-90 transition-all shadow-lg shadow-indigo-500/20 flex items-center"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                            Adicionar Treino
                        </button>
                    </div>

                    {/* Treinos */}
                    <div className="space-y-6">
                        {workouts.length === 0 ? (
                            <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl border border-gray-700 shadow-xl p-8 text-center">
                                <div className="w-20 h-20 bg-indigo-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-2">Nenhum treino encontrado</h3>
                                <p className="text-gray-400 mb-6">Você ainda não possui treinos cadastrados. Comece adicionando seu primeiro treino agora!</p>
                                <button
                                    onClick={() => setShowAddWorkout(true)}
                                    className="px-5 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-medium hover:opacity-90 transition-all shadow-lg shadow-indigo-500/20"
                                >
                                    Adicionar Meu Primeiro Treino
                                </button>
                            </div>
                        ) : (
                            workouts.map((workout) => (
                                <div
                                    key={workout.id}
                                    className="bg-gray-800/80 backdrop-blur-sm rounded-xl border border-gray-700 shadow-xl overflow-hidden"
                                >
                                    <div className="p-6 flex flex-col md:flex-row md:items-center md:justify-between">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0 w-12 h-12 bg-indigo-500/20 rounded-full flex items-center justify-center mr-4">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-semibold text-white">{workout.nome}</h3>
                                                <div className="flex items-center text-sm text-gray-400 mt-1">
                                                    <span className="px-2 py-1 bg-gray-700 rounded-md text-indigo-300 text-xs mr-3">{workout.categoria}</span>
                                                    <span>Último Tempo: {workout.ultimoTempo}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex space-x-3 mt-4 md:mt-0">
                                            <button
                                                className="px-4 py-2 border border-indigo-500 text-indigo-400 rounded-lg hover:bg-gray-700 transition-colors"
                                                onClick={() => setExpandedWorkout(expandedWorkout === workout.id ? null : workout.id)}
                                            >
                                                {expandedWorkout === workout.id ? "Fechar" : "Ver Detalhes"}
                                            </button>
                                            <Link href={`/User/Treinos/Executar/`}>
                                                <button
                                                    className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                                                >
                                                    Executar Treino
                                                </button>
                                            </Link>
                                            {/* Botão para editar treino */}
                                            <button
                                                className="p-2 text-gray-400 hover:text-indigo-400 transition-colors"
                                                onClick={() => handleStartEditWorkout(workout)}
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                </svg>
                                            </button>
                                            {/* Botão para remover treino */}
                                            <button
                                                className="p-2 text-gray-400 hover:text-red-400 transition-colors"
                                                onClick={() => handleRemoveWorkout(workout.id)}
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>

                                    {/* Detalhes do treino expandido */}
                                    {expandedWorkout === workout.id && (
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
                                                            </tr>
                                                        </thead>
                                                        <tbody className="divide-y divide-gray-700">
                                                            {workout.exercicios.map((exercicio, index) => (
                                                                <tr key={index} className="hover:bg-gray-750">
                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-200">{exercicio.nome}</td>
                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{exercicio.series}</td>
                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{exercicio.repeticoes}</td>
                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{exercicio.peso}</td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))
                        )}
                    </div>

                    {/* Modal para adicionar treino */}
                    {showAddWorkout && (
                        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                            <div className="bg-gray-800 rounded-xl border border-gray-700 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                                <div className="p-6 border-b border-gray-700">
                                    <div className="flex justify-between items-center">
                                        <h3 className="text-xl font-bold text-white">Adicionar Novo Treino</h3>
                                        <button
                                            onClick={() => setShowAddWorkout(false)}
                                            className="text-gray-400 hover:text-white"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="space-y-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-300 mb-1">Nome do Treino</label>
                                            <input
                                                type="text"
                                                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                                placeholder="Ex: Treino A - Peito e Costas"
                                                value={newWorkout.nome}
                                                onChange={(e) => setNewWorkout({ ...newWorkout, nome: e.target.value })}
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-300 mb-1">Categoria</label>
                                            <select
                                                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                                value={newWorkout.categoria}
                                                onChange={(e) => setNewWorkout({ ...newWorkout, categoria: e.target.value })}
                                            >
                                                <option value="Hipertrofia">Hipertrofia</option>
                                                <option value="Força">Força</option>
                                                <option value="Resistência">Resistência</option>
                                                <option value="Definição">Definição</option>
                                                <option value="Funcional">Funcional</option>
                                            </select>
                                        </div>

                                        <div>
                                            <div className="flex justify-between items-center mb-2">
                                                <label className="block text-sm font-medium text-gray-300">Exercícios</label>
                                                <button
                                                    type="button"
                                                    onClick={handleAddExercise}
                                                    className="text-xs bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1 rounded-md flex items-center"
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                                    </svg>
                                                    Adicionar Exercício
                                                </button>
                                            </div>
                                            <div className="space-y-4">
                                                {newWorkout.exercicios.map((exercicio: { nome: string; series: number; repeticoes: string; peso: string }, index: number) => (
                                                    <div key={index} className="bg-gray-750 p-4 rounded-lg border border-gray-700">
                                                        <div className="flex justify-between items-center mb-3">
                                                            <span className="font-medium text-white">Exercício {index + 1}</span>
                                                            {newWorkout.exercicios.length > 1 && (
                                                                <button
                                                                    onClick={() => handleRemoveExercise(index)}
                                                                    className="text-red-400 hover:text-red-300"
                                                                >
                                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                                    </svg></button>
                                                            )}
                                                        </div>
                                                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                                                            <div>
                                                                <label className="block text-xs text-gray-400 mb-1">Nome</label>
                                                                <input
                                                                    type="text"
                                                                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500"
                                                                    placeholder="Ex: Supino Reto"
                                                                    value={exercicio.nome}
                                                                    onChange={(e) => handleExerciseChange(index, 'nome', e.target.value)}
                                                                />
                                                            </div>
                                                            <div>
                                                                <label className="block text-xs text-gray-400 mb-1">Séries</label>
                                                                <input
                                                                    type="number"
                                                                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500"
                                                                    placeholder="Ex: 4"
                                                                    value={exercicio.series}
                                                                    onChange={(e) => handleExerciseChange(index, 'series', parseInt(e.target.value) || 0)}
                                                                />
                                                            </div>
                                                            <div>
                                                                <label className="block text-xs text-gray-400 mb-1">Repetições</label>
                                                                <input
                                                                    type="text"
                                                                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500"
                                                                    placeholder="Ex: 10-12"
                                                                    value={exercicio.repeticoes}
                                                                    onChange={(e) => handleExerciseChange(index, 'repeticoes', e.target.value)}
                                                                />
                                                            </div>
                                                            <div>
                                                                <label className="block text-xs text-gray-400 mb-1">Peso</label>
                                                                <input
                                                                    type="text"
                                                                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500"
                                                                    placeholder="Ex: 60kg"
                                                                    value={exercicio.peso}
                                                                    onChange={(e) => handleExerciseChange(index, 'peso', e.target.value)}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6 border-t border-gray-700 flex justify-end space-x-3">
                                    <button
                                        className="px-4 py-2 bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600 transition-colors"
                                        onClick={() => setShowAddWorkout(false)}
                                    >
                                        Cancelar
                                    </button>
                                    <button
                                        className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                                        onClick={handleAddWorkout}
                                    >
                                        Salvar Treino
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Modal para editar treino */}
                    {showEditWorkout && editWorkout && (
                        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                            <div className="bg-gray-800 rounded-xl border border-gray-700 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                                <div className="p-6 border-b border-gray-700">
                                    <div className="flex justify-between items-center">
                                        <h3 className="text-xl font-bold text-white">Editar Treino</h3>
                                        <button
                                            onClick={() => setShowEditWorkout(false)}
                                            className="text-gray-400 hover:text-white"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="space-y-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-300 mb-1">Nome do Treino</label>
                                            <input
                                                type="text"
                                                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                                placeholder="Ex: Treino A - Peito e Costas"
                                                value={editWorkout.nome}
                                                onChange={(e) => editWorkout && setEditWorkout({ ...editWorkout, nome: e.target.value })}
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-300 mb-1">Categoria</label>
                                            <select
                                                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                                value={editWorkout.categoria}
                                                onChange={(e) => setEditWorkout({ ...editWorkout, categoria: e.target.value })}
                                            >
                                                <option value="Hipertrofia">Hipertrofia</option>
                                                <option value="Força">Força</option>
                                                <option value="Resistência">Resistência</option>
                                                <option value="Definição">Definição</option>
                                                <option value="Funcional">Funcional</option>
                                            </select>
                                        </div>

                                        <div>
                                            <div className="flex justify-between items-center mb-2">
                                                <label className="block text-sm font-medium text-gray-300">Exercícios</label>
                                                <button
                                                    type="button"
                                                    onClick={handleAddExercise}
                                                    className="text-xs bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1 rounded-md flex items-center"
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                                    </svg>
                                                    Adicionar Exercício
                                                </button>
                                            </div>
                                            <div className="space-y-4">
                                                {editWorkout.exercicios.map((exercicio, index) => (
                                                    <div key={index} className="bg-gray-750 p-4 rounded-lg border border-gray-700">
                                                        <div className="flex justify-between items-center mb-3">
                                                            <span className="font-medium text-white">Exercício {index + 1}</span>
                                                            {editWorkout.exercicios.length > 1 && (
                                                                <button
                                                                    onClick={() => handleRemoveExercise(index)}
                                                                    className="text-red-400 hover:text-red-300"
                                                                >
                                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                                    </svg>
                                                                </button>
                                                            )}
                                                        </div>
                                                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                                                            <div>
                                                                <label className="block text-xs text-gray-400 mb-1">Nome</label>
                                                                <input
                                                                    type="text"
                                                                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500"
                                                                    placeholder="Ex: Supino Reto"
                                                                    value={exercicio.nome}
                                                                    onChange={(e) => handleExerciseChange(index, 'nome', e.target.value)}
                                                                />
                                                            </div>
                                                            <div>
                                                                <label className="block text-xs text-gray-400 mb-1">Séries</label>
                                                                <input
                                                                    type="number"
                                                                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500"
                                                                    placeholder="Ex: 4"
                                                                    value={exercicio.series}
                                                                    onChange={(e) => handleExerciseChange(index, 'series', parseInt(e.target.value) || 0)}
                                                                />
                                                            </div>
                                                            <div>
                                                                <label className="block text-xs text-gray-400 mb-1">Repetições</label>
                                                                <input
                                                                    type="text"
                                                                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500"
                                                                    placeholder="Ex: 10-12"
                                                                    value={exercicio.repeticoes}
                                                                    onChange={(e) => handleExerciseChange(index, 'repeticoes', e.target.value)}
                                                                />
                                                            </div>
                                                            <div>
                                                                <label className="block text-xs text-gray-400 mb-1">Peso</label>
                                                                <input
                                                                    type="text"
                                                                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500"
                                                                    placeholder="Ex: 60kg"
                                                                    value={exercicio.peso}
                                                                    onChange={(e) => handleExerciseChange(index, 'peso', e.target.value)}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6 border-t border-gray-700 flex justify-end space-x-3">
                                    <button
                                        className="px-4 py-2 bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600 transition-colors"
                                        onClick={() => setShowEditWorkout(false)}
                                    >
                                        Cancelar
                                    </button>
                                    <button
                                        className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                                        onClick={handleSaveEditWorkout}
                                    >
                                        Salvar Alterações
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                    {/* Modal de confirmação para excluir treino */}
                    {showDeleteConfirmation && (
                        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                            <div className="bg-gray-800 rounded-xl border border-gray-700 max-w-md w-full">
                                <div className="p-6 border-b border-gray-700">
                                    <h3 className="text-xl font-bold text-white">Confirmar Exclusão</h3>
                                </div>
                                <div className="p-6">
                                    <p className="text-gray-300">Tem certeza que deseja excluir este treino? Esta ação não pode ser desfeita.</p>
                                </div>
                                <div className="p-6 border-t border-gray-700 flex justify-end space-x-3">
                                    <button
                                        className="px-4 py-2 bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600 transition-colors"
                                        onClick={() => setShowDeleteConfirmation(false)}
                                    >
                                        Cancelar
                                    </button>
                                    <button
                                        className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                                        onClick={confirmDeleteWorkout}
                                    >
                                        Excluir
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
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