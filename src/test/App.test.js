import { render, screen, fireEvent, Simulate } from '@testing-library/react';
import App from '../App';
import { useNavigate, BrowserRouter  } from 'react-router-dom'
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
    // render(<App />);
    // const element = screen.getByText(/Start/i);
    expect(button).toBeInTheDocument();
  });

  test('Al pulsar el boton Start', () => {
    //  render(<App />);
    //const button = screen.getByRole('button', {name: "Start"})
    fireEvent.click(button);
    //al hacer click debe llamar a la funcion navegar
    expect(button).toHaveBeenCalled
  })

  test('Al pulsar el boton ejecute funcion navegar', async() => {

    userEvent.click(button)
    expect(mockedNavigate).toHaveBeenCalledWith('/dashboard');
  })

})