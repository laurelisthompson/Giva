import React from 'react';
import { Link } from 'react-router-dom';

const Profile = ({ currentUser, logout }) => {

    const profileLink = () => (
        <div class="main-page">
            <nav class="site-nav">
                <div>
                    <div class="nav-button">
                        <Link to={'/dashboard'}>Giva</Link>
                    </div>
                    <div class="lend-dropdown">
                        <button class="lend-dropbtn">Lend</button>
                        <div class="dropdown-content">
                            <h1>Categories</h1>
                            <Link to={'/loans/women'}>Women</Link>
                            <Link to={'/loans/agriculture'}>Agriculture</Link>
                            <Link to={'/loans/education'}>Education</Link>
                            <Link to={'/loans/refugee'}>Refugee</Link>
                            <Link to={'/loans/eco'}>Eco-friendly</Link>
                            <Link to={'/loans/domestic'}>Kiva U.S.</Link>
                            <Link to={'/loans/livestock'}>Livestock</Link>
                            <Link to={'/loans/arts'}>Arts</Link>
                            <Link to={'/loans'}>View All</Link>
                        </div>
                    </div>
                </div>
                <div class="nav-button-right">
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