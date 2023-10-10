import { useState } from 'react';
import { useCartContext } from '../../context/CartContext';

const ProductItem = ({ product }) => {
    const { addProduct, newProductToBodyRequest } = useCartContext();
    const [quantity, setQuantity] = useState(0);
    const { codeProduct, name, unitPrice } = product;

    const onAdd = () => {
        addProduct(product, quantity)
        newProductToBodyRequest(product.codeProduct, quantity)
    }
    return (
        <>
            <tr>
                <th scope="row">{codeProduct}</th>
                <td>{name}</td>
                <td>$ {unitPrice}</td>
                <td>
                    <input type="number" id="typeNumber" className="form-control" min={1} placeholder="Cantidad" onChange={(e) => (setQuantity(e.target.value))} />
                </td>
                <td><button type="button" class="btn btn-primary" onClick={onAdd}>Añadir al carrito</button></td>
            </tr>
        </>
    )
}

export default ProductItem