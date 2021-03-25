import React from 'react';
import { Link } from 'react-router-dom';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        // this.props.logout();
        this.buildLenderData = this.buildLenderData.bind(this);
        this.state = {
            loading: true,
            loanMessage: "Loading..."
        }
    }

    componentDidMount() {
        this.props.fetchAllLendingTransactions();
        this.props.fetchAllLoans();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.lenders.length !== this.props.lenders.length) {
            this.setState({loading: false})
        } else {
            if (!this.props.lenders.length && this.state.loading) {
                this.setState({loanMessage: "You do not have any loans. Go loan to some of your favorite characters and help them accomplish their missions!", loading: false})
            }
        }
    }

    buildLenderData(loan) {
        return (
            <div className="profile-loans">
                <div className="profile-loan-img">
                    <img src={loan.thumbnailUrl} />
                </div>
                <h1>{loan.loan_name}</h1>
                <p className="profile-loan-loc">{loan.location}</p>
                <p className="profile-loan-des">{loan.loan_description}</p>
            </div>
        )
    }

    render() {
        const { loans, logout, lenders, currentUser } = this.props;
        
        return (
        <div>
            <nav className="site-nav">
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
                <div>
                    <div className="about-dropdown">
                        <Link to={'/about'}>
                            <button className="about-dropbtn">
                                About
                            </button>
                        </Link>
                    </div>
                    <div className="profile-dropdown">
                        <button onClick={logout} className="lend-dropbtn">Sign Out</button>
                    </div>
                </div>
            </nav>
            <nav className="profile-nav">
                <div className="profile-upper-tabs">
                    <button className="selected-button">Profile</button>
                </div>
            </nav>
            <div>
                <h1 className="profile-title">Recent loans</h1>
            </div>
            <div className="profile-loan-flex">
                {
                !this.props.lenders.length ? <p className="profile-message">{this.state.loanMessage}</p> : 
                loans.map(this.buildLenderData)
                }
            </div>
        </div>
        )
    }
}

export default Profile;