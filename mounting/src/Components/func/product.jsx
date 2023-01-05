import { useContext, useEffect } from "react";
import ProductContext from "../../context/products";
const Product = ({ productName, count: propCount, id }) => {
    const productContext = useContext(ProductContext);
    useEffect(() => {
        return () => {
            console.log("fun-->Product (child) ///- willUnmount");
        };
    }, []);
    return (
        <div>
            <span className="m-2 text-info">{productName}</span>
            <span className="m-2 badge bg-primary">{format()}</span>
            <button
                onClick={handleIncrement}
                className="m-2 btn btn-sm btn-success"
            >
                +
            </button>
            <button
                onClick={handleDecrement}
                className="m-2 btn btn-sm btn-warning"
            >
                -
            </button>
            <button
                onClick={handleDelete}
                className="m-2 btn btn-sm btn-danger"
            >
                delete
            </button>
        </div>
    );
    function handleIncrement() {
        productContext.onIncrement(id);
    }
    function handleDecrement() {
        productContext.onDecrement(id);
    }
    function handleDelete() {
        productContext.onDelete(id);
    }
    function format() {
        if (propCount === 0) {
            return "zero";
        } else {
            return propCount;
        }
    }
};

export default Product;
