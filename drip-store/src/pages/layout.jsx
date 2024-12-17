import Header from "../Compoments/Header/Header"
import Footer from "../Compoments/Footer/Footer"
import { BrowserRouter } from "react-router-dom"
import Rotas from "../Rotas/Rotas.jsx"
import ContextoImagens from "../ContextoImagens/ContextoImagens.jsx"
const Layout = () => {
 return (
<>

        <div>
            <BrowserRouter> 
        <ContextoImagens> 
            <Header />
            <Rotas />
            <Footer />
        </ContextoImagens>   
            </BrowserRouter>    
        </div>
      
</>    
    )

}


    export default Layout