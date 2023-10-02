import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartProvider from "./context/CartContext";
import Store from "./pages/Store";
import ShoppingCart from "./pages/ShoppingCart";
function App() {

  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route path="/*" element={<Store />} />
          <Route path="/ShoppingCart" element={<ShoppingCart />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>

  )
}

export default App
