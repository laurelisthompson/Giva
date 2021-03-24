import React from 'react';
import { Link } from 'react-router-dom';
import { CgProfile } from 'react-icons/cg';

const Dashboard = ({ currentUser, logout }) => {
    const sessionLinks = () => (
        <div className="main-page">
            <nav className="site-nav">
                <div>
                    <div>
                        <div className="nav-button">
                            <button className="giva-btn">Giva</button>
                        </div>
                        <div className="lend-dropdown">
                            <button className="lend-dropbtn">Lend</button>
                            <div className="dropdown-content">
                                <h1>Categories</h1>
                                <Link to={'/loans/women'}>Women</Link>
                                <Link to={'/loans/agriculture'}>Agriculture</Link>
                                <Link to={'/loans/education'}>Education</Link>
                                <Link to={'/loans/refugee'}>Refugee</Link>
                                <Link to={'/loans/eco'}>Eco-friendly</Link>
                                <Link to={'/loans/domestic'}>Giva U.S.</Link>
                                <Link to={'/loans/livestock'}>Livestock</Link>
                                <Link to={'/loans/arts'}>Arts</Link>
                                <Link to={'/loans'}>View All</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="about-dropdown">
                        <Link to={'/about'}>
                            <button className="about-dropbtn">
                                About
                            </button>
                        </Link>
                    </div>
                    <div className="profile-dropdown">
                        <Link to={'/profile'}>
                            <button className="lend-dropbtn">Profile</button>
                        </Link>
                        <div className="dropdown-content">
                            <Link to={'/profile'}>Profile</Link>
                            <button onClick={logout}>Sign Out</button>
                        </div>
                    </div>
                </div>
            </nav>
            <section>
                <iframe className="video-link" width="560" height="315" src="https://www.youtube.com/embed/WCraaM6PAos?autoplay=1?mute=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </section>
            <div className="impacts-section">
                <div className="impact-steps-title">
                    <h1>Three Steps to Impact</h1>
                    <span>Set your commitment once, Giva will make sure</span>
                    <span>every dollar is lent to COVID-19 impacted</span>
                    <span>individuals and businesses.</span>
                </div>
                <div className="impact-steps">
                    <div className="step">
                        <img src={choose} alt="choose-icon" />
                        <h1>Choose</h1>
                        <span>Choose a monthly amount to go</span>
                        <span>toward COVID-19 relief that works</span>
                        <span>for you.</span>
                    </div>
                    <div className="step">
                        <img src={check} alt="check-icon" />
                        <h1>Check</h1>
                        <span>Receive a monthly impact report</span>
                        <span>explaining how your money helped.</span>
                    </div>
                    <div className="step">
                        <img src={grow} alt="grow-icon" />
                        <h1>Grow</h1>
                        <span>As you get repaid, Giva will re-lend</span>
                        <span>your money and multiply</span>
                        <span>your impact.</span>
                    </div>
                </div>
            </div>
            <div className="browse-loans">
                <div>
                    <h1>Browse loans by category</h1>
                </div>
                <div className="loan-links">
                    <div className="container">
                        <Link to={'/loans/women'}>
                            <img src={women} />
                            <div>
                                <h2>Women</h2>
                            </div>
                        </Link>
                    </div>
                    <div className="container">
                        <Link to={'/loans/agriculture'}>
                            <img src={agriculture} />
                            <h2>Agriculture</h2>
                        </Link>
                    </div>
                    <div className="container">
                        <Link to={'/loans/education'}>
                            <img src={education} />
                            <h2>Education</h2>
                        </Link>
                    </div>
                    <div className="container">
                        <Link to={'/loans/refugee'}>
                            <img src={refugees} />
                            <h2>Refugees</h2>
                        </Link>
                    </div>
                    <div className="container">
                        <Link to={'/loans/eco'}>
                            <img src={ecofriendly} />
                            <h2>Eco-friendly</h2>
                        </Link>
                    </div>
                    <div className="container">
                        <Link to={'/loans/domestic'}>
                            <img src={kivadomestic} />
                            <h2>Giva U.S.</h2>
                        </Link>
                    </div>
                    <div className="container">
                        <Link to={'/loans/livestock'}>
                            <img src={livestock} />
                            <h2>Livestock</h2>
                        </Link>
                    </div>
                    <div className="container">
                        <Link to={'/loans/arts'}>
                            <img src={arts} />
                            <h2>Arts</h2>
                        </Link>
                    </div>
                    <div className="container">
                        <Link to={'/loans'}>
                            <img src={all} />
                            <h3>View All</h3>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="white-space">
            </div>
        </div>
    );

    return sessionLinks();
};

export default Dashboard;