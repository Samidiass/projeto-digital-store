import { createContext, useState } from "react";

    const imagensContexto= {
    imagens: [slide1, slide2, slide3]
   // imagensdetalhe: [sabatoAmarelo,, SapatoBege,]
    cards: [

        {
        categoria: "Tenis",
        descricao: "K-Swiss v8 - Masculino",
        src: tenis, 
        preco: 200,
        precoDesconto: 100 
        }
       
        {
        categoria: "Tenis",
        descricao: "K-Swiss v8 - Masculino",
        src: tenis, 
        preco: 200,
        precoDesconto: 100 
        }

        {
        categoria: "Tenis",
         descricao: "K-Swiss v8 - Masculino", 
        src: tenis, 
        preco: 200,
        precoDesconto: 100,

        }
        {
        categoria: "Tenis",
        descricao: "K-Swiss v8 - Masculino",
        src: tenis, 
        preco: 200,
        precoDesconto: 100, 
        }

    ]

}

const ThemeContext= createContext(imagensContexto); 



const ContextoImagens = (children) => {
    const [imgContext, setImgContext] = useState (imagensContexto)
    return (
    <>
        <ThemeContext.Provider value={{imgContext, setImgContext}}>
         {children}
        </ThemeContext.Provider>
   </>
)

}

export default ContextoImagens
