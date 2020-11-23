import React from 'react';
import { Link } from 'react-router-dom';

const Profile = ({ currentUser, logout }) => {

    const profileLink = () => (
        <div class="main-page">
            <nav class="site-nav">
                <div>
                    <button class="header-button">Giva</button>
                    <button class="header-button">Lend</button>
                </div>
                <div>
                    <button class="header-button">Borrow</button>
                    <button class="header-button">About</button>
                    <button onClick={logout}>Log Out</button>
                </div>
            </nav>
            <div>
                <h1>Welcome to your profile</h1>
            </div>
        </div>
    );


    return profileLink();
};

export default Profile;