import React, { Component } from "react";
import axios from "axios";
import LoadingUsers from "../loading/loadingUsers";

class Users extends Component {
    state = {
        users: [], // on start is empty
        isLoading: true,
    };
    async componentDidMount() {
        const response = await axios.get("https://reqres.in/api/users/");
        setTimeout(() => {
            this.setState({ users: response.data.data, isLoading: false });
        }, 3000);
    }
    render() {
        return (
            <>
                <button
                    onClick={this.handleCreate}
                    className="btn btn-lg btn-primary"
                >
                    Create
                </button>
                <div className="row">
                    {this.state.isLoading ? (
                        <LoadingUsers />
                    ) : (
                        this.state.users.map((user, index) => {
                            return (
                                <div
                                    key={index}
                                    className="col-4 text-center p-5"
                                >
                                    <img
                                        src={user.avatar}
                                        style={{
                                            borderRadius: "50%",
                                            width: "100px",
                                        }}
                                        alt={user.first_name}
                                    />
                                    <h4>
                                        {user.first_name} {user.last_name}
                                    </h4>
                                    <h5>{user.email}</h5>
                                    <div className="row">
                                        <div className="col-6">
                                            <button
                                                onClick={() => {
                                                    this.handleUpdate(user);
                                                }}
                                                className="btn btn-info btn-sm"
                                            >
                                                Update
                                            </button>
                                        </div>
                                        <div className="col-6">
                                            <button
                                                onClick={() => {
                                                    this.handleDelete(user);
                                                }}
                                                className="btn btn-danger btn-sm"
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    )}
                </div>
            </>
        );
    }
    handleCreate = async () => {
        const newUser = {
            first_name: "Sajjad",
            last_name: "Fallahi",
            email: "test@gmail.com",
            avatar: "https://images.unsplash.com/photo-1670525975578-4051a7803c38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3088&q=80",
        };

        const response = await axios.post(
            "https://reqres.in/api/users/",
            newUser
        );
        this.setState({ users: [...this.state.users, newUser] });
    };
    handleUpdate = async (user) => {
        user.first_name = "Updated";
        const response = await axios.put(
            `https://reqres.in/api/users/${user.id}`
        );
        console.log(response);
        const updatedUsers = [...this.state.users];
        const index = updatedUsers.indexOf(user);
        updatedUsers[index] = { ...user };
        this.setState({ users: updatedUsers });
    };
    handleDelete = async (user) => {
        const response = await axios.delete(
            `https://reqres.in/api/users/${user.id}`
        );
        const newUser = this.state.users.filter((us) => us.id !== user.id);
        this.setState({ users: newUser });
    };
}

export default Users;
