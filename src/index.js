import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import DashboardView from './components/dashboardView'
import NewBook from './components/newBook';
import BooksView  from './components/booksView';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
  <Routes>
    {/* cada componente route indica la ruta */}
    <Route path="/" element={<App />} />
    <Route path="dashboard" element={<DashboardView />} />
    <Route path="addbook" element={<NewBook />} />
    <Route path="bookview" element={<BooksView />} />
      {/* <Route path="dashboard/:uid" element={<DashboardView />} /> */}
      {/* <Route path="dashboard/profile" element={<EditProfile />} */}

  </Routes>
</BrowserRouter>
    {/* <App /> */}
  </React.StrictMode>
);
