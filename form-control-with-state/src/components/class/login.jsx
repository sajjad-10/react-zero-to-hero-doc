import React, { Component } from "react";
class Login extends Component {
    state = {};
    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email">Email:</label>
                        <input
                            id="email"
                            className="form-control"
                            type="text"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password">Password:</label>
                        <input
                            id="password"
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
}

export default Login;
