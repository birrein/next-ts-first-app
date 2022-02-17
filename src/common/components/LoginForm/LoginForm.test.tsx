import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import LoginForm from '@common/components/LoginForm';

describe('<LoginForm />', () => {
  it('Form title render', () => {
    render(<LoginForm />);
    const loginTitle = screen.getByText('Iniciar sesión');
    expect(loginTitle).toBeInTheDocument();
  });

  it('Form email input render', () => {
    render(<LoginForm />);
    const emailInput = screen.getByLabelText(/Correo electrónico/);
    expect(emailInput).toBeInTheDocument();
  });

  it('Form password input render', () => {
    render(<LoginForm />);
    const passwordInput = screen.getByLabelText(/Contraseña/);
    expect(passwordInput).toBeInTheDocument();
  });

  it('Render submit button', () => {
    render(<LoginForm />);
    const submitButton = screen.getByRole('button', { name: 'Enviar' });
    expect(submitButton).toBeInTheDocument();
  });
});
