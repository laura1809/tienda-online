import CartContainer from "../components/ShoppingCart/CartContainer"
import Navbar from "../components/Navbar/Navbar"
const ShoppingCart = () => {
    return (
        <div className="w-75 mx-auto mt-2">
            <Navbar />
            <CartContainer />
        </div>
    )
}

export default ShoppingCart