import { useCartContext } from '../../context/CartContext';
const CartItem = ({ product }) => {

  const { removeProduct } = useCartContext();
  const { codeProduct, name, unitPrice, quantitySold } = product;
  const onRemove = () =>{
    removeProduct(codeProduct)
  }
  return (
    <tr>
      <th scope="row">{codeProduct}</th>
      <td>{name}</td>
      <td>$ {unitPrice}</td>
      <td> {quantitySold}</td>
      <td>$ {(quantitySold*unitPrice).toFixed(2)}</td>
      <td><button type="button" className="btn btn-danger" onClick={onRemove}>Eliminar del carrito</button></td>
    </tr>
  )
}

export default CartItem