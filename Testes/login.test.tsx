import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import EntrarPage from '../frontend/src/app/Entrar/page';

describe('Página de Login - Entrar', () => {
  test('deve renderizar campos de e-mail e senha', () => {
    render(<EntrarPage />);
    expect(screen.getByLabelText(/e-mail/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/senha/i)).toBeInTheDocument();
  });

  test('botão de login deve estar desabilitado se os campos estiverem vazios', () => {
    render(<EntrarPage />);
    const button = screen.getByRole('button', { name: /entrar/i });
    expect(button).toBeDisabled();
  });

  test('botão deve habilitar ao preencher campos', () => {
    render(<EntrarPage />);
    fireEvent.change(screen.getByLabelText(/e-mail/i), { target: { value: 'teste@example.com' } });
    fireEvent.change(screen.getByLabelText(/senha/i), { target: { value: '123456' } });
    expect(screen.getByRole('button', { name: /entrar/i })).not.toBeDisabled();
  });

  test('deve exibir erro se e-mail for inválido', () => {
    render(<EntrarPage />);
    const emailInput = screen.getByLabelText(/e-mail/i);
    fireEvent.change(emailInput, { target: { value: 'teste@' } });
    fireEvent.blur(emailInput);
    expect(screen.getByText(/e-mail inválido/i)).toBeInTheDocument();
  });
});
