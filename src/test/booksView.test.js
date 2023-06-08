import { render, screen, fireEvent, Simulate, waitFor } from '@testing-library/react';
import BooksView, { fetchBooks } from '../components/booksView'
import React, { useState, useEffect } from 'react';



const mockedFecth = {
    id: { isbn: "978-0553106633" },
    name: { name: "A Storm of Swords" },
    authors: { authors: "George R. R. Martin" },
}
document.write(mockedFecth)

global.fetch = jest.fn(() =>
    Promise.then({
        json: () => Promise.then(mockedFecth)
    })
)

describe('Testeando componente BooksView', () => {
    beforeEach(() => {
        render(<BooksView />)
      //  jest.clearAllMocks()


    })

    test('Deberia devolver todos los libros', async () => {
         const data = await fetchBooks()
       expect(data).toMatchObject(mockedFecth)
        expect(fetch).toHaveBeenCalledTimes(1)
        expect(fetch).toHaveBeenCalledWith("https://anapioficeandfire.com/api/books");
    });



})