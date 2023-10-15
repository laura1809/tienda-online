import { useCartContext } from '../../context/CartContext';
import CustomerForm from '../Invoice/CustomerForm';
import CartItem from '../ShoppingCart/CartItem'


const CartContainer = () => {
    const { cart, totalPrice, clearCart } = useCartContext();

    const [idCustomer, setIdCustomer] = useState('');
    const [nameCustomer, setNameCustomer] = useState('');

    const handleIdCustomer = () => {
        setIdCustomer(e.target.value)
    }

    const handleNameCustomer = () => {
        setNameCustomer(e.target.value)
    }

    const onBuy = () => {
        clearCart(idCustomer, nameCustomer)
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
        <>
            <div className='row'>
                <div className='col-6'>
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
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='col-6'><CustomerForm onBuy={onBuy} handleIdCustomer={handleIdCustomer} handleNameCustomer={handleNameCustomer} /></div>
            </div>
        </>
    )
}

export default CartContainer