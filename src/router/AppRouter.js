import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from '../components/Header';
import AddBook from '../components/AddBooks';
import BooksList from '../components/BookList';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <div className='main-content'>
                    <Routes>
                        <Route element={<BooksList />} path="/" />
                        <Route element={<AddBook />} path="/add" />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default AppRouter