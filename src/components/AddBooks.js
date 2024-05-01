//https://www.freecodecamp.org/news/react-crud-app-how-to-create-a-book-management-app-from-scratch/

import React from "react";
import { useNavigate } from "react-router";
import BookForm from './BookForm';

const AddBook = ({ books, setBooks }) => {
    const navigate = useNavigate();

    const handleOnSubmit = (book) => {
        setBooks([book, ...books]);
        navigate('/')
    }


    return (
        <React.Fragment>
            <BookForm handleOnSubmit={handleOnSubmit} />
        </React.Fragment>
    )
};

export default AddBook