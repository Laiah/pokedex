//import logo from './logo.svg';
import './App.css';
import React from 'react';
import { ChakraProvider, Button, Container } from "@chakra-ui/react"
import PokeCard from './PokeCard';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      PokemonList: [],
      IndividualPokemons: [],
      colorMode: "normal"
    }

    this.fetchPokemons = this.fetchPokemons.bind(this);
    this.fetchOnePokemon = this.fetchOnePokemon.bind(this);
    this.changeColorMode = this.changeColorMode.bind(this);
  }

  componentDidMount() {
    this.fetchPokemons();
  }

  fetchPokemons() {
    this.setState({PokemonList: new Promise(resolve => {
      fetch(`https://pokeapi.co/api/v2/pokemon/?limit=10`, {
        method: 'GET',
        headers: {
          Accept: "application/json"
        }
      })
        .then(response => response.json())
        .then(json => {
          const PokemonList = json.results;
          this.setState({PokemonList});
        })
      })   
    }) 
  }

  fetchOnePokemon() {
    for (let pokemon of this.state.PokemonList) {
      fetch(pokemon.url, {
        method: 'GET',
        headers: {
          Accept: "application/json"
        }
      })
        .then(response => response.json())
        .then(json => {
          const IndividualPokemon = json;
          this.setState({
            IndividualPokemons: [...this.state.IndividualPokemons, IndividualPokemon]
          });
        })
    }    
  }

  changeColorMode() {
    this.setState({colorMode: this.state.colorMode === "normal" ? "shiny" : "normal"});
  }

  render() {
    console.log(this.state)
    return (
      <ChakraProvider>
        <Button onClick={this.fetchOnePokemon}>Get Pokemon</Button>
        <Button onClick={this.changeColorMode} isDisabled={this.state.IndividualPokemons.length === 0}>Shinies</Button>
       
        <Container>
          {this.state.IndividualPokemons ? this.state.IndividualPokemons.sort((a, b) => a.id > b.id ? 1 : -1).map((pokemon) => 
            <PokeCard pokemon={pokemon} colorMode={this.state.colorMode} />
          ) : ''}
        </Container>
      </ChakraProvider>
    );
  }

}

export default App;
