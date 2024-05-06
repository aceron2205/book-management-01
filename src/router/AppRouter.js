import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from '../components/Header';
import AddBook from '../components/AddBooks';
import BooksList from '../components/BookList';
import useLocalStorage from '../hooks/useLocalStorage';
import EditBook from '../components/EditBook';

const AppRouter = () => {
    const [books, setBooks] = useLocalStorage('books', []);

    return (
        <BrowserRouter>
            <div>
                <Header />
                <div className='main-content'>
                    <Routes>
                        <Route path="/" element={<BooksList books={books} setBooks={setBooks} />} />
                        <Route path="/add" element={<AddBook books={books} setBooks={setBooks} />} />
                        <Route path='/edit/:id' element={<EditBook books={books} setBooks={setBooks} />} />
                        <Route element={() => <Navigate to='/' replace />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default AppRouter