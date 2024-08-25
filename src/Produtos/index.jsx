import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Produtos() {
    const [listaProdutos, setProdutos] = useState([
    
    
        {
    
            id: 1,
    
            nome: "Myia",
    
            preco: "R$ 160,00",
    
            imagem: "https://th.bing.com/th/id/OIP.vKR1VUbiNYOohCRQ6SOargHaNL?w=184&h=328&c=7&r=0&o=5&pid=1.7",
    
            skin: ["Burning Bow", "Jungle Ranger"] ,
    
            categoria: "Atirador",
    
        },
    
        {
    
            id: 2,
    
            nome: "Lesley",
    
            preco: "R$ 299,00",
    
            imagem: "https://th.bing.com/th/id/OIP.5NAL0IgZ-VLRKar7NMFTMgHaNJ?w=115&h=180&c=7&r=0&o=5&pid=1.7",
    
            skin: ["Royal Musketeer", "General Rosa"],
    
            categoria: "Atirador/ Assassino",
            
    
        },
    
        {
    
            id: 3,
    
            nome: "Dyrroth",
    
            preco: "R$ 245,00",
    
            imagem: "https://th.bing.com/th/id/OIP.yJZ-gp6vPK8FO7rmtl-i8QHaL2?w=115&h=180&c=7&r=0&o=5&pid=1.7",
    
            skin: ["Scalebore", "Naraka Flame"],
    
            categoria: "Lutador",
        },
    
        {
    
            id: 4,
    
            nome: "Alucard",
    
            preco: "R$ 278,00",
    
            imagem: "https://th.bing.com/th/id/OIP.JwmHTKUQd9vT79glUyMy_wHaNK?w=184&h=328&c=7&r=0&o=5&pid=1.7",
    
            skin: ["Lone Hero", "Viscount"],
            categoria:"Lutador/Assassino"
        },
    
        {
    
            id: 5,
    
            nome: "Karina",
    
            preco: "R$ 434,00",
    
            imagem: "https://th.bing.com/th/id/OIP.y8aERWGpI2osfYqBp7IXewHaNK?w=115&h=180&c=7&r=0&o=5&pid=1.7",
    
            skin: ["Phantom Blade", "Black Pearl"],
    
            categoria: "Assassino",
        },
    
        {
    
            id: 6,
    
            nome: "Layla",
    
            preco: "R$ 299,00",
            imagem: "",

            skin: ["Flash Verde", "Arma Flamejante"],
    
            categoria: "Atirador",
        },

        {
    
            id: 7,
    
            nome: "Badang",
    
            preco: "R$ 599,00",
    
            imagem: "https://th.bing.com/th/id/OIP.bbIsabIheBwcB9nXWVd_AgHaNK?w=115&h=180&c=7&r=0&o=5&pid=1.7",
    
            skin: ["Ironfists", "Leo"],
    
            categoria: "Lutador",
        },

        {
    
            id: 8,
    
            nome: "Fanny",
    
            preco: "R$ 499,00",
            imagem: "https://th.bing.com/th/id/OIP.RTF6wr517pbKQkiCmvQ0AwHaNJ?w=184&h=328&c=7&r=0&o=5&pid=1.7",
    
            skin: ["Campus Youth", "Skylark"],
    
            categoria: "Assassino",
        },

        {
    
            id: 9,
    
            nome: "Chou",
    
            preco: "R$ 299,00",
    
            imagem: "https://th.bing.com/th/id/OIP.eVeaAmotm5JgRmOp-z1mJgHaL2?w=184&h=295&c=7&r=0&o=5&pid=1.7",
    
            skin: ["King of Muay Thai", "Dragon Boy"],
    
            categoria: "Lutador",
        },

        {
    
            id: 10,
    
            nome: "Moskov",
    
            preco: "R$ 550,00",
    
            imagem: "https://th.bing.com/th/id/OIP.z3lXAE3kVaS7p0y661idNQHaNN?w=115&h=180&c=7&r=0&o=5&pid=1.7",
    
            skin: ["Spear of Bone Dragon", "Yasha"],
    
            categoria: "Atirador",
        },

        {
    
            id: 11,
    
            nome: "Tigreal",
    
            preco: "R$ 320,00",
    
            imagem: "https://th.bing.com/th/id/OIP._WYIaiv-7EnWcmMgrvenvgHaNL?w=115&h=180&c=7&r=0&o=5&pid=1.7",
    
            skin: ["Dark Guardian", "Fallen Guard"],
    
            categoria: "Soldado",
        },

        {
    
            id: 12,
    
            nome: "Silvanna",
    
            preco: "R$ 548,00",
    
            imagem: "https://th.bing.com/th/id/OIP.VoymuJ6GsZ9i2mYtUHbNCwHaNL?w=115&h=180&c=7&r=0&o=5&pid=1.7",
    
            skin: ["Hallowed Lance", "Midnight Justice"],
    
            categoria: "Cavaleiro",
        },

        {
    
            id: 13,
    
            nome: "Yin",
    
            preco: "R$ 432,00",
    
            imagem: "https://th.bing.com/th/id/OIP.mFxYscGjhGvYW7yRDYBXYwHaNL?w=115&h=180&c=7&r=0&o=5&pid=1.7",
    
            skin: ["Fits of Valor", "Eternal Guardian"],
    
            categoria: "Lutador/ Assassino",
        },

        {
    
            id: 14,
    
            nome: "Harith",
    
            preco: "R$ 567,00",
    
            imagem: "https://th.bing.com/th/id/OIP.FVD3_Y0t2irab0qXl6meEQHaMC?w=115&h=180&c=7&r=0&o=5&pid=1.7",
    
            skin: ["Savannah Cat", "Stardust"],
    
            categoria: "Mago",
        },

        {
    
            id: 15,
    
            nome: "Wanwan",
    
            preco: "R$ 454,00",
    
            imagem: "https://th.bing.com/th/id/OIP.5jkxl_SxlNDIf9ZME4Py7wHaNL?w=115&h=180&c=7&r=0&o=5&pid=1.7",
    
            skin: ["Dartin Star", "Shoujo Commander"],
    
            categoria: "Atirador",
        },

        {
    
            id: 16,
    
            nome: "Vexana",
    
            preco: " R$ 599,00",
    
            imagem: "https://th.bing.com/th/id/OIP.AcVojF5AYbHOhw2Ec3Bb9AHaNK?w=115&h=187&c=7&r=0&o=5&pid=1.7",
    
            skin: ["Farol Lucente", "The Sun Empress"],
    
            categoria: "Mago",

        },

        {
    
            id: 17,
    
            nome: "Aamon",
    
            preco: " R$ 450,00",
    
            imagem: "https://th.bing.com/th/id/OIP.a8qokWEul44P053LS2opgAHaNK?w=115&h=180&c=7&r=0&o=5&pid=1.7",
    
            skin: ["Night's Edge", "Noble Crest"],
    
            categoria: "Assassino",

        },

        {
    
            id: 18,
    
            nome: "Karrie",
    
            preco: " R$ 589,00 ",
    
            imagem: "https://th.bing.com/th/id/OIP.twzkuszwtWSkIcph2IyoigHaNL?w=115&h=180&c=7&r=0&o=5&pid=1.7",
    
            skin: ["Rising Star", "Bladed Mantis"],
    
            categoria: "Assassino",

        },

        {
    
            id: 19,
    
            nome: "Khufra",
    
            preco: " R$ 769,00",
    
            imagem: "https://th.bing.com/th/id/OIP.E84jOlEZEu9xKqVhL04r7wHaNK?w=115&h=180&c=7&r=0&o=5&pid=1.7",
    
            skin: ["Desert Owl", "Apophis"],
    
            categoria: "Tanque",

        },

        {
    
            id: 20,
    
            nome: "Esmeralda",
    
            preco: "R$ 469,00",
    
            imagem: "https://th.bing.com/th/id/OIP.qC4vRP5hnvIU31_ceFXkVAHaEK?w=267&h=180&c=7&r=0&o=5&pid=1.7",
    
            skin: ["Ruddy Dusk", "Poison Vine"],
    
            categoria: "Mago",

        },

        {
    
            id: 21,
    
            nome: "Gusion",
    
            preco: "R$ 359,00",
    
            imagem: "https://th.bing.com/th/id/OIP.QnWcCiHgpcyDPcYnc7w6vgHaL2?w=115&h=180&c=7&r=0&o=5&pid=1.7",
    
            skin: ["Moonlight Sonata", "V.E.N.O.M Emperor Scorpion"],
    
            categoria: "Cavaleiro",

        },

        {
    
            id: 22,
    
            nome: "Irithel",
    
            preco: "R$ 559,00",
    
            imagem: "https://th.bing.com/th/id/OIP._VTIM_fb3GivLD6GOqvhnAHaL1?w=115&h=180&c=7&r=0&o=5&pid=1.7",
    
            skin: ["Silver Cyclone", "Hellfire"],
    
            categoria: "Atirador",

        },

        {
    
            id: 23,
    
            nome: "Cecilion",
    
            preco: "R$ 679,00",
    
            imagem: "https://th.bing.com/th/id/OIP.voG3zTapuhMYX5p4F0WYsAHaQB?w=115&h=180&c=7&r=0&o=5&pid=1.7",
    
            skin: ["Wisteria Count", "The Illusionist"],
    
            categoria: "Mago/ Assassino",

        },

        {
    
            id: 24,
    
            nome: "Kadida",
    
            preco: " R$ 734,00",
    
            imagem: "https://th.bing.com/th/id/OIP.bFeCEIq3BINFVOFAP_N1-wHaNN?w=115&h=180&c=7&r=0&o=5&pid=1.7",
    
            skin: ["Atlantean Princess", "White Robin"],
    
            categoria: "Mago",

        },

        {
    
            id: 25,
    
            nome: "Arlot",
    
            preco: "R$ 789,00",
    
            imagem: "https://th.bing.com/th/id/OIP.AUUP7EOX-HgM4NEatlLHPQAAAA?w=115&h=184&c=7&r=0&o=5&pid=1.7",
    
            skin: ["Wandering Lance", "Fury  of the Deep"],
    
            categoria: "Assassino",

        },
    ]);
    
    const [listaPedidos, setListaPedidos] = useState([]);
const adicionarItemPedidos = (pedido)  => {
    setListaPedidos([...listaPedidos, pedido])
}

const removerItemPedidos = (id)=> {
    let listaAux = listaPedidos.filter((pedido, index)=> {
        if(index !== id){

            return pedido
         } 
         else {
            return null;
            }
        }
    );

    setListaPedidos(listaAux);
}

return(
  <div>
     <Header titulo={"Mobile Legends"} /> 
       <h1>Skins</h1>
       {
    listaProdutos.map((produto) => 
      <div key={produto.id}>
      <p>{produto.nome}</p>
      <p>{produto.preco}</p>
    <img src = {produto.imagem}/>   
    <p>{produto.skin}</p> 
    <p>{produto.categoria}</p>
    <button onClick={() => adicionarItemPedidos(produto)}> Adicionar </button>
</div>

    )
}
{
    listaPedidos.map((produto, index) =>
    <div key={produto.id}>
    <p>{produto.nome}</p>
    <p>{produto.preco}</p>
  <img src = {produto.imagem}/>
  <p>{produto.skin}</p> 
  <p>{produto.categoria}</p>
  <button onClick={()=> removerItemPedidos(index)}>Remover</button>
  </div>
    )
}
<Footer desenvolvedor={"Crislaine Cordeiro - Info 3A"} /> 
</div>
);
}