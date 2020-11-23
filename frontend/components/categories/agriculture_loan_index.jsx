import React from 'react';

class AgricultureLoanIndex extends React.Component {
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
                <div>
                {loans.map(loan => {
                    if (loan.type_category == "Agriculture") return (
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

export default AgricultureLoanIndex;