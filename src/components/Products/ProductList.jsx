import ProductItem from "./ProductItem"
import {products} from "../../data/products.json"

const ProductList = () => {
    return (
        <>
            <table className="table table-striped mt-2 border">
                <thead className="thead-dark" >
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">NOMBRE</th>
                        <th scope="col">PRECIO UNITARIO (USD)</th>
                        <th scope="col">CANTIDAD</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((product,index)=>(
                            <ProductItem key={index} product={product} />
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}

export default ProductList