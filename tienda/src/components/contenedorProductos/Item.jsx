import { Link } from 'react-router-dom';

const Item =(props) => {
let producto = props.producto;


return(
    <div className='producto' >
    <p>{producto.nombre} </p>
    <img src={producto.imagen}  />
      <p>{producto.precio}</p>
      {/* <button className='boton' onClick={() => agregarCarrito(producto.id)}>Agregar Carrito</button> */}
      <Link to={`/item/${producto.id}`}><button>Detalle Producto</button></Link>
 </div>
)
    
};
export default Item;