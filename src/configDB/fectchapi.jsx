import React, { useState, useEffect } from 'react';

export default  function FetchBooks() {
   const [books, setBooks] = useState([]);
   useEffect( () => { 
    async function fetchData() {
        try {
            const response = await fetch('https://anapioficeandfire.com/api/books');
            const data =  await response.json();
            setBooks(data)
        } catch (err) {
            console.log(err);
        }
    }
    fetchData();
}, [])
    console.log(books)
 //  return books


};