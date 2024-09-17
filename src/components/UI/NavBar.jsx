import logo from '../assets/logo.png'
import { ProducContext } from '../context/ProducContext';
import { useContext, useState } from 'react';

const NavBar = () => {
    const [searchProduct, setSearchProduct] = useState(null)
    const { setProduct } = useContext(ProducContext)
    const handleSearch = () => {
        setProduct(searchProduct)
    }
    const handleClear = () => {
        setProduct(null)
    }
    return (
        <header className="pt-0">
            <nav className="flex items-center justify-between bg-slate-200 p-6 mb-2">
                <div className='flex items-center'>
                    <img src={logo} alt="logo" />
                    <span className="text-2xl mx-2  ">E-commerce Gapsi</span>
                </div>
                <div className='flex items-center gap-4'>
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input onChange={(e) => setSearchProduct(e.target.value)} type="search" id="default-search" className="block w-full p-4 ps-10 text-smborder border-gray-300 rounded-lg bg-gray-50 " placeholder="Search " required />
                        <button onClick={handleSearch} type="button" className="text-white absolute end-2.5 bottom-2.5 bg-gray-400 font-medium rounded-lg text-sm px-4 py-2 ">Search</button>
                    </div>
                    <button onClick={handleClear}>Clear</button>
                </div>
            </nav>
        </header>
    )
}

export default NavBar
