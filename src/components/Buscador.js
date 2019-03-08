import React, { Component } from "react";

class Buscador extends Component {
  
  busquedaRef = React.createRef();

  obtenerDatos = e => {
    e.preventDefault();
    const pokemon = this.busquedaRef.current.value;
    this.props.datosBusqueda(pokemon)
  };

  render() {
    return (
      <div>
      <form onSubmit={this.obtenerDatos}>
        <div className="row">
          <div className="form-group col-md-8">
            <input
              ref={this.busquedaRef}
              className="form-control form-control-lg"
              type="text"
              placeholder="Busca tu pokemon"
            />
          </div>
          <div className="form-group col-md-4">
            <input
              type="submit"
              className="btn btn-lg btn-primary btn-block"
              value="Buscar.."
            />
          </div>
        </div>
      
      </form>
      </div>
    );
  }
}

export default Buscador;
