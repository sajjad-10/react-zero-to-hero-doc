import React, { Component } from "react";
import Input from "../input";
import * as yup from "yup";
import axios from "axios";

class Login extends Component {
    state = {
        account: {
            email: "",
            password: "",
        },
        errors: [],
        sending : false
    };
    schema = yup.object().shape({
        email: yup
            .string()
            .email("Email format not cerated")
            .required("important"),
        password: yup.string().min(4, "add more 4 character"),
    });
    render() {
        const { email } = this.state.account;
        return (
            <>
                {this.state.errors.length !== 0 && (
                    <div className="alert alert-danger">
                        <ul>
                            {this.state.errors.map((e, i) => {
                                return <li key={i}>{e}</li>;
                            })}
                        </ul>
                    </div>
                )}
                <form onSubmit={this.handleSubmit}>
                    <Input
                        name="email"
                        value={this.state.account.email}
                        label="email"
                        onChange={this.handleChange}
                    />
                    <Input
                        name="password"
                        value={this.state.account.password}
                        label="password"
                        onChange={this.handleChange}
                    />
                    <button disabled={this.state.sending} className="btn btn-primary">Login</button>
                </form>
            </>
        );
    }
    validate = async () => {
        try {
            const result = await this.schema.validate(this.state.account, {
                abortEarly: false,
            });
            return result;
        } catch (error) {
            this.setState({ errors: error.errors });
        }
    };
    handleSubmit = async (event) => {
        event.preventDefault();
        const result = await this.validate();
        if (result) {
            try {
                this.setState({sending: true})
                const response = await axios.post(
                    `https://reqres.in/api/login/`,
                    result
                );
                console.log(response);
                this.setState({sending: false})

            } catch (error) {
                this.setState({ errors: ["Server error: email l00k like george.bluth@reqres.in"] });
                this.setState({sending: false})

            }
        }
    };
    handleChange = (event) => {
        const input = event.currentTarget;
        const accountNew = { ...this.state.account };
        accountNew[input.name] = input.value;
        this.setState({ account: accountNew });
    };
}

export default Login;
