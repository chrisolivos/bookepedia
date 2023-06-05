import { render, screen, fireEvent, Simulate, waitFor } from '@testing-library/react';
import NewBook from '../components/newBook'


describe('Testeando input y button', () => {
  let button
  let inputISBN
  let inputAuthors
  let inputCountry
  let inputPublisher

  beforeEach(() => {
    render(<NewBook />)
    button = screen.getByRole('button', { name: "Submit" })
    inputISBN = screen.getByPlaceholderText('###-##########')
   // inputAuthors = screen.getByRole('input', { id: "authors" })
    // inputCountry = screen.getByRole('input', { name: "country" })
    // inputPublisher = screen.getByRole('input', { name: "publisher" })

  })

  test('Boton Submit existe en el documento', () => {
    expect(button).toBeInTheDocument();
  });

  test('inputISBN existe en el documento', () => {
    expect(inputISBN).toBeInTheDocument();
  });

  // test('inputAuthors existe en el documento', () => {
  //   expect(inputAuthors).toBeInTheDocument();
  // });

  // test('inputISBN existe en el documento', () => {
  //   expect(inputISBN).toBeInTheDocument();
  // });

  // test('Al pulsar el boton Start', () => {
  //   //  render(<App />);
  //   //const button = screen.getByRole('button', {name: "Start"})
  //   fireEvent.click(button);
  //   //al hacer click debe llamar a la funcion navegar
  //   expect(button).toHaveBeenCalled
  // })


})


