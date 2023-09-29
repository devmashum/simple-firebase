import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link className='ml-5' to="/login">Login</Link>
        </div>
    );
};

export default Header;