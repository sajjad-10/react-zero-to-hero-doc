import React, { Component } from "react";
import Users from "./components/class/users";
import Login from "./components/class/login";
import Register from "./components/class/register";
import Home from "./components/class/home";

import Navbar from "./components/navbar";
import { Route, Routes } from "react-router-dom";
class Class extends Component {
    state = {};
    render() {
        return (
            <>
                <h3>React Class Components</h3>
                <Navbar />
                <div className="container mt-3">
                    <Routes>
                        <Route path="/users" element={<Users/>} />
                        <Route path="/login" element={<Login/>} />
                        <Route path="/register" element={<Register/>} />
                        <Route path="/" element={<Home/>} />
                    </Routes>
                </div>
            </>
        );
    }
}

export default Class;
