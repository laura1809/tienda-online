import { useState , useEffect, createContext } from "react";
import getProducts from "../api/uploadProducts";

export const DataContext = createContext();

export const DataProvider = (props) =>{
    
    const [products,setProducts] = useState([])

    useEffect(()=>{ 
        setProducts(getProducts())
    },[])

    

    return (
        <DataContext.Provider value = {products} >
            {props.children}
        </DataContext.Provider>
    )
}