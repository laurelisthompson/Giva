import React from 'react';
import { Link } from 'react-router-dom';

class AboutContainer extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        const loggedIn = Boolean(this.props.session.id);

        return loggedIn ? (
            <div>
                <nav className="site-nav">
                    <div>
                        <div>
                            <div className="lend-dropdown">
                                <Link to={"/dashboard"}>
                                    <button className="lend-dropbtn" type="button">
                                        Giva
                                    </button>
                                </Link>
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
                <nav className="profile-nav">
                    <div className="profile-upper-tabs">
                        <button className="selected-button">About Giva</button>
                        <a href="https://laurelisthompson.github.io/" target="_blank">Portfolio</a>
                        <a href="https://github.com/laurelisthompson" target="_blank">GitHub</a>
                        <a href="https://www.linkedin.com/in/laurelisthompson/" target="_blank">LinkedIn</a>
                        <a href="https://angel.co/u/laurelisthompson" target="_blank">AngelList</a>
                    </div>
                </nav>
                <div className="about-image">
                    <img src={window.aboutGiva} alt="about giva background" />
                </div>
                <div className="about-text">
                    <p>Giva is a single page web app clone of the loan website <a href="https://www.kiva.org/" target="_blank">Kiva</a>, and was created by <a href="https://laurelisthompson.github.io/" target="_blank">Lauren Thompson</a>.</p>
                    <p>Giva was built with a Ruby on Rails backend and a React/Redux frontend.</p>
                </div>
            </div>
        ) : (
                <div>
                    <nav className="site-nav">
                        <div>
                            <div>
                                <div className="lend-dropdown">
                                    <Link to={"/dashboard"}>
                                        <button className="lend-dropbtn" type="button">
                                            Giva
                                    </button>
                                    </Link>
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
                            <div className="nav-button-right">
                                <Link to={"/signin"}>
                                    <button className="giva-btn" type="button">
                                        Sign in
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </nav>
                    <nav className="profile-nav">
                        <div className="profile-upper-tabs">
                            <button className="selected-button">About Giva</button>
                            <a href="https://laurelisthompson.github.io/" target="_blank">Portfolio</a>
                            <a href="https://github.com/laurelisthompson" target="_blank">GitHub</a>
                            <a href="https://www.linkedin.com/in/laurelisthompson/" target="_blank">LinkedIn</a>
                            <a href="https://angel.co/u/laurelisthompson" target="_blank">AngelList</a>
                        </div>
                    </nav>
                    <div className="about-image">
                        <img src={window.aboutGiva} alt="about giva background" />
                    </div>
                    <div className="about-text">
                        <p>Giva is a single page web app clone of the loan website <a href="https://www.kiva.org/" target="_blank">Kiva</a>, and was created by <a href="https://laurelisthompson.github.io/" target="_blank">Lauren Thompson</a>.</p>
                        <p>Giva was built with a Ruby on Rails backend and a React/Redux frontend.</p>
                    </div>
                </div>
            );
    };

}

export default AboutContainer;