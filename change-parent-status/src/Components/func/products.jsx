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
                    onDelete={handleDelete}
                    id={product.id}
                    key={index}
                    productName={product.productName}
                    count={product.count}
                ></Product>
            ))}
        </>
    );
    function handleDelete(productId) {
        const newProducts = products.filter((p) => p.id !== productId);
        setProducts(newProducts);
    }
};

export default Products;
