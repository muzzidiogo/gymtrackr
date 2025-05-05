
import { render, screen, fireEvent } from '@testing-library/react';
import WorkoutForm from '../../src/app/User/Treinos/Executar/page';

test('renders WorkoutForm and submits correctly', () => {
  render(<WorkoutForm />);
  const button = screen.getByRole('button', { name: /Salvar/i });
  expect(button).toBeInTheDocument();
  fireEvent.click(button);
});
