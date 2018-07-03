import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink } from 'mdbreact';
import logo from '../../img/logo.png'
import { BrowserRouter as Router } from 'react-router-dom';


class Navegacion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false,
            dropdownOpen: false
        };
    this.onClick = this.onClick.bind(this);
    this.toggle = this.toggle.bind(this);
    }
  
    onClick(){
        this.setState({
            collapse: !this.state.collapse,
        });
    }
  
    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }
  

  render() {
      return (
         <div>
             <Navbar dark color="black" expand="sm" scrolling>
                <NavbarBrand href="#">
                    <img src={logo} height="50" className="d-inline-block align-top"/>
                </NavbarBrand>
                { !this.state.isWideEnough && <NavbarToggler className="" onClick = { this.onClick } />}
                    <Collapse isOpen = { this.state.collapse } navbar>
                        <NavbarNav center>
                            <NavItem>
                                <NavLink to="/recarga"><i class="fa fa-leaf fa-lg pr-2" aria-hidden="true"></i>Recarga</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/servicio">Servicio</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/usuario">Usuario</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/tipoV">Tipo Vehiculo</NavLink>
                            </NavItem>
                        </NavbarNav>
                    </Collapse>
             </Navbar>

        </div>
      );
  }
}
export default Navegacion;
