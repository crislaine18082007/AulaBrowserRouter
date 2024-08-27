import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import '../globals.css';
import ListarProdutos from "../components/ListarProdutos";

export default function Produtos(){
    const [listaProdutos, setProdutos] = useState([
    
    
        {
    
            id: 1,
    
            nome: "Myia",
    
            preco: "R$ 160,00",
    
            imagem: "https://th.bing.com/th/id/OIP.vKR1VUbiNYOohCRQ6SOargHaNL?w=184&h=328&c=7&r=0&o=5&pid=1.7",
    
            skin: ["Burning Bow, Jungle Ranger"] ,
    
            categoria: "Atirador",

            
    
        },
    
    
        {
    
            id: 2,
    
            nome: "Lesley",
    
            preco: "R$ 299,00",
    
            imagem: "https://th.bing.com/th/id/OIP.5NAL0IgZ-VLRKar7NMFTMgHaNJ?w=115&h=180&c=7&r=0&o=5&pid=1.7",
    
            skin: ["Royal Musketeer, General Rosa"],
    
            categoria: "Atirador/ Assassino",
            
    
        },
    
        {
    
            id: 3,
    
            nome: "Dyrroth",
    
            preco: "R$ 245,00",
    
            imagem: "https://th.bing.com/th/id/OIP.yJZ-gp6vPK8FO7rmtl-i8QHaL2?w=115&h=180&c=7&r=0&o=5&pid=1.7",
    
            skin: ["Scalebore, Naraka Flame"],
    
            categoria: "Lutador",
        },
    
        {
    
            id: 4,
    
            nome: "Alucard",
    
            preco: "R$ 278,00",
    
            imagem: "https://th.bing.com/th/id/OIP.JwmHTKUQd9vT79glUyMy_wHaNK?w=184&h=328&c=7&r=0&o=5&pid=1.7",
    
            skin: ["Lone Hero, Viscount"],
            categoria:"Lutador/Assassino"
        },
    
        {
    
            id: 5,
    
            nome: "Karina",
    
            preco: "R$ 434,00",
    
            imagem: "https://th.bing.com/th/id/OIP.y8aERWGpI2osfYqBp7IXewHaNK?w=115&h=180&c=7&r=0&o=5&pid=1.7",
    
            skin: ["Phantom Blade, Black Pearl"],
    
            categoria: "Assassino",
        },
    
        {
    
            id: 6,
    
            nome: "Layla",
    
            preco: "R$ 299,00",
            imagem: "data:image/jpeg;base64,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",

            skin: ["Flash Verde, Arma Flamejante"],
    
            categoria: "Atirador",
        },

        {
    
            id: 7,
    
            nome: "Badang",
    
            preco: "R$ 599,00",
    
            imagem: "https://th.bing.com/th/id/OIP.bbIsabIheBwcB9nXWVd_AgHaNK?w=115&h=180&c=7&r=0&o=5&pid=1.7",
    
            skin: ["Ironfists, Leo"],
    
            categoria: "Lutador",
        },

        {
    
            id: 8,
    
            nome: "Fanny",
    
            preco: "R$ 499,00",
            imagem: "https://th.bing.com/th/id/OIP.RTF6wr517pbKQkiCmvQ0AwHaNJ?w=184&h=328&c=7&r=0&o=5&pid=1.7",
    
            skin: ["Campus Youth, Skylark"],
    
            categoria: "Assassino",
        },

        {
    
            id: 9,
    
            nome: "Chou",
    
            preco: "R$ 299,00",
    
            imagem: "https://th.bing.com/th/id/OIP.eVeaAmotm5JgRmOp-z1mJgHaL2?w=184&h=295&c=7&r=0&o=5&pid=1.7",
    
            skin: ["King of Muay Thai, Dragon Boy"],
    
            categoria: "Lutador",
        },

        {
    
            id: 10,
    
            nome: "Moskov",
    
            preco: "R$ 550,00",
    
            imagem: "https://th.bing.com/th/id/OIP.z3lXAE3kVaS7p0y661idNQHaNN?w=115&h=180&c=7&r=0&o=5&pid=1.7",
    
            skin: ["Spear of Bone Dragon, Yasha"],
    
            categoria: "Atirador",
        },

        {
    
            id: 11,
    
            nome: "Tigreal",
    
            preco: "R$ 320,00",
    
            imagem: "https://th.bing.com/th/id/OIP._WYIaiv-7EnWcmMgrvenvgHaNL?w=115&h=180&c=7&r=0&o=5&pid=1.7",
    
            skin: ["Dark Guardian, Fallen Guard"],
    
            categoria: "Soldado",
        },

        {
    
            id: 12,
    
            nome: "Silvanna",
    
            preco: "R$ 548,00",
    
            imagem: "https://th.bing.com/th/id/OIP.VoymuJ6GsZ9i2mYtUHbNCwHaNL?w=115&h=180&c=7&r=0&o=5&pid=1.7",
    
            skin: ["Hallowed Lance, Midnight Justice"],
    
            categoria: "Cavaleiro",
        },

        {
    
            id: 13,
    
            nome: "Yin",
    
            preco: "R$ 432,00",
    
            imagem: "https://th.bing.com/th/id/OIP.mFxYscGjhGvYW7yRDYBXYwHaNL?w=115&h=180&c=7&r=0&o=5&pid=1.7",
    
            skin: ["Fits of Valor, Eternal Guardian"],
    
            categoria: "Lutador/ Assassino",
        },

        {
    
            id: 14,
    
            nome: "Harith",
    
            preco: "R$ 567,00",
    
            imagem: "https://th.bing.com/th/id/OIP.FVD3_Y0t2irab0qXl6meEQHaMC?w=115&h=180&c=7&r=0&o=5&pid=1.7",
    
            skin: ["Savannah Cat, Stardust"],
    
            categoria: "Mago",
        },

        {
    
            id: 15,
    
            nome: "Wanwan",
    
            preco: "R$ 454,00",
    
            imagem: "https://th.bing.com/th/id/OIP.5jkxl_SxlNDIf9ZME4Py7wHaNL?w=115&h=180&c=7&r=0&o=5&pid=1.7",
    
            skin: ["Dartin Star, Shoujo Commander"],
    
            categoria: "Atirador",
        },

        {
    
            id: 16,
    
            nome: "Vexana",
    
            preco: " R$ 599,00",
    
            imagem: "https://th.bing.com/th/id/OIP.AcVojF5AYbHOhw2Ec3Bb9AHaNK?w=115&h=187&c=7&r=0&o=5&pid=1.7",
    
            skin: ["Farol Lucente, The Sun Empress"],
    
            categoria: "Mago",

        },

        {
    
            id: 17,
    
            nome: "Aamon",
    
            preco: " R$ 450,00",
    
            imagem: "https://th.bing.com/th/id/OIP.a8qokWEul44P053LS2opgAHaNK?w=115&h=180&c=7&r=0&o=5&pid=1.7",
    
            skin: ["Night's Edge, Noble Crest"],
    
            categoria: "Assassino",

        },

        {
    
            id: 18,
    
            nome: "Karrie",
    
            preco: " R$ 589,00 ",
    
            imagem: "https://th.bing.com/th/id/OIP.twzkuszwtWSkIcph2IyoigHaNL?w=115&h=180&c=7&r=0&o=5&pid=1.7",
    
            skin: ["Rising Star, Bladed Mantis"],
    
            categoria: "Assassino",

        },

        {
    
            id: 19,
    
            nome: "Khufra",
    
            preco: " R$ 769,00",
    
            imagem: "https://th.bing.com/th/id/OIP.E84jOlEZEu9xKqVhL04r7wHaNK?w=115&h=180&c=7&r=0&o=5&pid=1.7",
    
            skin: ["Desert Owl, Apophis"],
    
            categoria: "Tanque",

        },

        {
    
            id: 20,
    
            nome: "Esmeralda",
    
            preco: "R$ 469,00",
    
            imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbvnr5KiZAsDCbuuX_dqBwTJP56GZ2U72SF0eTs0q_SzkNKcwO0tY8n_LEk8kOg0h5m64&usqp=CAU",
    
            skin: ["Ruddy Dusk, Poison Vine"],
    
            categoria: "Mago",

        },

        {
    
            id: 21,
    
            nome: "Gusion",
    
            preco: "R$ 359,00",
    
            imagem: "https://th.bing.com/th/id/OIP.QnWcCiHgpcyDPcYnc7w6vgHaL2?w=115&h=180&c=7&r=0&o=5&pid=1.7",
    
            skin: ["Moonlight Sonata, V.E.N.O.M Emperor Scorpion"],
    
            categoria: "Cavaleiro",

        },

        {
    
            id: 22,
    
            nome: "Irithel",
    
            preco: "R$ 559,00",
    
            imagem: "https://th.bing.com/th/id/OIP._VTIM_fb3GivLD6GOqvhnAHaL1?w=115&h=180&c=7&r=0&o=5&pid=1.7",
    
            skin: ["Silver Cyclone, Hellfire"],
    
            categoria: "Atirador",

        },

        {
    
            id: 23,
    
            nome: "Cecilion",
    
            preco: "R$ 679,00",
    
            imagem: "https://th.bing.com/th/id/OIP.voG3zTapuhMYX5p4F0WYsAHaQB?w=115&h=180&c=7&r=0&o=5&pid=1.7",
    
            skin: ["Wisteria Count, The Illusionist"],
    
            categoria: "Mago/ Assassino",

        },

        {
    
            id: 24,
    
            nome: "Kadida",
    
            preco: " R$ 734,00",
    
            imagem: "https://th.bing.com/th/id/OIP.bFeCEIq3BINFVOFAP_N1-wHaNN?w=115&h=180&c=7&r=0&o=5&pid=1.7",
    
            skin: ["Atlantean Princess, White Robin"],
    
            categoria: "Mago",

        },

        {
    
            id: 25,
    
            nome: "Arlot",
    
            preco: "R$ 789,00",
    
            imagem: "https://th.bing.com/th/id/OIP.AUUP7EOX-HgM4NEatlLHPQAAAA?w=115&h=184&c=7&r=0&o=5&pid=1.7",
    
            skin: ["Wandering Lance, Fury  of the Deep"],
    
            categoria: "Assassino",

        },
    ]);
    
    return(
        <>
        <Header/>
        <div>
        <ListarProdutos Produtos={listaProdutos}/>
        </div>
        
    </>

    )}

   

        
     
