import { ProductProvider } from "./components/context/ProducContext"
import NavBar from "./components/UI/NavBar"
import Scroll from "./components/UI/Scroll"
function App() {


  return (
    <div className="bg-slate-100 min-h-screen">
      <ProductProvider>
        <NavBar />
        <Scroll>

        </Scroll>
      </ProductProvider>
    </div>
  )
}

export default App
