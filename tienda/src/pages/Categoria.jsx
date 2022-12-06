import{useParams}from'react-router-dom'
import { Link } from 'react-router-dom';
function Categoria (props)  {
    const { categoria }  = useParams();
    let productos = props.productosP
    let productosXcategoria = productos.filter((producto) => producto.categoria === categoria);
    console.log(productosXcategoria);
    const mostrar = () => {
        return productosXcategoria.map((producto) => (
            <div className='producto' >
               <p>{producto.nombre} </p>
               <img src={producto.imagen}  />
                 <p>{producto.precio}</p>
                 <button className='boton' >Agregar Carrito</button>
                 <Link to={`/producto/${producto.id}`}><button variant="secondary" >Detalle Producto</button></Link>
            </div>
           ))
    }
    return (
        <div>
            <h1>Categoria {categoria}</h1>
            {mostrar()}
        </div>
    )
}
export default Categoria;