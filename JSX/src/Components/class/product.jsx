import { Component } from "react";

class Product extends Component {
    count = 0;
    render() {
        const listElements = [
            <li key="1">item 1</li>,
            <li key="2">item 2</li>,
            <li key="3">item 3</li>,
        ];
        const listItems = ["item 1", "item 2", "item 3"];
        const mappedListItem = listItems.map((item, index) => (
            <li key={index}>{item}</li>
        ));
        return (
            <div>
                <span className="m-2 text-info">Product Name</span>
                <span className="m-2 badge bg-primary">{this.format()}</span>
                <button className="m-2 btn btn-sm btn-success">+</button>
                <button className="m-2 btn btn-sm btn-warning">-</button>
                <button className="m-2 btn btn-sm btn-danger">delete</button>
                <ul>{listElements}</ul>
                <ol>{mappedListItem}</ol>
            </div>
        );
    }
    format(count) {
        if (this.count === 0) {
            return "zero";
        } else {
            return this.count;
        }
    }
}

export default Product;
