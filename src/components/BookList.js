//https://www.freecodecamp.org/news/react-crud-app-how-to-create-a-book-management-app-from-scratch/

import React from "react";
import _ from 'lodash';
import Book from "./Book";

const BooksList = ({ books, setBook }) => {

    const handleRemoveBook = (id) => {
        setBook(books.filter((book) => book.id !== id));
    };

    return (
        <React.Fragment>
            <div className="book-list">
                {!_.isEmpty(books) ? (books.map((book) => (<Book key={book.id} {...book} handleRemoveBook={handleRemoveBook} />))
                ) : (
                    <p className="message">No books available. Please add some books.</p>
                )}
            </div>
        </React.Fragment>
    )
}



export default BooksList