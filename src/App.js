import React, { Component } from 'react';
import Recarga from './components/recarga/recarga';
import Servicio from './components/servicio/servicio';
import Usuario from './components/usuario/usuario';
import Tipo from './components/tipoV/tipoV';
import Navegacion from './components/navegacion/navegacion';


import logo from './img/logo.png'
import { BrowserRouter, Route, Switch } from "react-router-dom";



class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {

      };

  }


  render() {
      return (
        <div className="App">
          
            <BrowserRouter>
            <div>
            <div className="App-header">
            <Navegacion />
          </div>
              <Switch>
                <Route path="/recarga" component={Recarga} />
                <Route path="/servicio" component={Servicio} />
                <Route path="/usuario" component={Usuario} />
                <Route path="/tipoV" component={Tipo} />


              </Switch>
              </div>
            </BrowserRouter>
        </div>
      );
  }
}
export default App;
