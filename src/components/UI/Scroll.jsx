import InfiniteScroll from "react-infinite-scroll-component"
import { ProducContext } from "../context/ProducContext"
import { useEffect, useState, useContext } from "react"
import Product from "./Product"

const Scroll = () => {
    const [error, setError] = useState(null)
    const [page, setPage] = useState(1)
    const [items, setItems] = useState([])
    const { product } = useContext(ProducContext)
    
    useEffect(() => {
        fetchData()
    },[])

    useEffect(()=>{
        setItems([])
        setPage(1)
        if (product) {
            fetchData()
        }
    },[product])//eslint-disable-line

    const fetchData = async () => { 
        if (product) {
            const url = `${import.meta.env.VITE_API_URL}?keyword=${product}&page=${page}&sortBy=best_match`
            try {
                const response = await fetch(url, {
                    headers: {
                        "x-rapidapi-key": import.meta.env.VITE_RAPIDAPI_KEY
                    }
                })
                const data = await response.json()
                const newD = data.item.props.pageProps.initialData.searchResult.itemStacks[0].items
                const hash = {}
                const dataFiltered = newD.filter(o => hash[o.id] ? false : hash[o.id] = true);
                
                setItems(prevItems => [...prevItems, ...dataFiltered])
                setPage(page + 1)
            } catch (err) {
                setError(err)
                console.error(error)
            }
        }
    }

    if (product) {
        return (
            <InfiniteScroll
                dataLength={items.length}
                next={fetchData}
                hasMore={true}
                // loader={<span className="text-2xl">Loading...</span>}
                loader={
                    <div className="border shadow rounded-md p-4  w-12/12 mx-4">
                        <div className="animate-pulse flex flex-wrap ">
                            <div className=" bg-slate-700 h-60 w-full"></div>
                            <div className=" bg-slate-700 h-60 w-full"></div>
                            <div className=" bg-slate-700 h-60 w-full"></div>
                            <div className=" bg-slate-700 h-60 w-full"></div>
                        </div>
                    </div>
                    }
                endMessage={
                    <p style={{ textAlign: 'center' }}>
                        <b>Yay! You have seen it all</b>
                    </p>
                }
                className="m-8"
            >
                <div className="flex flex-wrap justify-between gap-4 p-4">
                    {items.map(product => {
                        return (
                            product.image ?
                                <Product key={product.image} name={product.name} price={product.price} image={product.image} /> : null
                        )
                    })}
                </div>
    
            </InfiniteScroll>
        )
    } else {
        return (<span>Start searching!</span>)
    }
}

export default Scroll