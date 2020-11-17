import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
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

    handleSubmit() {
        this.props.action(this.state);
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    Sign in below
                    <br/>
                    or {this.props.navLink}
                    {this.renderErrors()}
                    <div>
                        
                        <label>Username
                            <br/>
                            <input type="text"
                                value={this.state.username}
                                onChange={this.update('username')}
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