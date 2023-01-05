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
            <button onClick={handleReset} className="btn btn-primary">
                Reset
            </button>
            {products.map((product, index) => (
                <Product
                    onIncrement={handleIncrement}
                    onDecrement={handleDecrement}
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

    function handleIncrement(productId) {
        const newProducts = [...products]; // copy products
        const index = newProducts.findIndex(
            (product) => product.id === productId
        ); // find index target product
        newProducts[index].count += 1; // update value
        setProducts(newProducts);
    }
    function handleDecrement(productId) {
        const newProducts = [...products]; // copy products
        const index = newProducts.findIndex(
            (product) => product.id === productId
        ); // find index target product
        newProducts[index].count -= 1; // update value
        setProducts(newProducts);
    }

    function handleReset() {
        const newProducts = products.map((product) => {
            product.count = 0;
            return product; // create new array
        });
        setProducts(newProducts);
    }
};

export default Products;
