import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import React from 'react'
/*COMPONENTS*/
import NavBar from './components/navbar';
import Home from './pages/Home';
import Error from './pages/Error';
import CheckShop from './pages/CheckShop';
import CardDetail from './components/card-detail';
import ItemListContainer from './components/itemListContainer';
import {CartProvider} from './context/carritoContext'
import ModalIni from './components/modal'
import FormNewsletter from './components/formNewsletter/formnewsletter';



function App() {
  return (
  <ChakraProvider>
    <CartProvider>
      <BrowserRouter>
        <div className="App">    
          <NavBar/>
          <ModalIni />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categoria/:categoria" element={<ItemListContainer />} />
            <Route path="/Detalle/:id" element={<CardDetail />} />
            <Route path="/checkshop" element={<CheckShop />} />      
            <Route path="*" element={<Error />} />     
          </Routes>
          <FormNewsletter />
        </div>     
      </BrowserRouter>
    </CartProvider>
  </ChakraProvider> 
  );
}

export default App;
