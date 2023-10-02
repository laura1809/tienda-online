import { useCartContext } from '../../context/CartContext';
const CartItem = ({ product }) => {

  const { removeProduct } = useCartContext();

  const onRemove = () =>{
    removeProduct(product.codProducto)
  }
  return (
    <tr>
      <th scope="row">{product.codProducto}</th>
      <td>{product.nombre}</td>
      <td>$ {product.precioUnitario}</td>
      <td> {product.cantidad}</td>
      <td>$ {(product.cantidad*product.precioUnitario).toFixed(2)}</td>
      <td><button type="button" className="btn btn-danger" onClick={onRemove}>Eliminar del carrito</button></td>
    </tr>
  )
}

export default CartItem