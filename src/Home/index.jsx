import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "../globals.css";
import ListarProdutos from '../components/ListarProdutos';


export default function Home() {
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
    }
]);

    return(
        <>
        <Header/>
        <div class='carousel-principal'>
        <Carousel 
                infiniteLoop
                useKeyboardArrows
                autoPlay
                showArrows={true}
                showStatus={false}
                showThumbs={false}

                dynamicHeight>
               <div>

    <img src="https://th.bing.com/th/id/OIP.ffQhTQSN62xEJE31K34CIQHaEK?w=300&h=180&c=7&r=0&o=5&pid=1.7" alt="Slide 1" />
    <img src="https://th.bing.com/th/id/OIP.j35uZD2ahJTktG9T0DN44QHaEK?w=280&h=180&c=7&r=0&o=5&pid=1.7" alt="Slide 2" />
    <img src="https://th.bing.com/th/id/OIP.SIbVaC4YD1IlM7xp0DYlwQHaEK?w=322&h=180&c=7&r=0&o=5&pid=1.7" alt="Slide 3" />

</div>

            </Carousel>
            <ListarProdutos Produtos ={listaProdutos}  />
        </div>

    
        </>
    );
    }
