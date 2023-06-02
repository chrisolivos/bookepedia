import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import '../styles/favoriteBooks.css';

export default function FavoriteBooks() {
    const [books, setBooks] = useState([]);

    const fetchBooks = () => {
        fetch("https://anapioficeandfire.com/api/books")
            .then((response) => response.json())
            .then((data) => setBooks(data))
            .catch((error)=> 
            console.log('Error : ',error.message)
        )
    };

    const columns = [
        {
            name: "ISBN",
            selector: row => row.campo1,
            sortable: true
        },
        {
            name: "NAME",
            selector: row => row.campo2,
            sortable: true
        },
        {
            name: "AUTHORS",
            selector: row => row.campo3,
            sortable: true,
        }
    ];

    const data =
        books?.map((item) => (
            {
                campo1: item.isbn,
                campo2: item.name,
                campo3: item.authors

            }
        ))

    useEffect(() => { fetchBooks(); }, []);

    return (
        <div className='container-favorites'>
            <div className="container-favorite-books">
                <DataTable
                    id={columns.isbn}
                    columns={columns}
                    data={data}
                />
            </div>
        </div>
    );
}
