import React, { Component } from "react";
class Login extends Component {
    state = {
        account: {
            email: "",
            password: "",
        },
    };
    render() {
        const {email} = this.state.account
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email">Email:</label>
                        <input
                            onChange={this.handleChange}
                            value={email}
                            id="email"
                            name="email"
                            className="form-control"
                            type="text"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password">Password:</label>
                        <input
                            onChange={this.handleChange}
                            value={this.state.account.password}
                            id="password"
                            name="password"
                            className="form-control"
                            type="text"
                        />
                    </div>
                    <button className="btn btn-primary">Login</button>
                </form>
            </>
        );
    }
    handleSubmit = (event) => {
        event.preventDefault();
        console.log("Submit");
    };
    handleChange = (event) => {
        const input = event.currentTarget;
        const accountNew = { ...this.state.account };
        accountNew[input.name] = input.value;
        this.setState({account : accountNew})
    };
}

export default Login;
