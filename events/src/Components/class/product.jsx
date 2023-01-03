import { Component } from "react";

class Product extends Component {
    state = {};
    render() {
        return (
            <div>
                <span className="m-2 text-info">Product Name</span>
                <span className="m-2 badge bg-primary">2</span>
                <button
                    onClick={this.handleIncrement.bind(this)}
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
                <button
                    onClick={() => {
                        this.handleDelete("Delete");
                    }}
                    className="m-2 btn btn-sm btn-danger"
                >
                    delete
                </button>
            </div>
        );
    }
    handleIncrement() {
        console.log("handleIncrement", this);
    }
    handleDecrement = () => {
        console.log("handleDecrement", this);
    };
    handleDelete(text) {
        console.log("handleDelete", text);
    }
}

export default Product;
