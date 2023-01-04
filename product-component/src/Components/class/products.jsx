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
                {this.state.products.map((product, index) => (
                    <Product
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
}

export default Products;
