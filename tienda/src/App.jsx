

import './App.css';
import React from 'react';
import Navbar from './components/navegador/Navbar';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contacto from './pages/Contacto';
import ItemDetailContainer from './pages/ItemDetailContainer';



function App() {
  // const [productos, setProducts] = useState();
  return (
    <BrowserRouter >
      <Navbar url ="/brand.png"> </Navbar>
      <Routes>
        <Route exact  path="/" element={<Home />}></Route>
        <Route path="/item/:id" element={<ItemDetailContainer ></ItemDetailContainer>}></Route>
        <Route path="/contacto" element={<Contacto></Contacto>}></Route>
        <Route path="/compra" element={<h1>Compra</h1>}></Route>
        <Route path="/category/:categoria" element={<Home/>}></Route>
      </Routes>
     
    </BrowserRouter>
  
  );
}

export default App;

