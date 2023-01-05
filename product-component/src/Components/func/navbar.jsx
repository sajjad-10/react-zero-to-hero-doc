const Navbar = ({ products }) => {
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
        products.forEach((product) => {
            sum += product.count;
        });
        return sum;
    }
};

export default Navbar;
