import { Component } from "react";
import Product from "./product";

class Products extends Component {
    state = {};
    render() {
        return (
            <div>
                <Product productName="Laptop" />
                <Product productName="Phone" />
                <Product productName="AirPods" />
            </div>
        );
    }
}

export default Products;
