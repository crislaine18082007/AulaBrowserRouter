import { useState } from "react";

export default function ListarProdutos({Produtos}){

    const [listaPedidos, setlistaPedidos] = useState ([]);
 const adicionarProdutoPedido = (objeto) =>{
    setlistaPedidos([...listaPedidos,objeto]);
    }
  
      return(
        <>
     <div class="container-produtos"> 
      

        {
            Produtos.map((objeto) =>
                <div class="produtos" key= {objeto.id}>
                    <img src = {objeto.imagem} id="produtos-img"/>
                    <h2>{objeto.nome}</h2>
                    <h3>{objeto.preco}</h3>
                    <p>{objeto.skin}</p>
                    <p>{objeto.categoria}</p>
                    <button className="botao" onClick={() =>adicionarProdutoPedido(objeto)}>Comprar</button>
                </div>
        
            )
        }   

     </div>
      </>
    )

}