import React, { useState, useEffect, Suspense } from 'react';

export default function BooksView() {
    const [books, setBooks] = useState([]);
    const fetchBooks = () => {
        fetch("https://anapioficeandfire.com/api/books")
          .then((response) => response.json())
          .then((data) => setBooks(data))
      }
     
     useEffect(() => {
          fetchBooks()
       }, []);

  return (
    <div>
      <h1>Books list</h1>
      <Suspense fallback={<div>Loading...</div>}>
      <ul className="card">
          {books?.map((item) => (
            <li key={item.isbn}>{item.isbn + ' - ' + item.name}</li>
          ))}
        </ul>
      </Suspense>
    </div>
  );
}