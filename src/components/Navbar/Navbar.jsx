import { BsHouseFill } from "react-icons/bs";
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
                <div className="container-fluid">
                    <div className="text-white">
                        <BsHouseFill /> Tienda online
                    </div>
                    <div className="d-flex justify-content-center collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" to="/">Productos</Link>


                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/ShoppingCart">Carrito</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar