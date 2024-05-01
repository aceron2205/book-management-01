import React from "react";
import BookForm from "./BookForm";
import { useNavigate, useParams } from "react-router";

const EditBook = ({ books, setBooks }) => {
    const navigate = useNavigate()
    const { id } = useParams();
    const bookToEdit = books.find((book) => book.id !== id);

    const handleOnSubmit = (book) => {
        const filteredBooks = book.filter((book) => book.id !== id);
        setBooks([book, ...filteredBooks])
        navigate('/');
    }

    return (
        <div>
            <BookForm book={bookToEdit} handleOnSubmit={handleOnSubmit} />
        </div>
    );
};

export default EditBook