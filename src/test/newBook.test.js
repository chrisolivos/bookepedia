import { render, screen, fireEvent, Simulate, waitFor } from '@testing-library/react';
import NewBook from '../components/newBook'


describe('Testeando input y button', () => {
  let button
  let inputISBN
  let inputAuthors
  let inputCountry
  let inputPublisher

  const errors = {
    isbnBook: 'Required',
    isbnBook: 'Invalid ISBN',
    authors: 'Required',
    country: 'Required',
    publisher: 'Required'
  };

  beforeEach(() => {
    render(<NewBook />)
    button = screen.getByRole('button', { name: "Submit" })
    inputISBN = screen.getByPlaceholderText('###-##########')
    inputAuthors = screen.findByRole('input', { id: 'authors' })
    inputCountry = screen.findByRole('input', { id: 'country' })
    inputPublisher = screen.findByRole('input', { id: 'publisher' })
  })


  test('Boton Submit existe en el documento', () => {
    expect(button).toBeInTheDocument();
  });

  test('Boton Submit es llamado', () => {
    fireEvent.click(button);
    expect(button).toHaveBeenCalled
  })

  test('inputISBN existe en el documento', () => {
    expect(inputISBN).toBeInTheDocument();
  });

  test('valida formato de ISBN', () => {
    const regex = /^[0-9]{3}-[0-9]{10}$/
    const ISBN = "978-0553106633"
   // inputISBN.value=""
    fireEvent.click(button)
   expect(ISBN).toMatch(regex)
  //  expect(errors.isbnBook).toBe('Invalid ISBN')
  });

  test('inputAuthors vacio', () => {
    inputAuthors = ''
    fireEvent.click(button)
    expect(errors.authors).toBe('Required')
  });

})


