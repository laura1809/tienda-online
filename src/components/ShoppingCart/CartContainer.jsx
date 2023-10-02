import { useCartContext } from '../../context/CartContext';
import CartItem from '../ShoppingCart/CartItem'
const CartContainer = () => {
    const { cart, totalPrice, clearCart } = useCartContext();

    const onBuy = () => {
        clearCart()
    }
    if (cart.length === 0) {
        return (
            <>
                <div className="m-0 row justify-content-center d-flex">
                    <p>No has agregado ningún producto a tu carrito.</p>
                </div>
            </>
        )
    }
    return (
        <table className="table table-striped mt-2 border">
            <thead className="thead-dark" >
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">NOMBRE</th>
                    <th scope="col">PRECIO UNITARIO (USD)</th>
                    <th scope="col">CANTIDAD</th>
                    <th scope="col">TOTAL</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                {
                    cart.map((product, index) => (
                        <CartItem key={index} product={product} />
                    ))
                }
                <tr>
                    <th scope="row"></th>
                    <td></td>
                    <td></td>
                    <td>Total</td>
                    <td>$ {totalPrice}</td>
                    <td><button type="button" className="btn btn-success" onClick={onBuy}>Realizar compra</button></td>
                </tr>
            </tbody>
        </table>
    )
}

export default CartContainer