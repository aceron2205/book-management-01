//https://www.freecodecamp.org/news/react-crud-app-how-to-create-a-book-management-app-from-scratch/

import React from 'react';
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <h1>Book Management app</h1>
            <hr />
            <div className='links'>
                <NavLink to='/' className="link" activeClassName="active" exact>Book List</NavLink>
                <NavLink to="/add" className="link" activeClassName="active">Add Book</NavLink>
            </div>
        </header>
    )
};

export default Header;