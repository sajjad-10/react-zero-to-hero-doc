import React, { Component } from "react";
import Input from "../input";
class Login extends Component {
    state = {
        account: {
            email: "",
            password: "",
        },
    };
    render() {
        const { email } = this.state.account;
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <Input
                        name="email"
                        value={this.state.account.email}
                        label="email"
                        onChange="this.handleChange"
                    />
                    <Input
                        name="password"
                        value={this.state.account.password}
                        label="password"
                        onChange="this.handleChange"
                    />
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
        this.setState({ account: accountNew });
    };
}

export default Login;
