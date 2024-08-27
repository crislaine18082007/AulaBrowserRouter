import {Link} from "react-router-dom";

export default function Header(){
        return(
            <>
            
    <header>
     <div>
                <h1>Mobile Legends: Bang Bang</h1>
     </div>
                  <nav>
                
                    <Link to="/">
                        <h2 class='links-header'>HOME</h2>
                    </Link>

                    <Link to="/ofertas">
                        <h2 class='links-header'>OFERTAS</h2>
                    </Link>

                    <Link to="/produtos">
                        <h2 class='links-header'>PRODUTOS</h2>
                    </Link>
                
            </nav>
                </header>
              
            </>
        )
    }