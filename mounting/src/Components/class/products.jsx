import { Component } from "react";
import Product from "./product";
import ProductContext from "../../context/products";

class Products extends Component {
    static contextType = ProductContext;
    constructor(props) {
        super(props);
        console.log("class-->Products (child) //- constructor");
    }
    componentDidMount() {
        console.log("class-->Products (child) //- didMount");
    }
    render() {
        console.log("class-->Products (child) //- render");
        return (
            <div>
                <button
                    onClick={this.context.onReset}
                    className="btn btn-primary"
                >
                    Reset
                </button>
                {this.context.products.map((product, index) => (
                    <Product
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
