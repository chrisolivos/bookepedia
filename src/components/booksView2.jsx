// import React, { useState, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Table from 'react-bootstrap/Table';
// import '../styles/booksView.css'



// export default function BooksView2() {
//     const [books, setBooks] = useState([]);
//     const fetchBooks = () => {
//         fetch("https://anapioficeandfire.com/api/books")
//           .then((response) => response.json())
//           .then((data) => setBooks(data))
//       };

//   function orderClick(){
//     console.log('ordenar');
//   };

//      useEffect(() => {
//           fetchBooks();
//        }, []);


//   return (
//     <div className='container-booksView'>
//     <Table striped bordered hover size="sm" className='table-sortable'>
//       <thead>
//         <tr>
//         <th className="asc" onClick={orderClick()}>#</th>
//           <th className="desc">First Name</th>
//           <th className="desc">Last Name</th>

//         </tr>
//       </thead>

//       <tbody>
//       {books?.map((item) => (
//         <tr key={item.isbn}>
//           <td>{item.isbn}</td>
//           <td >{item.name}</td>
//           <td>{item.authors}</td>

//         </tr>
//             ))}
//       </tbody>
  
//     </Table>
//     </div>

//   );
// }


