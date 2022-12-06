
import ItemListContainer from '../components/contenedorProductos/ItemListContainer';

function Home (props){
   
    return (
        <div>
            <ItemListContainer titulo = "Bienvenido a tu tienda vecino !"  productos = {props.productosP}></ItemListContainer>

        </div>
    )
}

export default Home;