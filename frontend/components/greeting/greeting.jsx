import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
    const sessionLinks = () => (
        <nav>
            <Link to="/login">Sign in</Link>
            &nbsp;
            <Link to="/signup">Sign up</Link>
        </nav>
    );

    const profileLink = () => (
        <nav>
            <Link to="/profile">Profile</Link>
        </nav>
    );

    return currentUser ? profileLink() : sessionLinks();
};

export default Greeting;