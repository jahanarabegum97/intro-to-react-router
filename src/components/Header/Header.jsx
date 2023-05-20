import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {
    return (
        // <div>
        //     <a href="/">Home</a>
        //     <a href="/about">About</a>
        //     <a href="/contact">Contact</a>
        //     {/* <a href="/error">ErrorPage</a> */}
        // </div>

    //    <nav>
    //     <Link to="/">Home</Link>
    //     {/* <Link to="/friends">Friends</Link> */}
    //     <ActiveLink to="/friends">Friends</ActiveLink>
    //     <Link to="/posts">Posts</Link>
    //     <Link to="/about">About</Link>
    //     <Link to="/contact">Contact</Link>
    //    </nav>
    //    <nav>
    <nav>
        <ActiveLink to="/">Home</ActiveLink>
        {/* <Link to="/friends">Friends</Link> */}
        <ActiveLink to="/friends">Friends</ActiveLink>
        <ActiveLink to="/posts">Posts</ActiveLink>
        <ActiveLink to="/about">About</ActiveLink>
        <ActiveLink to="/contact">Contact</ActiveLink>
       </nav>
    );
};

export default Header;