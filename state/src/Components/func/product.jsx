import { useState } from "react";

function Product() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <span className="m-2 text-info">Product Name</span>
            <span className="m-2 badge bg-primary">{count}</span>
            <button
                onClick={handleIncrement}
                className="m-2 btn btn-sm btn-success"
            >
                +
            </button>
            <button
                onClick={() => {
                    handleDecrement(count, setCount);
                }}
                className="m-2 btn btn-sm btn-warning"
            >
                -
            </button>
            <button className="m-2 btn btn-sm btn-danger">delete</button>
        </div>
    );
    function handleIncrement() {
        setCount(count + 1);
    }
}
function handleDecrement(count, setCount) {
    setCount(count - 1);
}

export default Product;