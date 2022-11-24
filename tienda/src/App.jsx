

import './App.css';
import React from 'react';
import Navbar from './components/navegador/Navbar';
import ItemListContainer from './components/contenedorProductos/ItemListContainer';

function App() {
  return (
    <div >
      <Navbar url ="/brand.png"> </Navbar>
      <ItemListContainer titulo = "Bienvenido a tu tienda vecino !"></ItemListContainer>
    </div>
  
  );
}

export default App;

