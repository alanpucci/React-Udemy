//imr importa react de una
//scf crea una funcion en una constante de una

import React, { Fragment, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Producto from './components/Producto';
import Carrito from './components/Carrito';


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

  //State para un carrito de compras
  const [ carrito, agregarProducto] = useState([]);

  const fecha = new Date().getFullYear();


  return (
    <Fragment>

      <Header 
        titulo = "Nuevo titulo"
      />   

      <h1>Lista de productos</h1>
      {productos.map(producto => (
        <Producto 
          key={producto.id}
          producto={producto}
          carrito={carrito}
          productos={productos}
          agregarProducto={agregarProducto}

        />
      ))}

      <Carrito 
        carrito={carrito}
      />

      <Footer
        fecha = {fecha}
      />

    </Fragment>
   );
}

export default App;
