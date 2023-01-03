import { useState } from "react";
import Product from "./product";

const Products = () => {
    const [products, setProducts] = useState([
        { id: 1, count: 2, productName: "Laptop" },
        { id: 2, count: 5, productName: "Phone" },
        { id: 3, count: 3, productName: "AirPods" },
    ]);
    return (
        <>
            {products.map((product, index) => (
                <Product
                    key={index}
                    productName={product.productName}
                    count={product.count}
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Culpa, non?
                </Product>
            ))}
        </>
    );
};

export default Products;
