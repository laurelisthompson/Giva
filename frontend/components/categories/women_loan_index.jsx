import React from 'react';
import { Link } from 'react-router-dom';

class WomenLoanIndex extends React.Component {
    constructor(props) {
        super(props);
    };

    componentDidMount() {
        this.props.fetchAllLoans()
    };

    render() {
        const { loans, logout } = this.props;
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
                                <button className="about-dropbtn">About</button>
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
                <div className="loan-page">
                    <div className="loan-headings">
                        <p><Link to={'/loans'}>All Loans</Link> - Women</p>
                        <h1>Women</h1>
                        <span>
                            Worldwide, women have much less economic opportunity, security, and freedom.
                            Support women starting their own businesses, going to school, and investing
                            in the health of their communities and families.
                        </span>
                    </div>
                    <div className="loan-flex">
                        {loans.map(loan => {
                            if (loan.type_category == "Women") return (
                                <div className="loans">
                                    <div className="loan-img">
                                        <img src={loan.thumbnailUrl} />
                                    </div>
                                    <h1>{loan.loan_name}</h1>
                                    <p className="loan-loc">{loan.location}</p>
                                    <p className="loan-des">{loan.loan_description}</p>
                                    <div className="progress-container">
                                        <div className="current-progress"></div>
                                    </div>
                                    <p className="loan-amt">${loan.total_amount}</p>
                                    <div className="btn">
                                        <button className="price-btn">$25</button>
                                        <button className="lend-btn">Lend Now</button>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
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
                                    <button className="about-dropbtn">About</button>
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
                    <div className="loan-page">
                        <div className="loan-headings">
                            <p><Link to={'/loans'}>All Loans</Link> - Women</p>
                            <h1>Women</h1>
                            <span>
                                Worldwide, women have much less economic opportunity, security, and freedom.
                                Support women starting their own businesses, going to school, and investing
                                in the health of their communities and families.</span>
                        </div>
                        <div className="loan-flex">
                            {loans.map(loan => {
                                if (loan.type_category == "Women") return (
                                    <div className="loans">
                                        <div className="loan-img">
                                            <img src={loan.thumbnailUrl} />
                                        </div>
                                        <h1>{loan.loan_name}</h1>
                                        <p className="loan-loc">{loan.location}</p>
                                        <p className="loan-des">{loan.loan_description}</p>
                                        <div className="progress-container">
                                            <div className="current-progress"></div>
                                        </div>
                                        <p className="loan-amt">${loan.total_amount}</p>
                                        <div className="btn">
                                            <button className="price-btn">$25</button>
                                            <button className="lend-btn">Lend Now</button>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
        );
    };
}

export default WomenLoanIndex;