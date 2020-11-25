import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
    const sessionLinks = () => (
        <div class="main-page">
            <nav class="site-nav">
                <div>
                    <div>
                        <div class="nav-button">
                            <button class="giva-btn">Giva</button>
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
                </div>
                <div>
                    <div class="nav-button-right">
                        <button class="giva-btn">Borrow</button>
                    </div>
                    <div class="about-dropdown">
                        <button class="about-dropbtn">About</button>
                        <div class="dropdown-content">
                            <button>About Us</button>
                            <button>How Kiva Works</button>
                            <button>Where Kiva Works</button>
                            <button>Impact</button>
                            <button>Leadership</button>
                            <button>Finances</button>
                            <button>Press</button>
                            <button>Due diligence</button>
                        </div>
                    </div>
                    <div class="nav-button-right">
                        <Link class="giva-btn" to="/signin">Sign in</Link>
                    </div>
                </div>
            </nav>
            <section>
                <iframe class="video-link" width="560" height="315" src="https://www.youtube.com/embed/WCraaM6PAos?autoplay=1?mute=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </section>
            <div class="impact-steps">
                <section>
                    <h1>Three Steps to Impact</h1>
                    <p>Set your commitment once, Kiva will make sure</p>
                    <p>every dollar is lent to COVID-19 impacted</p>
                    <p>individuals and businesses.</p>
                </section>
                <section>
                    <div>
                        <img src={choose} alt="choose-icon" class="icon" />
                        <h1>Choose</h1>
                        <p>Choose a monthly amount to go</p>
                        <p>toward COVID-19 relief that works</p>
                        <p>for you.</p>
                    </div>
                    <div>
                        <img src={check} alt="check-icon" class="icon" />
                        <h1>Check</h1>
                        <p>Receive a monthly impact report</p>
                        <p>explaining how your money helped.</p>
                    </div>
                    <div>
                        <img src={grow} alt="grow-icon" class="icon" />
                        <h1>Grow</h1>
                        <p>As you get repaid, Kiva will re-lend</p>
                        <p>your money and multiply</p>
                        <p>your impact.</p>
                    </div>
                </section>
                {/* <img src={dotted-background} alt="dots" class="dots" /> */}
            </div>
            <div class="why-kiva">
            </div>
            <div>
                <div><Link to={'/loans/women'}>Women</Link></div>
                <div><Link to={'/loans/agriculture'}>Agriculture</Link></div>
                <div><Link to={'/loans/education'}>Education</Link></div>
                <div><Link to={'/loans/refugee'}>Refugee</Link></div>
                <div><Link to={'/loans/eco'}>Eco-friendly</Link></div>
                <div><Link to={'/loans/domestic'}>Kiva U.S.</Link></div>
                <div><Link to={'/loans/livestock'}>Livestock</Link></div>
                <div><Link to={'/loans/arts'}>Arts</Link></div>
                <div><Link to={'/loans'}>View All</Link></div>
            </div>
        </div>
    );

    return sessionLinks();
};

export default Greeting;