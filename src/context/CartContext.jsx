import React, { useState, useContext } from 'react'
import confirmSale from '../api/confirmSale'
import Swal from 'sweetalert2'
const CartContext = React.createContext([])
export const useCartContext = () => useContext(CartContext)

const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])
    const [requestBody, setRequestBody] = useState([]);

    const addProduct = (item, quantitySold) => {
        if (isInCart(item.codeProduct)) {
            Swal.fire({
                icon: 'info',
                title: 'Ya agregaste este producto a tu carrito',
                text: '¡Puedes mirar más opciones!',
            });
        }

        setCart([...cart, { ...item, quantitySold: quantitySold }]);
        Swal.fire({
            icon: 'success',
            title: 'Producto agregado a tu carrito',
            text: '¡Sigue comprando!',

        });
    }


    const newProductToBodyRequest = (codeProduct, quantitySold) => {
        const newProduct = {
            "codeProduct": codeProduct,
            "quantitySold": quantitySold
        }

        setRequestBody(prevState => [...prevState, newProduct]);
    }

    const clearCart = () => {
        Swal.fire({
            title: '¿Estás seguro de realizar la compra?',
            showDenyButton: true,
            confirmButtonText: 'Si, comprar',
            denyButtonText: `Cancelar`,
        }).then((result) => {
            if (result.isConfirmed) {
                fetchPostSale()
                Swal.fire('¡Compra realizada!', '', 'success')
                setCart([])
            }
        })

    }

    const fetchPostSale= async () => {
        try { 
          const data = await confirmSale(1007,'Andres',totalPrice,requestBody);
        } catch (error) {
          console.error( error);
        }
      };
    const isInCart = (id) => {
        return cart.find(product => product.codeProduct === id) ? true : false
    }

    const removeProduct = (id) => {

        Swal.fire({
            icon: 'info',
            title: 'Producto removido de tu carrito',
            text: '¡Puedes mirar más opciones!',
        });
        setCart(cart.filter(product => product.codeProduct !== id))

    }


    const totalPrice = cart.reduce((pre, act) => pre + act.unitPrice * act.quantitySold, 0).toFixed(2);



    let totalProducts = cart.length

    return (
        <CartContext.Provider value={{
            clearCart,
            isInCart,
            removeProduct,
            addProduct,
            newProductToBodyRequest,
            requestBody,
            totalPrice,
            totalProducts,
            cart
        }}>
            {children}
        </ CartContext.Provider>
    )

}
export default CartProvider;