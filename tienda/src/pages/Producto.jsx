import './producto.css'
import{useParams}from'react-router-dom'
function Producto (props) {
    const { id }  = useParams();
    let productos = props.productosP
    let producto ;
    let mostrar = "";
    let detallar ;
    if (id === 'empty'){
        mostrar = "No hay productos";
    }else {
        producto = productos.filter((producto) => producto.id === Number(id));
        console.log(producto);
        detallar = () => {
        return <div className='producto'> 
        <h1> Nombre Producto :  {producto[0].nombre }</h1>
        <h3> Precio: { producto[0].precio} </h3>
        <img src={producto[0].imagen} alt="Imagen del producto" />
        <p> Descripcion: {producto[0].descripcion} </p>
            <p>categoria: {producto[0].categoria} </p>
        </div>
       }

    }
  
    return (
        <div>
       {detallar()}
        </div>
    )
}
export default Producto;