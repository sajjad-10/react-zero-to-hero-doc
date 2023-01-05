import { useContext } from "react";
import ProductContext from "../../context/products";
import Product from "./product";

const Products = (props) => {
    const productContext = useContext(ProductContext);
    return (
        <>
            <button
                onClick={productContext.onReset}
                className="btn btn-primary"
            >
                Reset
            </button>
            {productContext.products.map((product, index) => (
                <Product
                    id={product.id}
                    key={index}
                    productName={product.productName}
                    count={product.count}
                ></Product>
            ))}
        </>
    );
};

export default Products;
