import React, { useState, useEffect } from 'react';
import '../styles/booksView.css';
import DataTable from 'react-data-table-component';
import ReactDOM from "react-dom";
import { Dialog } from '@headlessui/react'

export default function BooksView() {
    let [isOpen, setIsOpen] = useState(false)
    const [books, setBooks] = useState([]);
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

    const onRowClicked = (row, event) => { onClickDetails(event, row.campo1); };



    function onClickDetails(event, rowid) {

        const datos = books.find(dato => dato.isbn == rowid)
        setFilterData(datos)
        openModal()

    }

    const onChange = async (e) => {
        const searchData = books.filter((item) => {
            if (
                item.name
                    .toString()
                    .toLowerCase()
                    .includes(e.target.value.toLowerCase())
            ) {
                return item;
            }
        });
       
        setBooks(searchData);
        
    };

    const columns = [
        {
            name: "ISBN",
            selector: row => row.campo1,
            sortable: true
        },
        {
            name:
                <div>
                    NAME <br />
                    <input type="text" onChange={onChange} style={{ width: "80%", border: "10px" }} />
                </div>,
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


    useEffect(() => {fetchBooks();}, []);

        
    return (
        <>
            <div className="container">
                <DataTable
                    id={columns.isbn}
                    onRowClicked={onRowClicked}
                    columns={columns}
                    data={data}
                />

            </div>

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

                            Titulo {filterData.name}
                        </Dialog.Title>
                        <div className="mt-2">
                            <p className="text-sm text-gray-500">
                                ISBN: {filterData.isbn} <br />
                                Author: {filterData.authors}
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
        </>
    );

}
const rootElement = document.getElementById("root");
ReactDOM.render(<BooksView />, rootElement);