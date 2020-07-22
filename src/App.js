//imr importa react de una
//scf crea una funcion en una constante de una

import React, { Fragment, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {

  //Crear listado de productos, state con Hook
  //productos seria el state
  //guardarProductos seria el metodo para cambiar el state
  const [ productos, guardarProductos] = useState([
    {id: 1, nombre: 'Camisa React', precio: 50},
    {id: 2, nombre: 'Camisa Javascript', precio: 40},
    {id: 3, nombre: 'Camisa VueJS', precio: 30},
    {id: 4, nombre: 'Camisa Angular', precio: 20}

  ]);

  const fecha = new Date().getFullYear();


  return (
    <Fragment>

      <Header 
        titulo = "Nuevo titulo"
      />   

      <h1>Lista de productos</h1>
      {productos.map(producto => (

      ))}

      <Footer
        fecha = {fecha}
      />

    </Fragment>
   );
}

export default App;
