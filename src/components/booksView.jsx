import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { Dialog } from '@headlessui/react'
import '../styles/booksView.css';




// const columns = [
//   { field: 'id', headerName: 'ID', width: 90 },
//   {
//     field: 'firstName',
//     headerName: 'First name',
//     width: 150,
//     editable: true,
//   },
//   {
//     field: 'lastName',
//     headerName: 'Last name',
//     width: 150,
//     editable: true,
//   },
//   {
//     field: 'age',
//     headerName: 'Age',
//     type: 'number',
//     width: 110,
//     editable: true,
//   },
//   {
//     field: 'fullName',
//     headerName: 'Full name',
//     description: 'This column has a value getter and is not sortable.',
//     sortable: false,
//     width: 160,
//     valueGetter: (params) =>
//       `${params.row.firstName || ''} ${params.row.lastName || ''}`,
//   },
// ];

// const rows = [
//   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
//   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },

// ];

export default function BooksView() {
    const [books, setBooks] = useState([]);
    let [isOpen, setIsOpen] = useState(false)
    let [filterData, setFilterData] = useState([]);

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }
   

    const fetchBooks = () => {
        fetch("https://anapioficeandfire.com/api/books")
            .then((response) => response.json())
            .then((data) => setBooks(data))
    };
    const columns = [
        { field: 'id',
         headerName: 'ISBN',
          width: 180,
          headerAlign: 'center'
          
        },

        {
            field: "name",
            headerName: "NAME",
            width: 150,
            editable: true,
             headerAlign: 'center',
        },
        {
            field: "authors",
            headerName: "AUTHORS",
            width: 150,
            editable: true,
            headerAlign: 'center'
        }
    ];
    const rows =
        books?.map((item) => (
            {
                id: item.isbn,
                name: item.name,
                authors: item.authors

            }
        ))

    const onRowClicked = (row, event) => { onClickDetails(event, row.id); };



    function onClickDetails(event, rowid) {
        const datos = books.find(dato => dato.isbn === rowid)
        setFilterData(datos)
        openModal()
    }
    useEffect(() => { fetchBooks(); }, []);
  return (
    <>
    <div className='container-booksView'>
    <Box sx={{ height: 400, width:"auto" }}>
      <DataGrid
        rows={rows}
        onRowClick={onRowClicked}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        //checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
     <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">

     {/* The backdrop, rendered as a fixed sibling to the panel container */}
     <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

     {/* Full-screen container to center the panel */}
     <div className="fixed inset-0 flex items-center justify-center p-4">
         {/* The actual dialog panel  */}
         <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
             <Dialog.Title
                 as="h3"
                 className="text-lg font-medium leading-6 text-gray-900"
             >

                 {filterData.name}
             </Dialog.Title>
             <div className="mt-2">
                 <p className="text-sm text-gray-500">
                     Publisher: {filterData.publisher} <br />
                     Country: {filterData.country}
                 </p>
             </div>

             <div className="mt-4">
                 <button
                     type="button"
                     className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                     onClick={closeModal}
                 >
                     Close
                 </button>
             </div>
         </Dialog.Panel>
     </div>
 </Dialog>
 </div>
</>
  );
}

