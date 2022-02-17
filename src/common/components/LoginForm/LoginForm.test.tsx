import { render, screen, cleanup } from '@testing-library/react';
import LoginForm from '@common/components/LoginForm';

describe('<LoginForm />', () => {
  it('Form title render', () => {
    render(<LoginForm />);
    screen.getByText('Iniciar sesión');
  });

  it('Form email input render', () => {
    render(<LoginForm />);
    screen.getByLabelText(/Correo electrónico/);
  });

  it('Form password input render', () => {
    render(<LoginForm />);
    screen.getByLabelText(/Contraseña/);
  });

  it('Render submit button', () => {
    render(<LoginForm />);
    screen.getByRole('button', { name: 'Enviar' });
  });
});
