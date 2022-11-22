import './navegador.css'

const Navbar = (props) => {

    return (
        <div>
            <nav className='navegador' id='nav'>
             
                <div className="logo">
                    <img src={props.url} alt="Logo de la tienda"  />
                </div>
                
                <div>
                    {props.children}
                    <li className='lista'>
                        <ul> <a href="#nav"> Inicio</a> </ul>
                        <ul> <a href="#nav"> Productos</a> </ul>
                        <ul> <a href="#nav"> Contacto</a> </ul>
                    </li>
                </div>
            </nav>
        </div>
    );
}
export default Navbar;