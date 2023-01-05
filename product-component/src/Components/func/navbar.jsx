import { useContext } from "react";
import ProductContext from "../../context/products";

const Navbar = () => {
    const productContext = useContext(ProductContext);

    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <a href="#test" className="navbar-brand">
                    Navbar {calculateSum()}
                </a>
            </div>
        </nav>
    );
    function calculateSum() {
        let sum = 0;
        productContext.products.forEach((product) => {
            sum += product.count;
        });
        return sum;
    }
};

export default Navbar;
