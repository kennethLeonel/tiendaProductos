
import ItemListContainer from '../components/contenedorProductos/ItemListContainer';
import{useParams}from'react-router-dom'



function Home (){
    const { categoria }  = useParams();
    
    return (
        <div>
            <ItemListContainer titulo = "Bienvenido a tu tienda vecino !"  categoria = {categoria} ></ItemListContainer>

        </div>
    )
}

export default Home;