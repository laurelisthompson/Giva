import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
    const sessionLinks = () => (
        <nav>
            <Link to="/signin">Sign in</Link>
        </nav>
    );

    const profileLink = () => (
        <nav>
            <Link to={`/users/${currentUser.id}`}>Profile</Link>
            <button onClick={logout}>Log Out</button>
        </nav>
    );

    return currentUser ? profileLink() : sessionLinks();
};

export default Greeting;