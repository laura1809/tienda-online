import { useState } from 'react';
import { useCartContext } from '../../context/CartContext';

const ProductItem = ({ product }) => {
    const { addProduct } = useCartContext();
    const [quantity, setQuantity] = useState(0);
    
    
    const onAdd = () => {
        addProduct(product, quantity)
    }
    return (
        <>
            <tr>
                <th scope="row">{product.codProducto}</th>
                <td>{product.nombre}</td>
                <td>$ {product.precioUnitario}</td>
                <td>
                    <input type="number" id="typeNumber" className="form-control" min={1} placeholder="Cantidad" onChange={(e) =>(setQuantity(e.target.value))} />
                </td>
                <td><button type="button" class="btn btn-primary" onClick={onAdd}>Añadir al carrito</button></td>
            </tr>
        </>
    )
}

export default ProductItem