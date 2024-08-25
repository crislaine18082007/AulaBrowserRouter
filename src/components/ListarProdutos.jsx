import { useState } from "react";
import ListarProdutos from "../components/ListarProdutos";

export default function ListarProdutos({Produtos}){

    const [listaPedidos, setlistaPedidos] = useState ([]);
 const adicionarItemPedidos = (objeto) =>{
    setlistaPedidos([...listaPedidos,objeto]);
    }
  
      return(
        <>
     <div class='container-produtos'>
      

        {
            Produtos.map((objeto) =>
                <div class='item-produtos' key= {objeto.id}>
                    <img src = {objeto.imagem} id='produtos-img'/>
                    <h2>{objeto.nome}</h2>
                    <h3>{objeto.preco}</h3>
                    <p>{objeto.descrição}</p>
                    <button onClick={() =>adicionarProdutoPedido(objeto)}>Comprar</button>
                </div>
        
            )
        }   


     </div>
      </>
    )

}