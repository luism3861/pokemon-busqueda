import React, { Component } from "react";
import "./App.css";
import Buscador from "./components/Buscador";
import Pokemon from "./components/Pokemon";

class App extends Component {

  
  state = {
    pokemon: "",
    imageUrl: {}
  };

  // componentDidMount() {
  //   this.consultarAPI();
  // }

  consultarAPI = () => {
    const pokemon = this.state.pokemon;
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    fetch(url)
      .then(res => res.json())
      .then(resultado => {
        this.setState({
          pokemon: resultado,
          imageUrl: resultado.sprites.front_default
        });
      });
      console.log(url)
  };

  datosBusqueda = pokemon => {
    this.setState(
      {
        pokemon
      },
      () => {
        this.consultarAPI();
      }
    );
  };

  render() {
    return (
      <div className="App">
        <div className="app container">
          <div className="jumbotron">
            <p className="lead text-center">POKEMON API</p>
            <Buscador datosBusqueda={this.datosBusqueda} />
          </div>
          <Pokemon
            pokemon={this.state.pokemon}
            imageUrl={this.state.imageUrl}
          />
        </div>
      </div>
    );
  }
}

export default App;
