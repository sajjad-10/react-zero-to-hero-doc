import { Component } from "react";
import ProductContext from "../../context/products";

class Navbar extends Component {
    static contextType = ProductContext;
    constructor(props) {
        super(props);
        console.log("class-->Navbar (child) //- constructor");
    }
    componentDidMount() {
        console.log("class-->Navbar (child) //- didMount");
    }
    render() {
        console.log("class-->Navbar (child) //- render");
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
        this.context.products.forEach((product) => {
            sum += product.count;
        });
        return sum;
    };
}

export default Navbar;
