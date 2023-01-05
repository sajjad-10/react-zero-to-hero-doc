import { useState, useEffect } from "react";
import Navbar from "./Components/func/navbar";
import Products from "./Components/func/products";
import ProductContext from "./context/products";

function Functional() {
    const [products, setProducts] = useState([
        { id: 1, count: 2, productName: "Laptop" },
        { id: 2, count: 5, productName: "Phone" },
        { id: 3, count: 3, productName: "AirPods" },
    ]);
    useEffect(() => {
        console.log("fun-->Class (APP) /- didMount & didUpdate");
    });
    useEffect(() => {
        console.log("fun-->Class (APP) /- didMount");
    }, []);
    return (
        <>
            <ProductContext.Provider
                value={{
                    products: products,
                    onDelete: handleDelete,
                    onIncrement: handleIncrement,
                    onDecrement: handleDecrement,
                    onReset: handleReset,
                }}
            >
                <h3>React Functional Components</h3>
                <Navbar />
                <Products />
            </ProductContext.Provider>
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
}

export default Functional;
