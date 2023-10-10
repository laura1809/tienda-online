import { useEffect, useState } from "react"
import ProductItem from "./ProductItem"
import getProducts from "../../api/uploadProducts"


const ProductList = () => {

    const [productsData, setProductsData] = useState([])
    useEffect(() => {
        const fetchData = async () => {
          try {
            
            const data = await getProducts();
            setProductsData(data);
          } catch (error) {
            console.error('Error al obtener productos:', error);
          }
        };
    
        fetchData(); // Llama a la función asincrónica dentro de useEffect
    
      }, []);
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
                        productsData.map((product,index)=>(
                            <ProductItem key={index} product={product} />
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}

export default ProductList