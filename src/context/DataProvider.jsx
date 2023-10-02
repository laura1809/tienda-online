import { useState , useEffect, createContext } from "react";
import {products} from "../data/products.json"

export const DataContext = createContext();

export const DataProvider = (props) =>{
    const [dataProducts,setDataProducts] = useState([])

    useEffect(()=>{
        setDataProducts(products)
    },[])

    

    return (
        <DataContext.Provider value = {products} >
            {props.children}
        </DataContext.Provider>
    )
}