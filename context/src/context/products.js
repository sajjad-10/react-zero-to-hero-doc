import { createContext } from "react";

const ProductContext = createContext({
    products: [],
    onIncrement: () => {},
    onDecrement: () => {},
    onDelete: () => {},
    onReset: () => {},
});

export default ProductContext;
