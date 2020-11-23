import React from 'react';
import { Link } from 'react-router-dom';

const Profile = ({ currentUser, logout }) => {

    const profileLink = () => (
        <div class="main-page">
            <nav class="site-nav">
                <div>
                    <Link class="header-button" to="/dashboard">Giva</Link>
                    <button class="header-button">Lend</button>
                </div>
                <div>
                    <button onClick={logout}>Log Out</button>
                </div>
            </nav>
            <nav class="profile-nav">
                <div>
                    <button class="header-button">Profile</button>
                    <button class="header-button">My teams</button>
                    <button class="header-button">Messages</button>
                    <button class="header-button">Settings</button>
                </div>
            </nav>
            <div>
                <h1>Portfolio</h1>
            </div>
        </div>
    );


    return profileLink();
};

export default Profile;