<<<<<<< HEAD
export default function Header( {titulo} ){
    return(

        <h1>{titulo}</h1>
    );
=======
import { Link } from "react-router-dom";

export default function Header(){
    return(
        <>
        
        <nav> 
            <ul>
                <Link to="/">
                <li>Home</li>
                </Link>
                <Link to="/oferta">
                </Link>
            </ul>
        </nav>
        </>
    )
>>>>>>> 308b9cd828d17072282458519daabe2cf19a83d5
}