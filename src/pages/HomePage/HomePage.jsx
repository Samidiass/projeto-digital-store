import Gallery from "../../compoments/Gallery/Gallery.jsx"


const HomePage = () => {
    return (
   
           <div>
               <Gallery/>
               <Section>
                <ColecoesEmDestaque1/>
               </Section>
               <Section>
                <ColecoesEmDestaque2/>
               </Section>
               <Section>
                <ProdutoEmAlta/>
               </Section>
               <OfertaEspecial/>
           </div>
       
       )
   
   }
   
   
       export default HomePage