import Product from "./product";

const Products = ({
    products,
    onDelete,
    onIncrement,
    onDecrement,
    onReset,
}) => {

    return (
        <>
            <button onClick={onReset} className="btn btn-primary">
                Reset
            </button>
            {products.map((product, index) => (
                <Product
                    onIncrement={onIncrement}
                    onDecrement={onDecrement}
                    onDelete={onDelete}
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
