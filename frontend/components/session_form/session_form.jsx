import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            first_name: '',
            last_name: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    };

    renderErrors() {
        return(
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>{error}</li>
                ))}
            </ul>
        );
    };

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    {this.props.formType === 'sign in' ? 'Sign in below' : 'Create a new account below'}
                    <br/>
                    or {this.props.navLink}
                    {this.renderErrors()}
                    <div>
                        <label>Email
                            <br/>
                            <input type="text"
                                value={this.state.email}
                                onChange={this.update('email')}
                            />
                        </label>
                        <br/>
                        <label>Password
                            <br />
                            <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                            />
                        </label>
                        <br/>
                        <input type="submit" 
                            value={this.props.formType === 'sign in' ? 'Sign in' : 'Create new account'}
                        />
                    </div>
                </form>
            </div>
        )
    }
};

export default SessionForm;