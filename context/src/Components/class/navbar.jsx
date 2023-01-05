import { Component } from "react";

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <a href="#test" className="navbar-brand">
                        Navbar {this.calculateSum()}
                    </a>
                </div>
            </nav>
        );
    }
    calculateSum = () => {
        let sum = 0;
        this.props.products.forEach((product) => {
            sum += product.count;
        });
        return sum;
    };
}

export default Navbar;
