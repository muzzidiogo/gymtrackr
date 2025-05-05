import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TreinosPage from '../frontend/src/app/User/Treinos/page';

describe('Testes extensivos da página de Treinos', () => {

  test('Cenário #1: renderizar e interagir com botão iniciar treino #1', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 1/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 1/i)).toBeInTheDocument();
  });

  test('Cenário #1: verificar botão de descanso do treino #1', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 1/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 1/i)).toBeInTheDocument();
  });

  test('Cenário #2: renderizar e interagir com botão iniciar treino #2', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 2/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 2/i)).toBeInTheDocument();
  });

  test('Cenário #2: verificar botão de descanso do treino #2', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 2/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 2/i)).toBeInTheDocument();
  });

  test('Cenário #3: renderizar e interagir com botão iniciar treino #3', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 3/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 3/i)).toBeInTheDocument();
  });

  test('Cenário #3: verificar botão de descanso do treino #3', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 3/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 3/i)).toBeInTheDocument();
  });

  test('Cenário #4: renderizar e interagir com botão iniciar treino #4', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 4/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 4/i)).toBeInTheDocument();
  });

  test('Cenário #4: verificar botão de descanso do treino #4', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 4/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 4/i)).toBeInTheDocument();
  });

  test('Cenário #5: renderizar e interagir com botão iniciar treino #5', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 5/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 5/i)).toBeInTheDocument();
  });

  test('Cenário #5: verificar botão de descanso do treino #5', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 5/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 5/i)).toBeInTheDocument();
  });

  test('Cenário #6: renderizar e interagir com botão iniciar treino #6', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 6/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 6/i)).toBeInTheDocument();
  });

  test('Cenário #6: verificar botão de descanso do treino #6', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 6/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 6/i)).toBeInTheDocument();
  });

  test('Cenário #7: renderizar e interagir com botão iniciar treino #7', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 7/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 7/i)).toBeInTheDocument();
  });

  test('Cenário #7: verificar botão de descanso do treino #7', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 7/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 7/i)).toBeInTheDocument();
  });

  test('Cenário #8: renderizar e interagir com botão iniciar treino #8', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 8/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 8/i)).toBeInTheDocument();
  });

  test('Cenário #8: verificar botão de descanso do treino #8', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 8/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 8/i)).toBeInTheDocument();
  });

  test('Cenário #9: renderizar e interagir com botão iniciar treino #9', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 9/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 9/i)).toBeInTheDocument();
  });

  test('Cenário #9: verificar botão de descanso do treino #9', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 9/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 9/i)).toBeInTheDocument();
  });

  test('Cenário #10: renderizar e interagir com botão iniciar treino #10', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 10/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 10/i)).toBeInTheDocument();
  });

  test('Cenário #10: verificar botão de descanso do treino #10', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 10/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 10/i)).toBeInTheDocument();
  });

  test('Cenário #11: renderizar e interagir com botão iniciar treino #11', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 11/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 11/i)).toBeInTheDocument();
  });

  test('Cenário #11: verificar botão de descanso do treino #11', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 11/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 11/i)).toBeInTheDocument();
  });

  test('Cenário #12: renderizar e interagir com botão iniciar treino #12', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 12/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 12/i)).toBeInTheDocument();
  });

  test('Cenário #12: verificar botão de descanso do treino #12', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 12/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 12/i)).toBeInTheDocument();
  });

  test('Cenário #13: renderizar e interagir com botão iniciar treino #13', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 13/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 13/i)).toBeInTheDocument();
  });

  test('Cenário #13: verificar botão de descanso do treino #13', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 13/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 13/i)).toBeInTheDocument();
  });

  test('Cenário #14: renderizar e interagir com botão iniciar treino #14', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 14/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 14/i)).toBeInTheDocument();
  });

  test('Cenário #14: verificar botão de descanso do treino #14', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 14/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 14/i)).toBeInTheDocument();
  });

  test('Cenário #15: renderizar e interagir com botão iniciar treino #15', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 15/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 15/i)).toBeInTheDocument();
  });

  test('Cenário #15: verificar botão de descanso do treino #15', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 15/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 15/i)).toBeInTheDocument();
  });

  test('Cenário #16: renderizar e interagir com botão iniciar treino #16', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 16/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 16/i)).toBeInTheDocument();
  });

  test('Cenário #16: verificar botão de descanso do treino #16', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 16/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 16/i)).toBeInTheDocument();
  });

  test('Cenário #17: renderizar e interagir com botão iniciar treino #17', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 17/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 17/i)).toBeInTheDocument();
  });

  test('Cenário #17: verificar botão de descanso do treino #17', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 17/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 17/i)).toBeInTheDocument();
  });

  test('Cenário #18: renderizar e interagir com botão iniciar treino #18', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 18/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 18/i)).toBeInTheDocument();
  });

  test('Cenário #18: verificar botão de descanso do treino #18', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 18/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 18/i)).toBeInTheDocument();
  });

  test('Cenário #19: renderizar e interagir com botão iniciar treino #19', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 19/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 19/i)).toBeInTheDocument();
  });

  test('Cenário #19: verificar botão de descanso do treino #19', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 19/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 19/i)).toBeInTheDocument();
  });

  test('Cenário #20: renderizar e interagir com botão iniciar treino #20', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 20/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 20/i)).toBeInTheDocument();
  });

  test('Cenário #20: verificar botão de descanso do treino #20', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 20/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 20/i)).toBeInTheDocument();
  });

  test('Cenário #21: renderizar e interagir com botão iniciar treino #21', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 21/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 21/i)).toBeInTheDocument();
  });

  test('Cenário #21: verificar botão de descanso do treino #21', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 21/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 21/i)).toBeInTheDocument();
  });

  test('Cenário #22: renderizar e interagir com botão iniciar treino #22', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 22/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 22/i)).toBeInTheDocument();
  });

  test('Cenário #22: verificar botão de descanso do treino #22', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 22/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 22/i)).toBeInTheDocument();
  });

  test('Cenário #23: renderizar e interagir com botão iniciar treino #23', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 23/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 23/i)).toBeInTheDocument();
  });

  test('Cenário #23: verificar botão de descanso do treino #23', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 23/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 23/i)).toBeInTheDocument();
  });

  test('Cenário #24: renderizar e interagir com botão iniciar treino #24', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 24/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 24/i)).toBeInTheDocument();
  });

  test('Cenário #24: verificar botão de descanso do treino #24', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 24/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 24/i)).toBeInTheDocument();
  });

  test('Cenário #25: renderizar e interagir com botão iniciar treino #25', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 25/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 25/i)).toBeInTheDocument();
  });

  test('Cenário #25: verificar botão de descanso do treino #25', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 25/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 25/i)).toBeInTheDocument();
  });

  test('Cenário #26: renderizar e interagir com botão iniciar treino #26', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 26/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 26/i)).toBeInTheDocument();
  });

  test('Cenário #26: verificar botão de descanso do treino #26', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 26/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 26/i)).toBeInTheDocument();
  });

  test('Cenário #27: renderizar e interagir com botão iniciar treino #27', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 27/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 27/i)).toBeInTheDocument();
  });

  test('Cenário #27: verificar botão de descanso do treino #27', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 27/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 27/i)).toBeInTheDocument();
  });

  test('Cenário #28: renderizar e interagir com botão iniciar treino #28', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 28/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 28/i)).toBeInTheDocument();
  });

  test('Cenário #28: verificar botão de descanso do treino #28', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 28/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 28/i)).toBeInTheDocument();
  });

  test('Cenário #29: renderizar e interagir com botão iniciar treino #29', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 29/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 29/i)).toBeInTheDocument();
  });

  test('Cenário #29: verificar botão de descanso do treino #29', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 29/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 29/i)).toBeInTheDocument();
  });

  test('Cenário #30: renderizar e interagir com botão iniciar treino #30', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 30/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 30/i)).toBeInTheDocument();
  });

  test('Cenário #30: verificar botão de descanso do treino #30', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 30/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 30/i)).toBeInTheDocument();
  });

  test('Cenário #31: renderizar e interagir com botão iniciar treino #31', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 31/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 31/i)).toBeInTheDocument();
  });

  test('Cenário #31: verificar botão de descanso do treino #31', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 31/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 31/i)).toBeInTheDocument();
  });

  test('Cenário #32: renderizar e interagir com botão iniciar treino #32', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 32/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 32/i)).toBeInTheDocument();
  });

  test('Cenário #32: verificar botão de descanso do treino #32', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 32/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 32/i)).toBeInTheDocument();
  });

  test('Cenário #33: renderizar e interagir com botão iniciar treino #33', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 33/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 33/i)).toBeInTheDocument();
  });

  test('Cenário #33: verificar botão de descanso do treino #33', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 33/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 33/i)).toBeInTheDocument();
  });

  test('Cenário #34: renderizar e interagir com botão iniciar treino #34', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 34/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 34/i)).toBeInTheDocument();
  });

  test('Cenário #34: verificar botão de descanso do treino #34', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 34/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 34/i)).toBeInTheDocument();
  });

  test('Cenário #35: renderizar e interagir com botão iniciar treino #35', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 35/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 35/i)).toBeInTheDocument();
  });

  test('Cenário #35: verificar botão de descanso do treino #35', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 35/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 35/i)).toBeInTheDocument();
  });

  test('Cenário #36: renderizar e interagir com botão iniciar treino #36', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 36/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 36/i)).toBeInTheDocument();
  });

  test('Cenário #36: verificar botão de descanso do treino #36', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 36/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 36/i)).toBeInTheDocument();
  });

  test('Cenário #37: renderizar e interagir com botão iniciar treino #37', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 37/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 37/i)).toBeInTheDocument();
  });

  test('Cenário #37: verificar botão de descanso do treino #37', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 37/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 37/i)).toBeInTheDocument();
  });

  test('Cenário #38: renderizar e interagir com botão iniciar treino #38', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 38/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 38/i)).toBeInTheDocument();
  });

  test('Cenário #38: verificar botão de descanso do treino #38', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 38/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 38/i)).toBeInTheDocument();
  });

  test('Cenário #39: renderizar e interagir com botão iniciar treino #39', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 39/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 39/i)).toBeInTheDocument();
  });

  test('Cenário #39: verificar botão de descanso do treino #39', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 39/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 39/i)).toBeInTheDocument();
  });

  test('Cenário #40: renderizar e interagir com botão iniciar treino #40', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 40/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 40/i)).toBeInTheDocument();
  });

  test('Cenário #40: verificar botão de descanso do treino #40', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 40/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 40/i)).toBeInTheDocument();
  });

  test('Cenário #41: renderizar e interagir com botão iniciar treino #41', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 41/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 41/i)).toBeInTheDocument();
  });

  test('Cenário #41: verificar botão de descanso do treino #41', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 41/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 41/i)).toBeInTheDocument();
  });

  test('Cenário #42: renderizar e interagir com botão iniciar treino #42', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 42/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 42/i)).toBeInTheDocument();
  });

  test('Cenário #42: verificar botão de descanso do treino #42', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 42/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 42/i)).toBeInTheDocument();
  });

  test('Cenário #43: renderizar e interagir com botão iniciar treino #43', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 43/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 43/i)).toBeInTheDocument();
  });

  test('Cenário #43: verificar botão de descanso do treino #43', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 43/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 43/i)).toBeInTheDocument();
  });

  test('Cenário #44: renderizar e interagir com botão iniciar treino #44', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 44/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 44/i)).toBeInTheDocument();
  });

  test('Cenário #44: verificar botão de descanso do treino #44', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 44/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 44/i)).toBeInTheDocument();
  });

  test('Cenário #45: renderizar e interagir com botão iniciar treino #45', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 45/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 45/i)).toBeInTheDocument();
  });

  test('Cenário #45: verificar botão de descanso do treino #45', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 45/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 45/i)).toBeInTheDocument();
  });

  test('Cenário #46: renderizar e interagir com botão iniciar treino #46', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 46/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 46/i)).toBeInTheDocument();
  });

  test('Cenário #46: verificar botão de descanso do treino #46', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 46/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 46/i)).toBeInTheDocument();
  });

  test('Cenário #47: renderizar e interagir com botão iniciar treino #47', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 47/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 47/i)).toBeInTheDocument();
  });

  test('Cenário #47: verificar botão de descanso do treino #47', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 47/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 47/i)).toBeInTheDocument();
  });

  test('Cenário #48: renderizar e interagir com botão iniciar treino #48', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 48/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 48/i)).toBeInTheDocument();
  });

  test('Cenário #48: verificar botão de descanso do treino #48', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 48/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 48/i)).toBeInTheDocument();
  });

  test('Cenário #49: renderizar e interagir com botão iniciar treino #49', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 49/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 49/i)).toBeInTheDocument();
  });

  test('Cenário #49: verificar botão de descanso do treino #49', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 49/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 49/i)).toBeInTheDocument();
  });

  test('Cenário #50: renderizar e interagir com botão iniciar treino #50', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 50/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 50/i)).toBeInTheDocument();
  });

  test('Cenário #50: verificar botão de descanso do treino #50', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 50/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 50/i)).toBeInTheDocument();
  });

  test('Cenário #51: renderizar e interagir com botão iniciar treino #51', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 51/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 51/i)).toBeInTheDocument();
  });

  test('Cenário #51: verificar botão de descanso do treino #51', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 51/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 51/i)).toBeInTheDocument();
  });

  test('Cenário #52: renderizar e interagir com botão iniciar treino #52', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 52/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 52/i)).toBeInTheDocument();
  });

  test('Cenário #52: verificar botão de descanso do treino #52', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 52/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 52/i)).toBeInTheDocument();
  });

  test('Cenário #53: renderizar e interagir com botão iniciar treino #53', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 53/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 53/i)).toBeInTheDocument();
  });

  test('Cenário #53: verificar botão de descanso do treino #53', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 53/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 53/i)).toBeInTheDocument();
  });

  test('Cenário #54: renderizar e interagir com botão iniciar treino #54', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 54/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 54/i)).toBeInTheDocument();
  });

  test('Cenário #54: verificar botão de descanso do treino #54', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 54/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 54/i)).toBeInTheDocument();
  });

  test('Cenário #55: renderizar e interagir com botão iniciar treino #55', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 55/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 55/i)).toBeInTheDocument();
  });

  test('Cenário #55: verificar botão de descanso do treino #55', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 55/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 55/i)).toBeInTheDocument();
  });

  test('Cenário #56: renderizar e interagir com botão iniciar treino #56', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 56/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 56/i)).toBeInTheDocument();
  });

  test('Cenário #56: verificar botão de descanso do treino #56', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 56/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 56/i)).toBeInTheDocument();
  });

  test('Cenário #57: renderizar e interagir com botão iniciar treino #57', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 57/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 57/i)).toBeInTheDocument();
  });

  test('Cenário #57: verificar botão de descanso do treino #57', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 57/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 57/i)).toBeInTheDocument();
  });

  test('Cenário #58: renderizar e interagir com botão iniciar treino #58', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 58/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 58/i)).toBeInTheDocument();
  });

  test('Cenário #58: verificar botão de descanso do treino #58', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 58/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 58/i)).toBeInTheDocument();
  });

  test('Cenário #59: renderizar e interagir com botão iniciar treino #59', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 59/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 59/i)).toBeInTheDocument();
  });

  test('Cenário #59: verificar botão de descanso do treino #59', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 59/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 59/i)).toBeInTheDocument();
  });

  test('Cenário #60: renderizar e interagir com botão iniciar treino #60', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 60/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 60/i)).toBeInTheDocument();
  });

  test('Cenário #60: verificar botão de descanso do treino #60', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 60/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 60/i)).toBeInTheDocument();
  });

  test('Cenário #61: renderizar e interagir com botão iniciar treino #61', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 61/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 61/i)).toBeInTheDocument();
  });

  test('Cenário #61: verificar botão de descanso do treino #61', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 61/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 61/i)).toBeInTheDocument();
  });

  test('Cenário #62: renderizar e interagir com botão iniciar treino #62', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 62/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 62/i)).toBeInTheDocument();
  });

  test('Cenário #62: verificar botão de descanso do treino #62', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 62/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 62/i)).toBeInTheDocument();
  });

  test('Cenário #63: renderizar e interagir com botão iniciar treino #63', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 63/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 63/i)).toBeInTheDocument();
  });

  test('Cenário #63: verificar botão de descanso do treino #63', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 63/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 63/i)).toBeInTheDocument();
  });

  test('Cenário #64: renderizar e interagir com botão iniciar treino #64', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 64/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 64/i)).toBeInTheDocument();
  });

  test('Cenário #64: verificar botão de descanso do treino #64', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 64/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 64/i)).toBeInTheDocument();
  });

  test('Cenário #65: renderizar e interagir com botão iniciar treino #65', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 65/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 65/i)).toBeInTheDocument();
  });

  test('Cenário #65: verificar botão de descanso do treino #65', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 65/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 65/i)).toBeInTheDocument();
  });

  test('Cenário #66: renderizar e interagir com botão iniciar treino #66', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 66/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 66/i)).toBeInTheDocument();
  });

  test('Cenário #66: verificar botão de descanso do treino #66', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 66/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 66/i)).toBeInTheDocument();
  });

  test('Cenário #67: renderizar e interagir com botão iniciar treino #67', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 67/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 67/i)).toBeInTheDocument();
  });

  test('Cenário #67: verificar botão de descanso do treino #67', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 67/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 67/i)).toBeInTheDocument();
  });

  test('Cenário #68: renderizar e interagir com botão iniciar treino #68', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 68/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 68/i)).toBeInTheDocument();
  });

  test('Cenário #68: verificar botão de descanso do treino #68', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 68/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 68/i)).toBeInTheDocument();
  });

  test('Cenário #69: renderizar e interagir com botão iniciar treino #69', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 69/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 69/i)).toBeInTheDocument();
  });

  test('Cenário #69: verificar botão de descanso do treino #69', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 69/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 69/i)).toBeInTheDocument();
  });

  test('Cenário #70: renderizar e interagir com botão iniciar treino #70', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 70/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 70/i)).toBeInTheDocument();
  });

  test('Cenário #70: verificar botão de descanso do treino #70', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 70/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 70/i)).toBeInTheDocument();
  });

  test('Cenário #71: renderizar e interagir com botão iniciar treino #71', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 71/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 71/i)).toBeInTheDocument();
  });

  test('Cenário #71: verificar botão de descanso do treino #71', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 71/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 71/i)).toBeInTheDocument();
  });

  test('Cenário #72: renderizar e interagir com botão iniciar treino #72', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 72/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 72/i)).toBeInTheDocument();
  });

  test('Cenário #72: verificar botão de descanso do treino #72', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 72/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 72/i)).toBeInTheDocument();
  });

  test('Cenário #73: renderizar e interagir com botão iniciar treino #73', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 73/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 73/i)).toBeInTheDocument();
  });

  test('Cenário #73: verificar botão de descanso do treino #73', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 73/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 73/i)).toBeInTheDocument();
  });

  test('Cenário #74: renderizar e interagir com botão iniciar treino #74', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 74/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 74/i)).toBeInTheDocument();
  });

  test('Cenário #74: verificar botão de descanso do treino #74', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 74/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 74/i)).toBeInTheDocument();
  });

  test('Cenário #75: renderizar e interagir com botão iniciar treino #75', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 75/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 75/i)).toBeInTheDocument();
  });

  test('Cenário #75: verificar botão de descanso do treino #75', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 75/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 75/i)).toBeInTheDocument();
  });

  test('Cenário #76: renderizar e interagir com botão iniciar treino #76', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 76/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 76/i)).toBeInTheDocument();
  });

  test('Cenário #76: verificar botão de descanso do treino #76', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 76/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 76/i)).toBeInTheDocument();
  });

  test('Cenário #77: renderizar e interagir com botão iniciar treino #77', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 77/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 77/i)).toBeInTheDocument();
  });

  test('Cenário #77: verificar botão de descanso do treino #77', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 77/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 77/i)).toBeInTheDocument();
  });

  test('Cenário #78: renderizar e interagir com botão iniciar treino #78', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 78/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 78/i)).toBeInTheDocument();
  });

  test('Cenário #78: verificar botão de descanso do treino #78', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 78/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 78/i)).toBeInTheDocument();
  });

  test('Cenário #79: renderizar e interagir com botão iniciar treino #79', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 79/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 79/i)).toBeInTheDocument();
  });

  test('Cenário #79: verificar botão de descanso do treino #79', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 79/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 79/i)).toBeInTheDocument();
  });

  test('Cenário #80: renderizar e interagir com botão iniciar treino #80', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 80/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 80/i)).toBeInTheDocument();
  });

  test('Cenário #80: verificar botão de descanso do treino #80', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 80/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 80/i)).toBeInTheDocument();
  });

  test('Cenário #81: renderizar e interagir com botão iniciar treino #81', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 81/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 81/i)).toBeInTheDocument();
  });

  test('Cenário #81: verificar botão de descanso do treino #81', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 81/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 81/i)).toBeInTheDocument();
  });

  test('Cenário #82: renderizar e interagir com botão iniciar treino #82', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 82/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 82/i)).toBeInTheDocument();
  });

  test('Cenário #82: verificar botão de descanso do treino #82', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 82/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 82/i)).toBeInTheDocument();
  });

  test('Cenário #83: renderizar e interagir com botão iniciar treino #83', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 83/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 83/i)).toBeInTheDocument();
  });

  test('Cenário #83: verificar botão de descanso do treino #83', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 83/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 83/i)).toBeInTheDocument();
  });

  test('Cenário #84: renderizar e interagir com botão iniciar treino #84', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 84/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 84/i)).toBeInTheDocument();
  });

  test('Cenário #84: verificar botão de descanso do treino #84', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 84/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 84/i)).toBeInTheDocument();
  });

  test('Cenário #85: renderizar e interagir com botão iniciar treino #85', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 85/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 85/i)).toBeInTheDocument();
  });

  test('Cenário #85: verificar botão de descanso do treino #85', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 85/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 85/i)).toBeInTheDocument();
  });

  test('Cenário #86: renderizar e interagir com botão iniciar treino #86', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 86/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 86/i)).toBeInTheDocument();
  });

  test('Cenário #86: verificar botão de descanso do treino #86', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 86/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 86/i)).toBeInTheDocument();
  });

  test('Cenário #87: renderizar e interagir com botão iniciar treino #87', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 87/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 87/i)).toBeInTheDocument();
  });

  test('Cenário #87: verificar botão de descanso do treino #87', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 87/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 87/i)).toBeInTheDocument();
  });

  test('Cenário #88: renderizar e interagir com botão iniciar treino #88', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 88/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 88/i)).toBeInTheDocument();
  });

  test('Cenário #88: verificar botão de descanso do treino #88', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 88/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 88/i)).toBeInTheDocument();
  });

  test('Cenário #89: renderizar e interagir com botão iniciar treino #89', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 89/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 89/i)).toBeInTheDocument();
  });

  test('Cenário #89: verificar botão de descanso do treino #89', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 89/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 89/i)).toBeInTheDocument();
  });

  test('Cenário #90: renderizar e interagir com botão iniciar treino #90', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 90/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 90/i)).toBeInTheDocument();
  });

  test('Cenário #90: verificar botão de descanso do treino #90', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 90/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 90/i)).toBeInTheDocument();
  });

  test('Cenário #91: renderizar e interagir com botão iniciar treino #91', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 91/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 91/i)).toBeInTheDocument();
  });

  test('Cenário #91: verificar botão de descanso do treino #91', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 91/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 91/i)).toBeInTheDocument();
  });

  test('Cenário #92: renderizar e interagir com botão iniciar treino #92', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 92/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 92/i)).toBeInTheDocument();
  });

  test('Cenário #92: verificar botão de descanso do treino #92', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 92/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 92/i)).toBeInTheDocument();
  });

  test('Cenário #93: renderizar e interagir com botão iniciar treino #93', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 93/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 93/i)).toBeInTheDocument();
  });

  test('Cenário #93: verificar botão de descanso do treino #93', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 93/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 93/i)).toBeInTheDocument();
  });

  test('Cenário #94: renderizar e interagir com botão iniciar treino #94', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 94/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 94/i)).toBeInTheDocument();
  });

  test('Cenário #94: verificar botão de descanso do treino #94', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 94/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 94/i)).toBeInTheDocument();
  });

  test('Cenário #95: renderizar e interagir com botão iniciar treino #95', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 95/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 95/i)).toBeInTheDocument();
  });

  test('Cenário #95: verificar botão de descanso do treino #95', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 95/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 95/i)).toBeInTheDocument();
  });

  test('Cenário #96: renderizar e interagir com botão iniciar treino #96', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 96/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 96/i)).toBeInTheDocument();
  });

  test('Cenário #96: verificar botão de descanso do treino #96', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 96/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 96/i)).toBeInTheDocument();
  });

  test('Cenário #97: renderizar e interagir com botão iniciar treino #97', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 97/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 97/i)).toBeInTheDocument();
  });

  test('Cenário #97: verificar botão de descanso do treino #97', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 97/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 97/i)).toBeInTheDocument();
  });

  test('Cenário #98: renderizar e interagir com botão iniciar treino #98', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 98/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 98/i)).toBeInTheDocument();
  });

  test('Cenário #98: verificar botão de descanso do treino #98', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 98/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 98/i)).toBeInTheDocument();
  });

  test('Cenário #99: renderizar e interagir com botão iniciar treino #99', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 99/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 99/i)).toBeInTheDocument();
  });

  test('Cenário #99: verificar botão de descanso do treino #99', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 99/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 99/i)).toBeInTheDocument();
  });

  test('Cenário #100: renderizar e interagir com botão iniciar treino #100', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 100/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 100/i)).toBeInTheDocument();
  });

  test('Cenário #100: verificar botão de descanso do treino #100', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 100/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 100/i)).toBeInTheDocument();
  });

  test('Cenário #101: renderizar e interagir com botão iniciar treino #101', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 101/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 101/i)).toBeInTheDocument();
  });

  test('Cenário #101: verificar botão de descanso do treino #101', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 101/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 101/i)).toBeInTheDocument();
  });

  test('Cenário #102: renderizar e interagir com botão iniciar treino #102', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 102/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 102/i)).toBeInTheDocument();
  });

  test('Cenário #102: verificar botão de descanso do treino #102', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 102/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 102/i)).toBeInTheDocument();
  });

  test('Cenário #103: renderizar e interagir com botão iniciar treino #103', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 103/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 103/i)).toBeInTheDocument();
  });

  test('Cenário #103: verificar botão de descanso do treino #103', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 103/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 103/i)).toBeInTheDocument();
  });

  test('Cenário #104: renderizar e interagir com botão iniciar treino #104', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 104/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 104/i)).toBeInTheDocument();
  });

  test('Cenário #104: verificar botão de descanso do treino #104', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 104/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 104/i)).toBeInTheDocument();
  });

  test('Cenário #105: renderizar e interagir com botão iniciar treino #105', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 105/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 105/i)).toBeInTheDocument();
  });

  test('Cenário #105: verificar botão de descanso do treino #105', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 105/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 105/i)).toBeInTheDocument();
  });

  test('Cenário #106: renderizar e interagir com botão iniciar treino #106', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 106/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 106/i)).toBeInTheDocument();
  });

  test('Cenário #106: verificar botão de descanso do treino #106', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 106/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 106/i)).toBeInTheDocument();
  });

  test('Cenário #107: renderizar e interagir com botão iniciar treino #107', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 107/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 107/i)).toBeInTheDocument();
  });

  test('Cenário #107: verificar botão de descanso do treino #107', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 107/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 107/i)).toBeInTheDocument();
  });

  test('Cenário #108: renderizar e interagir com botão iniciar treino #108', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 108/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 108/i)).toBeInTheDocument();
  });

  test('Cenário #108: verificar botão de descanso do treino #108', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 108/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 108/i)).toBeInTheDocument();
  });

  test('Cenário #109: renderizar e interagir com botão iniciar treino #109', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 109/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 109/i)).toBeInTheDocument();
  });

  test('Cenário #109: verificar botão de descanso do treino #109', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 109/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 109/i)).toBeInTheDocument();
  });

  test('Cenário #110: renderizar e interagir com botão iniciar treino #110', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 110/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 110/i)).toBeInTheDocument();
  });

  test('Cenário #110: verificar botão de descanso do treino #110', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 110/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 110/i)).toBeInTheDocument();
  });

  test('Cenário #111: renderizar e interagir com botão iniciar treino #111', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 111/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 111/i)).toBeInTheDocument();
  });

  test('Cenário #111: verificar botão de descanso do treino #111', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 111/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 111/i)).toBeInTheDocument();
  });

  test('Cenário #112: renderizar e interagir com botão iniciar treino #112', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 112/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 112/i)).toBeInTheDocument();
  });

  test('Cenário #112: verificar botão de descanso do treino #112', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 112/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 112/i)).toBeInTheDocument();
  });

  test('Cenário #113: renderizar e interagir com botão iniciar treino #113', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 113/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 113/i)).toBeInTheDocument();
  });

  test('Cenário #113: verificar botão de descanso do treino #113', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 113/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 113/i)).toBeInTheDocument();
  });

  test('Cenário #114: renderizar e interagir com botão iniciar treino #114', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 114/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 114/i)).toBeInTheDocument();
  });

  test('Cenário #114: verificar botão de descanso do treino #114', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 114/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 114/i)).toBeInTheDocument();
  });

  test('Cenário #115: renderizar e interagir com botão iniciar treino #115', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 115/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 115/i)).toBeInTheDocument();
  });

  test('Cenário #115: verificar botão de descanso do treino #115', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 115/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 115/i)).toBeInTheDocument();
  });

  test('Cenário #116: renderizar e interagir com botão iniciar treino #116', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 116/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 116/i)).toBeInTheDocument();
  });

  test('Cenário #116: verificar botão de descanso do treino #116', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 116/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 116/i)).toBeInTheDocument();
  });

  test('Cenário #117: renderizar e interagir com botão iniciar treino #117', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 117/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 117/i)).toBeInTheDocument();
  });

  test('Cenário #117: verificar botão de descanso do treino #117', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 117/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 117/i)).toBeInTheDocument();
  });

  test('Cenário #118: renderizar e interagir com botão iniciar treino #118', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 118/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 118/i)).toBeInTheDocument();
  });

  test('Cenário #118: verificar botão de descanso do treino #118', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 118/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 118/i)).toBeInTheDocument();
  });

  test('Cenário #119: renderizar e interagir com botão iniciar treino #119', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 119/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 119/i)).toBeInTheDocument();
  });

  test('Cenário #119: verificar botão de descanso do treino #119', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 119/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 119/i)).toBeInTheDocument();
  });

  test('Cenário #120: renderizar e interagir com botão iniciar treino #120', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 120/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 120/i)).toBeInTheDocument();
  });

  test('Cenário #120: verificar botão de descanso do treino #120', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 120/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 120/i)).toBeInTheDocument();
  });

  test('Cenário #121: renderizar e interagir com botão iniciar treino #121', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 121/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 121/i)).toBeInTheDocument();
  });

  test('Cenário #121: verificar botão de descanso do treino #121', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 121/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 121/i)).toBeInTheDocument();
  });

  test('Cenário #122: renderizar e interagir com botão iniciar treino #122', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 122/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 122/i)).toBeInTheDocument();
  });

  test('Cenário #122: verificar botão de descanso do treino #122', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 122/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 122/i)).toBeInTheDocument();
  });

  test('Cenário #123: renderizar e interagir com botão iniciar treino #123', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 123/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 123/i)).toBeInTheDocument();
  });

  test('Cenário #123: verificar botão de descanso do treino #123', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 123/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 123/i)).toBeInTheDocument();
  });

  test('Cenário #124: renderizar e interagir com botão iniciar treino #124', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 124/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 124/i)).toBeInTheDocument();
  });

  test('Cenário #124: verificar botão de descanso do treino #124', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 124/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 124/i)).toBeInTheDocument();
  });

  test('Cenário #125: renderizar e interagir com botão iniciar treino #125', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 125/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 125/i)).toBeInTheDocument();
  });

  test('Cenário #125: verificar botão de descanso do treino #125', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 125/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 125/i)).toBeInTheDocument();
  });

  test('Cenário #126: renderizar e interagir com botão iniciar treino #126', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 126/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 126/i)).toBeInTheDocument();
  });

  test('Cenário #126: verificar botão de descanso do treino #126', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 126/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 126/i)).toBeInTheDocument();
  });

  test('Cenário #127: renderizar e interagir com botão iniciar treino #127', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 127/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 127/i)).toBeInTheDocument();
  });

  test('Cenário #127: verificar botão de descanso do treino #127', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 127/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 127/i)).toBeInTheDocument();
  });

  test('Cenário #128: renderizar e interagir com botão iniciar treino #128', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 128/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 128/i)).toBeInTheDocument();
  });

  test('Cenário #128: verificar botão de descanso do treino #128', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 128/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 128/i)).toBeInTheDocument();
  });

  test('Cenário #129: renderizar e interagir com botão iniciar treino #129', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 129/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 129/i)).toBeInTheDocument();
  });

  test('Cenário #129: verificar botão de descanso do treino #129', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 129/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 129/i)).toBeInTheDocument();
  });

  test('Cenário #130: renderizar e interagir com botão iniciar treino #130', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 130/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 130/i)).toBeInTheDocument();
  });

  test('Cenário #130: verificar botão de descanso do treino #130', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 130/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 130/i)).toBeInTheDocument();
  });

  test('Cenário #131: renderizar e interagir com botão iniciar treino #131', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 131/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 131/i)).toBeInTheDocument();
  });

  test('Cenário #131: verificar botão de descanso do treino #131', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 131/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 131/i)).toBeInTheDocument();
  });

  test('Cenário #132: renderizar e interagir com botão iniciar treino #132', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 132/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 132/i)).toBeInTheDocument();
  });

  test('Cenário #132: verificar botão de descanso do treino #132', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 132/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 132/i)).toBeInTheDocument();
  });

  test('Cenário #133: renderizar e interagir com botão iniciar treino #133', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 133/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 133/i)).toBeInTheDocument();
  });

  test('Cenário #133: verificar botão de descanso do treino #133', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 133/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 133/i)).toBeInTheDocument();
  });

  test('Cenário #134: renderizar e interagir com botão iniciar treino #134', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 134/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 134/i)).toBeInTheDocument();
  });

  test('Cenário #134: verificar botão de descanso do treino #134', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 134/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 134/i)).toBeInTheDocument();
  });

  test('Cenário #135: renderizar e interagir com botão iniciar treino #135', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 135/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 135/i)).toBeInTheDocument();
  });

  test('Cenário #135: verificar botão de descanso do treino #135', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 135/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 135/i)).toBeInTheDocument();
  });

  test('Cenário #136: renderizar e interagir com botão iniciar treino #136', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 136/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 136/i)).toBeInTheDocument();
  });

  test('Cenário #136: verificar botão de descanso do treino #136', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 136/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 136/i)).toBeInTheDocument();
  });

  test('Cenário #137: renderizar e interagir com botão iniciar treino #137', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 137/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 137/i)).toBeInTheDocument();
  });

  test('Cenário #137: verificar botão de descanso do treino #137', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 137/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 137/i)).toBeInTheDocument();
  });

  test('Cenário #138: renderizar e interagir com botão iniciar treino #138', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 138/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 138/i)).toBeInTheDocument();
  });

  test('Cenário #138: verificar botão de descanso do treino #138', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 138/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 138/i)).toBeInTheDocument();
  });

  test('Cenário #139: renderizar e interagir com botão iniciar treino #139', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 139/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 139/i)).toBeInTheDocument();
  });

  test('Cenário #139: verificar botão de descanso do treino #139', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 139/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 139/i)).toBeInTheDocument();
  });

  test('Cenário #140: renderizar e interagir com botão iniciar treino #140', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 140/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 140/i)).toBeInTheDocument();
  });

  test('Cenário #140: verificar botão de descanso do treino #140', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 140/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 140/i)).toBeInTheDocument();
  });

  test('Cenário #141: renderizar e interagir com botão iniciar treino #141', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 141/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 141/i)).toBeInTheDocument();
  });

  test('Cenário #141: verificar botão de descanso do treino #141', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 141/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 141/i)).toBeInTheDocument();
  });

  test('Cenário #142: renderizar e interagir com botão iniciar treino #142', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 142/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 142/i)).toBeInTheDocument();
  });

  test('Cenário #142: verificar botão de descanso do treino #142', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 142/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 142/i)).toBeInTheDocument();
  });

  test('Cenário #143: renderizar e interagir com botão iniciar treino #143', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 143/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 143/i)).toBeInTheDocument();
  });

  test('Cenário #143: verificar botão de descanso do treino #143', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 143/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 143/i)).toBeInTheDocument();
  });

  test('Cenário #144: renderizar e interagir com botão iniciar treino #144', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 144/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 144/i)).toBeInTheDocument();
  });

  test('Cenário #144: verificar botão de descanso do treino #144', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 144/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 144/i)).toBeInTheDocument();
  });

  test('Cenário #145: renderizar e interagir com botão iniciar treino #145', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 145/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 145/i)).toBeInTheDocument();
  });

  test('Cenário #145: verificar botão de descanso do treino #145', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 145/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 145/i)).toBeInTheDocument();
  });

  test('Cenário #146: renderizar e interagir com botão iniciar treino #146', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 146/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 146/i)).toBeInTheDocument();
  });

  test('Cenário #146: verificar botão de descanso do treino #146', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 146/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 146/i)).toBeInTheDocument();
  });

  test('Cenário #147: renderizar e interagir com botão iniciar treino #147', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 147/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 147/i)).toBeInTheDocument();
  });

  test('Cenário #147: verificar botão de descanso do treino #147', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 147/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 147/i)).toBeInTheDocument();
  });

  test('Cenário #148: renderizar e interagir com botão iniciar treino #148', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 148/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 148/i)).toBeInTheDocument();
  });

  test('Cenário #148: verificar botão de descanso do treino #148', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 148/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 148/i)).toBeInTheDocument();
  });

  test('Cenário #149: renderizar e interagir com botão iniciar treino #149', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 149/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 149/i)).toBeInTheDocument();
  });

  test('Cenário #149: verificar botão de descanso do treino #149', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 149/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 149/i)).toBeInTheDocument();
  });

  test('Cenário #150: renderizar e interagir com botão iniciar treino #150', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 150/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 150/i)).toBeInTheDocument();
  });

  test('Cenário #150: verificar botão de descanso do treino #150', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 150/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 150/i)).toBeInTheDocument();
  });

  test('Cenário #151: renderizar e interagir com botão iniciar treino #151', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 151/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 151/i)).toBeInTheDocument();
  });

  test('Cenário #151: verificar botão de descanso do treino #151', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 151/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 151/i)).toBeInTheDocument();
  });

  test('Cenário #152: renderizar e interagir com botão iniciar treino #152', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 152/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 152/i)).toBeInTheDocument();
  });

  test('Cenário #152: verificar botão de descanso do treino #152', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 152/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 152/i)).toBeInTheDocument();
  });

  test('Cenário #153: renderizar e interagir com botão iniciar treino #153', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 153/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 153/i)).toBeInTheDocument();
  });

  test('Cenário #153: verificar botão de descanso do treino #153', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 153/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 153/i)).toBeInTheDocument();
  });

  test('Cenário #154: renderizar e interagir com botão iniciar treino #154', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 154/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 154/i)).toBeInTheDocument();
  });

  test('Cenário #154: verificar botão de descanso do treino #154', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 154/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 154/i)).toBeInTheDocument();
  });

  test('Cenário #155: renderizar e interagir com botão iniciar treino #155', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 155/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 155/i)).toBeInTheDocument();
  });

  test('Cenário #155: verificar botão de descanso do treino #155', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 155/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 155/i)).toBeInTheDocument();
  });

  test('Cenário #156: renderizar e interagir com botão iniciar treino #156', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 156/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 156/i)).toBeInTheDocument();
  });

  test('Cenário #156: verificar botão de descanso do treino #156', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 156/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 156/i)).toBeInTheDocument();
  });

  test('Cenário #157: renderizar e interagir com botão iniciar treino #157', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 157/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 157/i)).toBeInTheDocument();
  });

  test('Cenário #157: verificar botão de descanso do treino #157', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 157/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 157/i)).toBeInTheDocument();
  });

  test('Cenário #158: renderizar e interagir com botão iniciar treino #158', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 158/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 158/i)).toBeInTheDocument();
  });

  test('Cenário #158: verificar botão de descanso do treino #158', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 158/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 158/i)).toBeInTheDocument();
  });

  test('Cenário #159: renderizar e interagir com botão iniciar treino #159', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 159/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 159/i)).toBeInTheDocument();
  });

  test('Cenário #159: verificar botão de descanso do treino #159', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 159/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 159/i)).toBeInTheDocument();
  });

  test('Cenário #160: renderizar e interagir com botão iniciar treino #160', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 160/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 160/i)).toBeInTheDocument();
  });

  test('Cenário #160: verificar botão de descanso do treino #160', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 160/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 160/i)).toBeInTheDocument();
  });

  test('Cenário #161: renderizar e interagir com botão iniciar treino #161', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 161/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 161/i)).toBeInTheDocument();
  });

  test('Cenário #161: verificar botão de descanso do treino #161', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 161/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 161/i)).toBeInTheDocument();
  });

  test('Cenário #162: renderizar e interagir com botão iniciar treino #162', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 162/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 162/i)).toBeInTheDocument();
  });

  test('Cenário #162: verificar botão de descanso do treino #162', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 162/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 162/i)).toBeInTheDocument();
  });

  test('Cenário #163: renderizar e interagir com botão iniciar treino #163', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 163/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 163/i)).toBeInTheDocument();
  });

  test('Cenário #163: verificar botão de descanso do treino #163', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 163/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 163/i)).toBeInTheDocument();
  });

  test('Cenário #164: renderizar e interagir com botão iniciar treino #164', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 164/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 164/i)).toBeInTheDocument();
  });

  test('Cenário #164: verificar botão de descanso do treino #164', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 164/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 164/i)).toBeInTheDocument();
  });

  test('Cenário #165: renderizar e interagir com botão iniciar treino #165', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 165/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 165/i)).toBeInTheDocument();
  });

  test('Cenário #165: verificar botão de descanso do treino #165', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 165/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 165/i)).toBeInTheDocument();
  });

  test('Cenário #166: renderizar e interagir com botão iniciar treino #166', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 166/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 166/i)).toBeInTheDocument();
  });

  test('Cenário #166: verificar botão de descanso do treino #166', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 166/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 166/i)).toBeInTheDocument();
  });

  test('Cenário #167: renderizar e interagir com botão iniciar treino #167', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 167/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 167/i)).toBeInTheDocument();
  });

  test('Cenário #167: verificar botão de descanso do treino #167', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 167/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 167/i)).toBeInTheDocument();
  });

  test('Cenário #168: renderizar e interagir com botão iniciar treino #168', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 168/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 168/i)).toBeInTheDocument();
  });

  test('Cenário #168: verificar botão de descanso do treino #168', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 168/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 168/i)).toBeInTheDocument();
  });

  test('Cenário #169: renderizar e interagir com botão iniciar treino #169', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 169/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 169/i)).toBeInTheDocument();
  });

  test('Cenário #169: verificar botão de descanso do treino #169', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 169/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 169/i)).toBeInTheDocument();
  });

  test('Cenário #170: renderizar e interagir com botão iniciar treino #170', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 170/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 170/i)).toBeInTheDocument();
  });

  test('Cenário #170: verificar botão de descanso do treino #170', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 170/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 170/i)).toBeInTheDocument();
  });

  test('Cenário #171: renderizar e interagir com botão iniciar treino #171', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 171/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 171/i)).toBeInTheDocument();
  });

  test('Cenário #171: verificar botão de descanso do treino #171', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 171/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 171/i)).toBeInTheDocument();
  });

  test('Cenário #172: renderizar e interagir com botão iniciar treino #172', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 172/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 172/i)).toBeInTheDocument();
  });

  test('Cenário #172: verificar botão de descanso do treino #172', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 172/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 172/i)).toBeInTheDocument();
  });

  test('Cenário #173: renderizar e interagir com botão iniciar treino #173', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 173/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 173/i)).toBeInTheDocument();
  });

  test('Cenário #173: verificar botão de descanso do treino #173', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 173/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 173/i)).toBeInTheDocument();
  });

  test('Cenário #174: renderizar e interagir com botão iniciar treino #174', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 174/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 174/i)).toBeInTheDocument();
  });

  test('Cenário #174: verificar botão de descanso do treino #174', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 174/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 174/i)).toBeInTheDocument();
  });

  test('Cenário #175: renderizar e interagir com botão iniciar treino #175', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 175/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 175/i)).toBeInTheDocument();
  });

  test('Cenário #175: verificar botão de descanso do treino #175', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 175/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 175/i)).toBeInTheDocument();
  });

  test('Cenário #176: renderizar e interagir com botão iniciar treino #176', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 176/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 176/i)).toBeInTheDocument();
  });

  test('Cenário #176: verificar botão de descanso do treino #176', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 176/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 176/i)).toBeInTheDocument();
  });

  test('Cenário #177: renderizar e interagir com botão iniciar treino #177', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 177/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 177/i)).toBeInTheDocument();
  });

  test('Cenário #177: verificar botão de descanso do treino #177', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 177/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 177/i)).toBeInTheDocument();
  });

  test('Cenário #178: renderizar e interagir com botão iniciar treino #178', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 178/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 178/i)).toBeInTheDocument();
  });

  test('Cenário #178: verificar botão de descanso do treino #178', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 178/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 178/i)).toBeInTheDocument();
  });

  test('Cenário #179: renderizar e interagir com botão iniciar treino #179', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 179/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 179/i)).toBeInTheDocument();
  });

  test('Cenário #179: verificar botão de descanso do treino #179', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 179/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 179/i)).toBeInTheDocument();
  });

  test('Cenário #180: renderizar e interagir com botão iniciar treino #180', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 180/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 180/i)).toBeInTheDocument();
  });

  test('Cenário #180: verificar botão de descanso do treino #180', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 180/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 180/i)).toBeInTheDocument();
  });

  test('Cenário #181: renderizar e interagir com botão iniciar treino #181', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 181/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 181/i)).toBeInTheDocument();
  });

  test('Cenário #181: verificar botão de descanso do treino #181', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 181/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 181/i)).toBeInTheDocument();
  });

  test('Cenário #182: renderizar e interagir com botão iniciar treino #182', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 182/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 182/i)).toBeInTheDocument();
  });

  test('Cenário #182: verificar botão de descanso do treino #182', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 182/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 182/i)).toBeInTheDocument();
  });

  test('Cenário #183: renderizar e interagir com botão iniciar treino #183', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 183/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 183/i)).toBeInTheDocument();
  });

  test('Cenário #183: verificar botão de descanso do treino #183', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 183/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 183/i)).toBeInTheDocument();
  });

  test('Cenário #184: renderizar e interagir com botão iniciar treino #184', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 184/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 184/i)).toBeInTheDocument();
  });

  test('Cenário #184: verificar botão de descanso do treino #184', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 184/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 184/i)).toBeInTheDocument();
  });

  test('Cenário #185: renderizar e interagir com botão iniciar treino #185', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 185/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 185/i)).toBeInTheDocument();
  });

  test('Cenário #185: verificar botão de descanso do treino #185', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 185/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 185/i)).toBeInTheDocument();
  });

  test('Cenário #186: renderizar e interagir com botão iniciar treino #186', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 186/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 186/i)).toBeInTheDocument();
  });

  test('Cenário #186: verificar botão de descanso do treino #186', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 186/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 186/i)).toBeInTheDocument();
  });

  test('Cenário #187: renderizar e interagir com botão iniciar treino #187', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 187/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 187/i)).toBeInTheDocument();
  });

  test('Cenário #187: verificar botão de descanso do treino #187', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 187/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 187/i)).toBeInTheDocument();
  });

  test('Cenário #188: renderizar e interagir com botão iniciar treino #188', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 188/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 188/i)).toBeInTheDocument();
  });

  test('Cenário #188: verificar botão de descanso do treino #188', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 188/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 188/i)).toBeInTheDocument();
  });

  test('Cenário #189: renderizar e interagir com botão iniciar treino #189', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 189/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 189/i)).toBeInTheDocument();
  });

  test('Cenário #189: verificar botão de descanso do treino #189', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 189/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 189/i)).toBeInTheDocument();
  });

  test('Cenário #190: renderizar e interagir com botão iniciar treino #190', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 190/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 190/i)).toBeInTheDocument();
  });

  test('Cenário #190: verificar botão de descanso do treino #190', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 190/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 190/i)).toBeInTheDocument();
  });

  test('Cenário #191: renderizar e interagir com botão iniciar treino #191', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 191/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 191/i)).toBeInTheDocument();
  });

  test('Cenário #191: verificar botão de descanso do treino #191', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 191/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 191/i)).toBeInTheDocument();
  });

  test('Cenário #192: renderizar e interagir com botão iniciar treino #192', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 192/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 192/i)).toBeInTheDocument();
  });

  test('Cenário #192: verificar botão de descanso do treino #192', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 192/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 192/i)).toBeInTheDocument();
  });

  test('Cenário #193: renderizar e interagir com botão iniciar treino #193', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 193/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 193/i)).toBeInTheDocument();
  });

  test('Cenário #193: verificar botão de descanso do treino #193', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 193/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 193/i)).toBeInTheDocument();
  });

  test('Cenário #194: renderizar e interagir com botão iniciar treino #194', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 194/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 194/i)).toBeInTheDocument();
  });

  test('Cenário #194: verificar botão de descanso do treino #194', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 194/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 194/i)).toBeInTheDocument();
  });

  test('Cenário #195: renderizar e interagir com botão iniciar treino #195', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 195/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 195/i)).toBeInTheDocument();
  });

  test('Cenário #195: verificar botão de descanso do treino #195', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 195/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 195/i)).toBeInTheDocument();
  });

  test('Cenário #196: renderizar e interagir com botão iniciar treino #196', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 196/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 196/i)).toBeInTheDocument();
  });

  test('Cenário #196: verificar botão de descanso do treino #196', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 196/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 196/i)).toBeInTheDocument();
  });

  test('Cenário #197: renderizar e interagir com botão iniciar treino #197', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 197/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 197/i)).toBeInTheDocument();
  });

  test('Cenário #197: verificar botão de descanso do treino #197', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 197/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 197/i)).toBeInTheDocument();
  });

  test('Cenário #198: renderizar e interagir com botão iniciar treino #198', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 198/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 198/i)).toBeInTheDocument();
  });

  test('Cenário #198: verificar botão de descanso do treino #198', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 198/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 198/i)).toBeInTheDocument();
  });

  test('Cenário #199: renderizar e interagir com botão iniciar treino #199', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 199/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 199/i)).toBeInTheDocument();
  });

  test('Cenário #199: verificar botão de descanso do treino #199', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 199/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 199/i)).toBeInTheDocument();
  });

  test('Cenário #200: renderizar e interagir com botão iniciar treino #200', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 200/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 200/i)).toBeInTheDocument();
  });

  test('Cenário #200: verificar botão de descanso do treino #200', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 200/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 200/i)).toBeInTheDocument();
  });

  test('Cenário #201: renderizar e interagir com botão iniciar treino #201', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 201/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 201/i)).toBeInTheDocument();
  });

  test('Cenário #201: verificar botão de descanso do treino #201', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 201/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 201/i)).toBeInTheDocument();
  });

  test('Cenário #202: renderizar e interagir com botão iniciar treino #202', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 202/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 202/i)).toBeInTheDocument();
  });

  test('Cenário #202: verificar botão de descanso do treino #202', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 202/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 202/i)).toBeInTheDocument();
  });

  test('Cenário #203: renderizar e interagir com botão iniciar treino #203', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 203/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 203/i)).toBeInTheDocument();
  });

  test('Cenário #203: verificar botão de descanso do treino #203', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 203/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 203/i)).toBeInTheDocument();
  });

  test('Cenário #204: renderizar e interagir com botão iniciar treino #204', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 204/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 204/i)).toBeInTheDocument();
  });

  test('Cenário #204: verificar botão de descanso do treino #204', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 204/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 204/i)).toBeInTheDocument();
  });

  test('Cenário #205: renderizar e interagir com botão iniciar treino #205', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 205/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 205/i)).toBeInTheDocument();
  });

  test('Cenário #205: verificar botão de descanso do treino #205', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 205/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 205/i)).toBeInTheDocument();
  });

  test('Cenário #206: renderizar e interagir com botão iniciar treino #206', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 206/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 206/i)).toBeInTheDocument();
  });

  test('Cenário #206: verificar botão de descanso do treino #206', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 206/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 206/i)).toBeInTheDocument();
  });

  test('Cenário #207: renderizar e interagir com botão iniciar treino #207', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 207/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 207/i)).toBeInTheDocument();
  });

  test('Cenário #207: verificar botão de descanso do treino #207', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 207/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 207/i)).toBeInTheDocument();
  });

  test('Cenário #208: renderizar e interagir com botão iniciar treino #208', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 208/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 208/i)).toBeInTheDocument();
  });

  test('Cenário #208: verificar botão de descanso do treino #208', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 208/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 208/i)).toBeInTheDocument();
  });

  test('Cenário #209: renderizar e interagir com botão iniciar treino #209', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 209/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 209/i)).toBeInTheDocument();
  });

  test('Cenário #209: verificar botão de descanso do treino #209', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 209/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 209/i)).toBeInTheDocument();
  });

  test('Cenário #210: renderizar e interagir com botão iniciar treino #210', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 210/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 210/i)).toBeInTheDocument();
  });

  test('Cenário #210: verificar botão de descanso do treino #210', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 210/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 210/i)).toBeInTheDocument();
  });

  test('Cenário #211: renderizar e interagir com botão iniciar treino #211', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 211/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 211/i)).toBeInTheDocument();
  });

  test('Cenário #211: verificar botão de descanso do treino #211', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 211/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 211/i)).toBeInTheDocument();
  });

  test('Cenário #212: renderizar e interagir com botão iniciar treino #212', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 212/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 212/i)).toBeInTheDocument();
  });

  test('Cenário #212: verificar botão de descanso do treino #212', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 212/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 212/i)).toBeInTheDocument();
  });

  test('Cenário #213: renderizar e interagir com botão iniciar treino #213', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 213/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 213/i)).toBeInTheDocument();
  });

  test('Cenário #213: verificar botão de descanso do treino #213', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 213/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 213/i)).toBeInTheDocument();
  });

  test('Cenário #214: renderizar e interagir com botão iniciar treino #214', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 214/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 214/i)).toBeInTheDocument();
  });

  test('Cenário #214: verificar botão de descanso do treino #214', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 214/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 214/i)).toBeInTheDocument();
  });

  test('Cenário #215: renderizar e interagir com botão iniciar treino #215', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 215/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 215/i)).toBeInTheDocument();
  });

  test('Cenário #215: verificar botão de descanso do treino #215', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 215/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 215/i)).toBeInTheDocument();
  });

  test('Cenário #216: renderizar e interagir com botão iniciar treino #216', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 216/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 216/i)).toBeInTheDocument();
  });

  test('Cenário #216: verificar botão de descanso do treino #216', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 216/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 216/i)).toBeInTheDocument();
  });

  test('Cenário #217: renderizar e interagir com botão iniciar treino #217', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 217/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 217/i)).toBeInTheDocument();
  });

  test('Cenário #217: verificar botão de descanso do treino #217', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 217/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 217/i)).toBeInTheDocument();
  });

  test('Cenário #218: renderizar e interagir com botão iniciar treino #218', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 218/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 218/i)).toBeInTheDocument();
  });

  test('Cenário #218: verificar botão de descanso do treino #218', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 218/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 218/i)).toBeInTheDocument();
  });

  test('Cenário #219: renderizar e interagir com botão iniciar treino #219', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 219/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 219/i)).toBeInTheDocument();
  });

  test('Cenário #219: verificar botão de descanso do treino #219', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 219/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 219/i)).toBeInTheDocument();
  });

  test('Cenário #220: renderizar e interagir com botão iniciar treino #220', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 220/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 220/i)).toBeInTheDocument();
  });

  test('Cenário #220: verificar botão de descanso do treino #220', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 220/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 220/i)).toBeInTheDocument();
  });

  test('Cenário #221: renderizar e interagir com botão iniciar treino #221', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 221/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 221/i)).toBeInTheDocument();
  });

  test('Cenário #221: verificar botão de descanso do treino #221', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 221/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 221/i)).toBeInTheDocument();
  });

  test('Cenário #222: renderizar e interagir com botão iniciar treino #222', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 222/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 222/i)).toBeInTheDocument();
  });

  test('Cenário #222: verificar botão de descanso do treino #222', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 222/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 222/i)).toBeInTheDocument();
  });

  test('Cenário #223: renderizar e interagir com botão iniciar treino #223', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 223/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 223/i)).toBeInTheDocument();
  });

  test('Cenário #223: verificar botão de descanso do treino #223', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 223/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 223/i)).toBeInTheDocument();
  });

  test('Cenário #224: renderizar e interagir com botão iniciar treino #224', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 224/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 224/i)).toBeInTheDocument();
  });

  test('Cenário #224: verificar botão de descanso do treino #224', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 224/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 224/i)).toBeInTheDocument();
  });

  test('Cenário #225: renderizar e interagir com botão iniciar treino #225', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 225/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 225/i)).toBeInTheDocument();
  });

  test('Cenário #225: verificar botão de descanso do treino #225', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 225/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 225/i)).toBeInTheDocument();
  });

  test('Cenário #226: renderizar e interagir com botão iniciar treino #226', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 226/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 226/i)).toBeInTheDocument();
  });

  test('Cenário #226: verificar botão de descanso do treino #226', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 226/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 226/i)).toBeInTheDocument();
  });

  test('Cenário #227: renderizar e interagir com botão iniciar treino #227', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 227/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 227/i)).toBeInTheDocument();
  });

  test('Cenário #227: verificar botão de descanso do treino #227', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 227/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 227/i)).toBeInTheDocument();
  });

  test('Cenário #228: renderizar e interagir com botão iniciar treino #228', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 228/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 228/i)).toBeInTheDocument();
  });

  test('Cenário #228: verificar botão de descanso do treino #228', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 228/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 228/i)).toBeInTheDocument();
  });

  test('Cenário #229: renderizar e interagir com botão iniciar treino #229', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 229/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 229/i)).toBeInTheDocument();
  });

  test('Cenário #229: verificar botão de descanso do treino #229', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 229/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 229/i)).toBeInTheDocument();
  });

  test('Cenário #230: renderizar e interagir com botão iniciar treino #230', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 230/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 230/i)).toBeInTheDocument();
  });

  test('Cenário #230: verificar botão de descanso do treino #230', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 230/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 230/i)).toBeInTheDocument();
  });

  test('Cenário #231: renderizar e interagir com botão iniciar treino #231', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 231/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 231/i)).toBeInTheDocument();
  });

  test('Cenário #231: verificar botão de descanso do treino #231', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 231/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 231/i)).toBeInTheDocument();
  });

  test('Cenário #232: renderizar e interagir com botão iniciar treino #232', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 232/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 232/i)).toBeInTheDocument();
  });

  test('Cenário #232: verificar botão de descanso do treino #232', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 232/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 232/i)).toBeInTheDocument();
  });

  test('Cenário #233: renderizar e interagir com botão iniciar treino #233', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 233/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 233/i)).toBeInTheDocument();
  });

  test('Cenário #233: verificar botão de descanso do treino #233', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 233/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 233/i)).toBeInTheDocument();
  });

  test('Cenário #234: renderizar e interagir com botão iniciar treino #234', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 234/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 234/i)).toBeInTheDocument();
  });

  test('Cenário #234: verificar botão de descanso do treino #234', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 234/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 234/i)).toBeInTheDocument();
  });

  test('Cenário #235: renderizar e interagir com botão iniciar treino #235', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 235/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 235/i)).toBeInTheDocument();
  });

  test('Cenário #235: verificar botão de descanso do treino #235', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 235/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 235/i)).toBeInTheDocument();
  });

  test('Cenário #236: renderizar e interagir com botão iniciar treino #236', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 236/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 236/i)).toBeInTheDocument();
  });

  test('Cenário #236: verificar botão de descanso do treino #236', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 236/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 236/i)).toBeInTheDocument();
  });

  test('Cenário #237: renderizar e interagir com botão iniciar treino #237', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 237/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 237/i)).toBeInTheDocument();
  });

  test('Cenário #237: verificar botão de descanso do treino #237', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 237/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 237/i)).toBeInTheDocument();
  });

  test('Cenário #238: renderizar e interagir com botão iniciar treino #238', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 238/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 238/i)).toBeInTheDocument();
  });

  test('Cenário #238: verificar botão de descanso do treino #238', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 238/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 238/i)).toBeInTheDocument();
  });

  test('Cenário #239: renderizar e interagir com botão iniciar treino #239', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 239/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 239/i)).toBeInTheDocument();
  });

  test('Cenário #239: verificar botão de descanso do treino #239', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 239/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 239/i)).toBeInTheDocument();
  });

  test('Cenário #240: renderizar e interagir com botão iniciar treino #240', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 240/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 240/i)).toBeInTheDocument();
  });

  test('Cenário #240: verificar botão de descanso do treino #240', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 240/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 240/i)).toBeInTheDocument();
  });

  test('Cenário #241: renderizar e interagir com botão iniciar treino #241', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 241/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 241/i)).toBeInTheDocument();
  });

  test('Cenário #241: verificar botão de descanso do treino #241', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 241/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 241/i)).toBeInTheDocument();
  });

  test('Cenário #242: renderizar e interagir com botão iniciar treino #242', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 242/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 242/i)).toBeInTheDocument();
  });

  test('Cenário #242: verificar botão de descanso do treino #242', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 242/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 242/i)).toBeInTheDocument();
  });

  test('Cenário #243: renderizar e interagir com botão iniciar treino #243', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 243/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 243/i)).toBeInTheDocument();
  });

  test('Cenário #243: verificar botão de descanso do treino #243', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 243/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 243/i)).toBeInTheDocument();
  });

  test('Cenário #244: renderizar e interagir com botão iniciar treino #244', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 244/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 244/i)).toBeInTheDocument();
  });

  test('Cenário #244: verificar botão de descanso do treino #244', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 244/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 244/i)).toBeInTheDocument();
  });

  test('Cenário #245: renderizar e interagir com botão iniciar treino #245', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 245/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 245/i)).toBeInTheDocument();
  });

  test('Cenário #245: verificar botão de descanso do treino #245', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 245/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 245/i)).toBeInTheDocument();
  });

  test('Cenário #246: renderizar e interagir com botão iniciar treino #246', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 246/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 246/i)).toBeInTheDocument();
  });

  test('Cenário #246: verificar botão de descanso do treino #246', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 246/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 246/i)).toBeInTheDocument();
  });

  test('Cenário #247: renderizar e interagir com botão iniciar treino #247', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 247/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 247/i)).toBeInTheDocument();
  });

  test('Cenário #247: verificar botão de descanso do treino #247', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 247/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 247/i)).toBeInTheDocument();
  });

  test('Cenário #248: renderizar e interagir com botão iniciar treino #248', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 248/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 248/i)).toBeInTheDocument();
  });

  test('Cenário #248: verificar botão de descanso do treino #248', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 248/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 248/i)).toBeInTheDocument();
  });

  test('Cenário #249: renderizar e interagir com botão iniciar treino #249', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 249/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 249/i)).toBeInTheDocument();
  });

  test('Cenário #249: verificar botão de descanso do treino #249', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 249/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 249/i)).toBeInTheDocument();
  });

  test('Cenário #250: renderizar e interagir com botão iniciar treino #250', async () => {
    render(<TreinosPage />);
    const treino = await screen.findByText(/treino número 250/i);
    fireEvent.click(treino);
    expect(await screen.findByText(/executar treino número 250/i)).toBeInTheDocument();
  });

  test('Cenário #250: verificar botão de descanso do treino #250', async () => {
    render(<TreinosPage />);
    const iniciarBtn = await screen.findByRole('button', { name: /descanso treino 250/i });
    fireEvent.click(iniciarBtn);
    expect(await screen.findByText(/descansando treino 250/i)).toBeInTheDocument();
  });

});
