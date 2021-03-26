import React from 'react';
import { Link } from 'react-router-dom';

class LivestockLoanIndex extends React.Component {
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
            let newLendingTransaction = { userId: this.props.session.id, loanId: loanId }
            this.props.createLendingTransaction(newLendingTransaction)
        }
    }

    render() {
        const { loans, logout, lendingTransactions, currentUser } = this.props;

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
                        <p><Link to={'/loans'}>All Loans</Link> - Livestock</p>
                        <h1>Livestock</h1>
                        <span>
                            Cows, pigs and other animals have the potential to dramatically increase
                            farming incomes, but the initial cost can be a barrier. Help farmers invest
                            in their futures.
                        </span>
                    </div>
                    <div className="loan-flex">
                        {loans.map(loan => {
                            if (loan.type_category == "Livestock") return (
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
                            <p><Link to={'/loans'}>All Loans</Link> - Livestock</p>
                            <h1>Livestock</h1>
                            <span>
                                Cows, pigs and other animals have the potential to dramatically increase
                                farming incomes, but the initial cost can be a barrier. Help farmers invest
                                in their futures.</span>
                        </div>
                        <div className="loan-flex">
                            {loans.map(loan => {
                                if (loan.type_category == "Livestock") return (
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

export default LivestockLoanIndex;