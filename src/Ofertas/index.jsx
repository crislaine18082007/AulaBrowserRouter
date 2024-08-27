import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ListarProdutos from "../components/ListarProdutos";
export default function Oferta(){
    const [listaProdutos, setProdutos] = useState([

        {
    
            id: 16,
    
            nome: "Vexana",
    
            preco: "De R$ 599,00 por R$ 299,00" ,
    
            imagem: "https://th.bing.com/th/id/OIP.AcVojF5AYbHOhw2Ec3Bb9AHaNK?w=115&h=187&c=7&r=0&o=5&pid=1.7",
    
            skin: ["Farol Lucente, The Sun Empress"],
    
            categoria: "Mago",

        },

        {
    
            id: 17,
    
            nome: "Aamon",
    
            preco: "De R$ 450,00 por R$ 399,00",
    
            imagem: "https://th.bing.com/th/id/OIP.a8qokWEul44P053LS2opgAHaNK?w=115&h=180&c=7&r=0&o=5&pid=1.7",
    
            skin: ["Night's Edge, Noble Crest"],
    
            categoria: "Assassino",

        },

        {
    
            id: 18,
    
            nome: "Karrie",
    
            preco: "De R$ 589,00 por R$ 400,00",
    
            imagem: "https://th.bing.com/th/id/OIP.twzkuszwtWSkIcph2IyoigHaNL?w=115&h=180&c=7&r=0&o=5&pid=1.7",
    
            skin: ["Rising Star, Bladed Mantis"],
    
            categoria: "Assassino",

        },

        {
    
            id: 19,
    
            nome: "Khufra",
    
            preco: "De R$ 769,00 por R$ 599,00" ,
    
            imagem: "https://th.bing.com/th/id/OIP.E84jOlEZEu9xKqVhL04r7wHaNK?w=115&h=180&c=7&r=0&o=5&pid=1.7",
    
            skin: ["Desert Owl, Apophis"],
    
            categoria: "Tanque",

        },

        {
    
            id: 20,
    
            nome: "Esmeralda",
    
            preco: "De R$ 469,00 por R$ 249,00" ,
    
            imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbvnr5KiZAsDCbuuX_dqBwTJP56GZ2U72SF0eTs0q_SzkNKcwO0tY8n_LEk8kOg0h5m64&usqp=CAU",
    
            skin: ["Ruddy Dusk, Poison Vine"],
    
            categoria: "Mago",

        },

        {
    
            id: 21,
    
            nome: "Gusion",
    
            preco: "De R$ 359,00 por R$ 199,00" ,
    
            imagem: "https://th.bing.com/th/id/OIP.QnWcCiHgpcyDPcYnc7w6vgHaL2?w=115&h=180&c=7&r=0&o=5&pid=1.7",
    
            skin: ["Moonlight Sonata, V.E.N.O.M Emperor Scorpion"],
    
            categoria: "Cavaleiro",

        },

        {
    
            id: 22,
    
            nome: "Irithel",
    
            preco: "De R$ 559,00 por R$ 499,00" ,
    
            imagem: "https://th.bing.com/th/id/OIP._VTIM_fb3GivLD6GOqvhnAHaL1?w=115&h=180&c=7&r=0&o=5&pid=1.7",
    
            skin: ["Silver Cyclone, Hellfire"],
    
            categoria: "Atirador",

        },

        {
    
            id: 23,
    
            nome: "Cecilion",
    
            preco: "De R$ 679,00 por R$ 560,00" ,
    
            imagem: "https://th.bing.com/th/id/OIP.voG3zTapuhMYX5p4F0WYsAHaQB?w=115&h=180&c=7&r=0&o=5&pid=1.7",
    
            skin: ["Wisteria Count, The Illusionist"],
    
            categoria: "Mago/ Assassino",

        },
    ]);

    return(
        <>
        <Header/>
        <div>
         <ListarProdutos Produtos={listaProdutos}/>
      </div>
      
    </>

);
}

    