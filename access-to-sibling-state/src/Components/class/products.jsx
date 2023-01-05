import { Component } from "react";
import Product from "./product";

class Products extends Component {
    render() {
        return (
            <div>
                <button
                    onClick={this.props.onReset}
                    className="btn btn-primary"
                >
                    Reset
                </button>
                {this.props.products.map((product, index) => (
                    <Product
                        onIncrement={this.props.onIncrement}
                        onDecrement={this.props.onDecrement}
                        onDelete={this.props.onDelete}
                        id={product.id}
                        key={index}
                        productName={product.productName}
                        count={product.count}
                    ></Product>
                ))}
            </div>
        );
    }
}

export default Products;
