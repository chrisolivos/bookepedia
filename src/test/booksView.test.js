import { render, screen, fireEvent, Simulate, waitFor } from '@testing-library/react';
import BooksView, { fetchBooks } from '../components/booksView'
import React, { useState, useEffect } from 'react';
import userEvent from "@testing-library/user-event";


const mockedFecth = {
    id: { isbn: "978-0553106633" },
    name: { name: "A Storm of Swords" },
    authors: { authors: "George R. R. Martin" },
}
document.write(mockedFecth)

global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve(mockedFecth)
    })
)

describe('Testeando componente BooksView', () => {
    beforeEach(() => {
        render(<BooksView />)
        jest.clearAllMocks()


    })

    test('Deberia devolver todos los libros', async () => {
      //  const data = await fetchBooks()
        // document.write(data)
        // fetchBooks.mockResolvedValue({
        //     result: [{
        //         id: { isbn: "978-0553106633" },
        //         name: { name: "A Storm of Swords" },
        //         authors: { authors: "George R. R. Martin" },
        //     }]
        //    })


        // expect(data).toMatchObject(mockedFecth)
        // expect(fetch).toHaveBeenCalledTimes(1)
        // expect(fetch).toHaveBeenCalledWith("https://anapioficeandfire.com/api/books", {
        //     method: 'POST'
        // });
        //expect(fetchBooks()).toBe('function')





        //     expect(data.name).toEqual("A Storm of Swords");
        //    // expect(mockedNavigate).toHaveBeenCalledWith('/dashboard');
        //     expect(fetch).toHaveBeenCalledTimes(1);


        fetch.mockResponseOnce(JSON.stringify({
          result: [
            {
                id: { isbn: "978-0553106633" },
                name: { name: "A Storm of Swords" },
                authors: { authors: "George R. R. Martin" },
            }],
        }));
        const res = await fetchBooks();
        expect(res).toEqual([{ isbn: "978-0553106633", name: "A Storm of Swords",authors: "George R. R. Martin" }]);
        expect(fetch.mock.calls.length).toEqual(1);

    });



})