import { render, screen, fireEvent, Simulate } from '@testing-library/react';
import App from '../App';
import userEvent from "@testing-library/user-event";

const mockedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedNavigate
}));


describe('Testeando boton Start', () => {
  let button

  beforeEach(() => {
    render(<App />);
    button = screen.getByRole('button', { name: "Start" })
    jest.clearAllMocks();
  })

  test('Boton start existe en el documento', () => {
    expect(button).toBeInTheDocument();
  });

  test('Al pulsar el boton Start', () => {
    fireEvent.click(button);
    expect(button).toHaveBeenCalled
  })

  test('Al pulsar el boton ejecute funcion navegar', async () => {
    userEvent.click(button)
    expect(mockedNavigate).toHaveBeenCalledWith('/dashboard');
  })

})