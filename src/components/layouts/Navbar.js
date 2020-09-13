import React from 'react'
// import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function Navbar({title}) {
    return (
            <nav className='navbar bg-primary'>
                <h1>
                    <i className='fab fa-github'></i>{title}
                </h1>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                </ul>
            </nav>
    );
};
Navbar.defaultProps={
    title:'Github Finder'
};
export default Navbar;