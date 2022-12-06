
import './item.css'
import {productos} from'../../listaProductos'
import Item from './Item';
const ItemListContainer = (props) => {
   
    let productosFinal;

       
        if(props.categoria){
            productosFinal = productos.filter((producto) =>  producto.categoria === props.categoria);
           
        }else{
            productosFinal = productos;
        }
        const mostrarProductos = () => {
            return productosFinal.map((producto) => (
                <Item producto={producto}  />
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