import React from 'react';

class ArtsLoanIndex extends React.Component {
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
                {loans.map(loan => {
                    if (loan.type_category == "Arts") return (
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
        )
    };
}

export default ArtsLoanIndex;