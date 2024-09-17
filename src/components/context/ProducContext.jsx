import { createContext, useState } from "react"

const ProducContext = createContext({
    product: "",
    setProduct: () => { }
})

const ProductProvider = ({ children }) => {
    const [product, setProduct] = useState("")

    return (
        <ProducContext.Provider value={{ product, setProduct }}>
            {children}
        </ProducContext.Provider>
    )
}

export { ProducContext, ProductProvider }
