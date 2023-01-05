import { Component } from "react";
import Product from "./product";

class Products extends Component {
    state = {
        products: [
            { id: 1, count: 2, productName: "Laptop" },
            { id: 2, count: 5, productName: "Phone" },
            { id: 3, count: 3, productName: "AirPods" },
        ],
    };
    render() {
        return (
            <div>
                <button onClick={this.handleReset} className="btn btn-primary">
                    Reset
                </button>
                {this.state.products.map((product, index) => (
                    <Product
                        onIncrement={this.handleIncrement}
                        onDecrement={this.handleDecrement}
                        onDelete={this.handleDelete}
                        id={product.id}
                        key={index}
                        productName={product.productName}
                        count={product.count}
                    ></Product>
                ))}
            </div>
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

export default Products;
