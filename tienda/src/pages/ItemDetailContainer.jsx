import './producto.css'
import { useParams } from 'react-router-dom'
import { productos } from '../listaProductos'
import { useState } from 'react';

function ItemDetailContainer(props) {
    let [carrito, setCarrito] = useState([]);
    const { id } = useParams();
    function agregarCarrito(id) {
        setCarrito = productos.filter((producto) => producto.id === id);
     
       
    }
    let producto = productos.filter((producto) => producto.id === Number(id));
    console.log(carrito);
    const detallar = () => {
        return <div className='producto'>
            <h1> Nombre Producto :  {producto[0].nombre}</h1>
            <h3> Precio: {producto[0].precio} </h3>
            <img src={producto[0].imagen} alt="Imagen del producto" />
            <p> Descripcion: {producto[0].descripcion} </p>
            <p>categoria: {producto[0].categoria} </p>
            <p>stock: {producto[0].stock} </p>
          
            <button className='boton' onClick={() => agregarCarrito(producto[0].id)}>Agregar Carrito</button>
        </div>
    }



    return (
        <div>
            {detallar()}
        </div>
    )
}
export default ItemDetailContainer;