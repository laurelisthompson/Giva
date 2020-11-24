import React from 'react';
import { Link } from 'react-router-dom';

class EducationLoanIndex extends React.Component {
    constructor(props) {
        super(props);
    };

    componentDidMount() {
        this.props.fetchAllLoans()
    };

    render() {
        const { loans } = this.props;
        return (
            <div>
                <nav class="site-nav">
                    <div>
                        <div>
                            <Link class="header-button" to="/dashboard">Giva</Link>
                        </div>
                        <div>
                            <button class="lend-button">Lend</button>
                        </div>
                    </div>
                    <div>
                        <button>About</button>
                        <Link to="/profile">Profile</Link>
                    </div>
                </nav>
                <div>
                    <p><Link to={'/loans'}>All Loans</Link> > Education</p>
                    <h1>Education</h1>
                    <p>
                        Help underprivileged and marginalized students attend vocational school, 
                        university or other higher education institutions and give them a chance 
                        to reach their full potential. The economic returns for higher education 
                        graduates are a 17% increase in earnings.
                    </p>
                </div>
                <div>
                    {loans.map(loan => {
                        if (loan.type_category == "Education") return (
                            <div>
                                <img src={loan.thumbnailUrl} />
                                <div>
                                    <h1>{loan.loan_name}</h1>
                                    <p>{loan.location}</p>
                                    <p>{loan.loan_description}</p>
                                    <p>{loan.total_amount}</p>
                                    <button>$25</button>
                                    <button>Lend Now</button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    };
}

export default EducationLoanIndex;