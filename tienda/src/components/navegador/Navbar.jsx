import './navegador.css'
import CartWidget from './CartWidget';
const Navbar = (props) => {

    return (
        <div>
            <nav className='navegador' id='nav'>
             
                <div className="logo">
                    <img src={props.url} alt="Logo de la tienda"  />
                </div>
                
                <div>
                    
                    <li className='lista'>
                        <ul> <a href="#nav"> Inicio</a> </ul>
                        <ul> <a href="#nav"> Productos</a> </ul>
                        <ul> <a href="#nav"> Contacto</a> </ul>
                        <CartWidget></CartWidget>
                     
                    </li>
                    
                </div>
            </nav>
        </div>
    );
}
export default Navbar;