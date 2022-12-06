import './navegador.css'
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
const Navbar = (props) => {

    return (
        <div>
            <nav className='navegador' id='nav'>
             
                <div className="logo">
                   <Link to='/'>  <img src={props.url} alt="Logo de la tienda"  /></Link>
                </div>
                
                <div>
                    
                    <ul className='lista'>
                        <Link to='/'>
                            <li> Inicio </li>
                        </Link>
                        <Link to='/category/cerveza'>
                            <li> Cervezas </li>
                        </Link>
                        <Link to='/category/bebida'>
                            <li> Bebidas </li>
                        </Link>
                        <Link to='/category/salsa'>
                            <li> Salsas </li>
                        </Link>
                        <Link to='/category/verdura'>
                            <li> Verduras </li>
                        </Link>
                        <Link to='/contacto'>
                            <li>  Contacto</li>
                        </Link> 
                        <Link to='/compra'> <CartWidget></CartWidget></Link>
                     
                    </ul>
                    
                </div>
            </nav>
        </div>
    );
}
export default Navbar;