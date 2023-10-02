import React, { useState, useContext } from 'react'
import Swal from 'sweetalert2'
const CartContext = React.createContext([])
export const useCartContext = () => useContext(CartContext)

const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])


    const addProduct = (item, cantidad) => {
        if (isInCart(item.codProducto)) {
            Swal.fire({
                icon: 'info',
                title: 'Ya agregaste este producto a tu carrito',
                text: '¡Puedes mirar más opciones!',
            });
        }


        setCart([...cart, { ...item, cantidad }]);
        Swal.fire({
            icon: 'success',
            title: 'Producto agregado a tu carrito',
            text: '¡Sigue comprando!',

        });

        
    }



const clearCart = () => {
    Swal.fire({
        title: '¿Estás seguro de realizar la compra?',
        showDenyButton: true,
        confirmButtonText: 'Si, comprar',
        denyButtonText: `Cancelar`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire('¡Compra realizada!', '', 'success')
          setCart([])
        } 
      })
    
}

const isInCart = (id) => {
    return cart.find(product => product.codProducto === id) ? true : false
}

const removeProduct = (id) => {
    
    Swal.fire({
        icon: 'info',
        title: 'Producto removido de tu carrito',
        text: '¡Puedes mirar más opciones!',
    });
    setCart(cart.filter(product => product.codProducto !== id))
    
}


const totalPrice = cart.reduce((pre, act) => pre + act.precioUnitario * act.cantidad, 0).toFixed(2);



let totalProducts = cart.length

return (
    <CartContext.Provider value={{
        clearCart,
        isInCart,
        removeProduct,
        addProduct,
        totalPrice,
        totalProducts,
        cart
    }}>
        {children}
    </ CartContext.Provider>
)

}
export default CartProvider;