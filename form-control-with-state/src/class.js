import React, { Component } from "react";
import Users from "./components/class/users";
import User from "./components/user";
import Login from "./components/class/login";
import Register from "./components/class/register";
import Home from "./components/class/home";

import Navbar from "./components/navbar";
import { Route, Routes } from "react-router-dom";
import NotFound from "./notfound";
class Class extends Component {
    state = {};
    render() {
        return (
            <>
                <h3>React Class Components</h3>
                <Navbar />
                <div className="container mt-3">
                    <Routes>
                        <Route path="/users/:id" element={<User />} />
                        <Route path="/users" element={<Users />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/" exact element={<Home />} />
                        <Route path="*" element={<NotFound to="/" />} />{" "}
                        {/* redirect if noting macho*/}
                    </Routes>
                </div>
            </>
        );
    }
}

export default Class;
