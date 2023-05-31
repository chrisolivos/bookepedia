import React, { useState, useEffect } from 'react';
import '../styles/booksView.css'
import DataTable from 'react-data-table-component'

export default function BooksView() {

       const [books, setBooks] = useState([]);
    const fetchBooks = () => {
        fetch("https://anapioficeandfire.com/api/books")
          .then((response) => response.json())
          .then((data) => setBooks(data))
      };

//   function orderClick(){
//     console.log('ordenar');
//   };

     useEffect(() => {
          fetchBooks();
       }, []);


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
            sortable: true
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
    

console.log(data)
    return (
        <div className="container">
            <DataTable
                columns={columns}
                data={data}
            >

            </DataTable>

        </div>
    );

}