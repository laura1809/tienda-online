import  Navbar  from "../components/Navbar/Navbar"
import  ProductList  from "../components/Products/ProductList"
const Store = () => {
    return (
        <div className="w-75 mx-auto mt-2">
            <Navbar />
            <ProductList />
        </div>
    )
}

export default Store