
import './item.css'

import { Link } from 'react-router-dom';
import { useState } from 'react';
const ItemListContainer = (props) => {
    const [carrito, setCarrito] = useState( []);
    const productos = props.productos;
        function agregarCarrito (id)  {
            setCarrito = productos.filter((producto) => producto.id === id);
        }
        const mostrarProductos = () => {
            return productos.map((producto) => (
                <div className='producto' >
                   <p>{producto.nombre} </p>
                   <img src={producto.imagen}  />
                     <p>{producto.precio}</p>
                     <button className='boton' onClick={() => agregarCarrito(producto.id)}>Agregar Carrito</button>
                     <Link to={`/producto/${producto.id}`}><button variant="secondary" >Detalle Producto</button></Link>
                </div>
               ))
        }
    
    return(

        <div>
            <h1 className='titulo'>{props.titulo}</h1>
            <h2>Productos</h2>
            <div className='padre'>
            {mostrarProductos()}
            </div>
          
            
           
        </div>
    )
}

export default ItemListContainer;