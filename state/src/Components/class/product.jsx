import { Component } from "react";

class Product extends Component {
    state = {
        count: 2,
        product: "Laptop",
    };
    render() {
        return (
            <div>
                <span className="m-2 text-info">{this.state.product}</span>
                <span className="m-2 badge bg-primary">{this.format()}</span>
                <button
                    onClick={this.handleIncrement}
                    className="m-2 btn btn-sm btn-success"
                >
                    +
                </button>
                <button
                    onClick={this.handleDecrement}
                    className="m-2 btn btn-sm btn-warning"
                >
                    -
                </button>
                <button className="m-2 btn btn-sm btn-danger">delete</button>
            </div>
        );
    }
    handleIncrement = () => {
        // this.setState({ count: this.state.count + 1 }); this is slow

        const count = this.state.count;
        this.setState({ count: count + 1 });
    };
    handleDecrement = () => {
        const { count } = this.state;
        this.setState({ count: count - 1 });
    };
    format() {
        if (this.state.count === 0) {
            return "zero";
        } else {
            return this.state.count;
        }
    }
}

export default Product;
