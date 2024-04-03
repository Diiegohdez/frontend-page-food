import { createContext, useContext, useState, useEffect } from "react";
import { getProductsRequest } from "../api/Product";


const ProductContext = createContext();

export const useProduct = () => {
    const context = useContext(ProductContext);

    if(!context) {
        throw new error("el useProduct deberia de estar en el provider")
    }
    return context;
}

export const ProductProvider = ({ children }) => {
    const [product, setProduct] = useState([]);

    const getProduct = async () => {
        try {
            const res = await getProductsRequest();
            setProduct(res.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getProduct();
    }, [])


    
    return (
        <ProductContext.Provider value={{ product, getProduct }}>
            {children}
        </ProductContext.Provider>
    )
}

