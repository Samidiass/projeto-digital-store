import { Route, Routes } from "react-router-dom"
import HomePage from "../pages/HomePage/HomePage"
import ProductListingPage from "../pages/ProductListingPage/ProductListingPage"
import ProductViewPage from "../pages/ProductViewPage/ProductViewPage"

const Rotas = () => {
 return (

        <div>
            <Routes>
               <Route path="/" element={<HomePage />}/>
               <Route path="/product/:id" element={<ProductViewPage />}/>
               <Route path="/produtos" element={<ProductListingPage />}/>
            </Routes>    
        </div>
    
    )

}


    export default Rotas