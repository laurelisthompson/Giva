import React from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';

class LoanIndex extends React.Component {
    constructor(props) {
        super(props);

        this.handleAddLoan = this.handleAddLoan.bind(this);
    };

    componentDidMount() {
        this.props.fetchAllLoans();
    };

    handleAddLoan(loanId) {
        return e => {
            e.preventDefault();
            let newLendingTransaction = {userId: this.props.session.id, loanId: loanId }
            this.props.createLendingTransaction(newLendingTransaction)
        }
    }

    render() {
        const { loans, logout, lendingTransactions, currentUser} = this.props;
        // const loggedIn = Boolean(this.props.session.id);

        return currentUser && lendingTransactions && loans ? (
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
                            <button className="lend-dropbtn">Profile</button>
                            <div className="dropdown-content">
                                <Link to={'/profile'}>Profile</Link>
                                <button onClick={logout}>Sign Out</button>
                            </div>
                        </div>
                    </div>
                </nav>
                <div className="loan-page">
                    <div className="loan-headings">
                        <h1 className="index-header">Make a loan, change a life</h1>
                        <span>
                            Each Giva loan helps people build a better future for themselves and their families.
                        </span>
                    </div>
                    <div className="loan-flex">
                        {loans.map(loan => {
                            return (
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
                                        <button className="lend-btn" onClick={this.handleAddLoan(loan.id)}>Lend Now</button>
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
                            <h1 className="index-header">Make a loan, change a life</h1>
                            <span>
                                Each Giva loan helps people build a better future for themselves and their families.
                        </span>
                        </div>
                        <div className="loan-flex">
                            {loans.map(loan => {
                                return (
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
                                            <Link to={"/signin"}>
                                                <button className="lend-btn">Lend Now</button>
                                            </Link>
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

export default LoanIndex;