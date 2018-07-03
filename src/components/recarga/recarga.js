import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink } from 'mdbreact';
import logo from '../../img/logo.png'
import { BrowserRouter as Router } from 'react-router-dom';

class Recarga extends React.Component {
  

  render() {
      return (
         <div>
            <table class="table table-hover">

                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <th>Tipo</th>
                        <th>Valor</th>
                        <th>Boton</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Andres</td>
                        <td>Spark GT</td>
                        <td>En curso</td>
                        <td><button dark>click</button></td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Daniel</td>
                        <td>Moto X</td>
                        <td>Finalizado</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Julian</td>
                        <td>Cicla X</td>
                        <td>Cancelado</td>
                    </tr>
                    <tr>
                        <th scope="row">4</th>
                        <td>Winston</td>
                        <td>A pie</td>
                        <td>Caminando</td>
                    </tr>
                </tbody>

            </table>
        </div>
      );
  }
}
export default Recarga;
