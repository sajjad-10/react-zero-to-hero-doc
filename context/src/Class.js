import { Component } from "react";
import Navbar from "./Components/class/navbar";
import Products from "./Components/class/products";
class Class extends Component {
    state = {
        products: [
            { id: 1, count: 2, productName: "Laptop" },
            { id: 2, count: 5, productName: "Phone" },
            { id: 3, count: 3, productName: "AirPods" },
        ],
    };
    render() {
        return (
            <>
                <h3>React Class Components</h3>
                <Navbar products={this.state.products} />
                <Products
                    products={this.state.products}
                    onDelete={this.handleDelete}
                    onIncrement={this.handleIncrement}
                    onDecrement={this.handleDecrement}
                    onReset={this.handleReset}
                />
            </>
        );
    }
    handleDelete = (productId) => {
        const newProducts = this.state.products.filter(
            (p) => p.id !== productId
        );
        this.setState({ products: newProducts });
    };

    handleIncrement = (productId) => {
        const newProducts = [...this.state.products]; // copy products
        const index = newProducts.findIndex(
            (product) => product.id === productId
        ); // find index target product
        newProducts[index].count += 1; // update value
        this.setState({ products: newProducts });
    };
    handleDecrement = (productId) => {
        const newProducts = [...this.state.products]; // copy products
        const index = newProducts.findIndex(
            (product) => product.id === productId
        ); // find index target product
        newProducts[index].count -= 1; // update value
        this.setState({ products: newProducts });
    };

    handleReset = () => {
        const newProducts = this.state.products.map((product) => {
            product.count = 0;
            return product; // create new array
        });
        this.setState({ products: newProducts });
    };
}

export default Class;
