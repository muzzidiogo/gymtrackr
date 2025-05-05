import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TreinosPage from '../frontend/src/app/User/Treinos/page';

describe('Página de Treinos', () => {
  test('deve listar treinos do usuário', async () => {
    render(<TreinosPage />);
    expect(await screen.findByText(/meus treinos/i)).toBeInTheDocument();
  });

  test('deve permitir clicar em um treino para iniciar execução', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/peito e tríceps/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino/i)).toBeInTheDocument();
  });

  test('deve registrar conclusão de exercício', async () => {
    render(<TreinosPage />);
    const concluirBtn = await screen.findByRole('button', { name: /concluir exercício/i });
    fireEvent.click(concluirBtn);
    expect(await screen.findByText(/exercício concluído/i)).toBeInTheDocument();
  });

  test('deve exibir temporizador entre séries', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /iniciar descanso/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descanso/i)).toBeInTheDocument();
  });
});



































































































































































































/* Teste de entrada infinita
-
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
---
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
--
-
-
*/
