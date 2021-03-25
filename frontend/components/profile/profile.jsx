import React from 'react';
import { Link } from 'react-router-dom';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        // this.props.logout();
    }

    componentDidMount() {
        this.props.fetchAllLendingTransactions();
        this.props.fetchAllLoans();
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
                            </div>
                        )
                    })}
                </div>
                {/* <div className="loan-flex">
                    {lenders.map(transaction => {
                        let trId = transaction.loanId;
                        if (transaction.userId == currentUser.id) return (
                            <div className="loans">
                                <div className="loan-img">
                                    <img src={loans.trId.thumbnailUrl} />
                                </div>
                                <h1>{loans.trId.loan_name}</h1>
                                <p className="loan-loc">{loans.trId.location}</p>
                                <p className="loan-des">{loans.trId.loan_description}</p>
                            </div>
                        )
                    })}
                </div> */}
        </div>
        )
    }
}

// const Profile = ({ currentUser, logout }) => {

//     const profileLink = () => (
//         <div>
//             <nav class="site-nav">
//                 <div>
//                     <div class="lend-dropdown">
//                         <Link to={"/dashboard"}>
//                             <button class="lend-dropbtn" type="button">
//                                 Giva
//                             </button>
//                         </Link>
//                     </div>
//                     <div class="lend-dropdown">
//                         <button class="lend-dropbtn">Lend</button>
//                         <div class="dropdown-content">
//                             <h1>Categories</h1>
//                             <Link to={'/loans/women'}>Women</Link>
//                             <Link to={'/loans/agriculture'}>Agriculture</Link>
//                             <Link to={'/loans/education'}>Education</Link>
//                             <Link to={'/loans/refugee'}>Refugee</Link>
//                             <Link to={'/loans/eco'}>Eco-friendly</Link>
//                             <Link to={'/loans/domestic'}>Giva U.S.</Link>
//                             <Link to={'/loans/livestock'}>Livestock</Link>
//                             <Link to={'/loans/arts'}>Arts</Link>
//                             <Link to={'/loans'}>View All</Link>
//                         </div>
//                     </div>
//                 </div>
//                 <div>
//                     <div class="about-dropdown">
//                         <Link to={'/about'}>
//                             <button class="about-dropbtn">
//                                 About
//                             </button>
//                         </Link>
//                     </div>
//                     <div class="profile-dropdown">
//                         <button onClick={logout} class="lend-dropbtn">Sign Out</button>
//                     </div>
//                 </div>
//             </nav>
//             <nav class="profile-nav">
//                 <div class="profile-upper-tabs">
//                     <button class="selected-button">Profile</button>
//                 </div>
//             </nav>
//             <div>
//                 <h1 className="profile-title">Recent loans</h1>
//             </div>
//         </div>
//     );


//     return profileLink();
// };

export default Profile;