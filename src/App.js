//import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import { ChakraProvider, Button, Flex, useColorMode } from "@chakra-ui/react"
import PokeCard from './components/PokeCard';
import theme from './theme';

function ShinyButton({ colorMode, toggleColorMode, isDisabled }) {
  return (
    <Button onClick={toggleColorMode} isDisabled={isDisabled}>
      Toggle {colorMode === "light" ? "Shinies" : "Normal"}
    </Button>
  );
}

const PokemonList = ({ pokemonList, setPokemonList, isShinyModeOn }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [next, setNext] = useState('');
  

  useEffect(() => {
    var orderedList = {};
    fetch(`https://pokeapi.co/api/v2/pokemon/?limit=30`, {
      method: 'GET',
      headers: {
        Accept: "application/json"
      }
    })
      .then(response => response.json())
      .then((json) => {
        setNext(json.next);

        return json.results;
      })
      .then((json) => {
        const promises = json.map(async pokemon => {
          const response = await fetch(pokemon.url, {
            method: 'GET',
            headers: {
              Accept: "application/json"
            }
          });
          const pokemonInfo = await response.json();
          orderedList[pokemonInfo.id] = pokemonInfo;
          return orderedList;
        })

        Promise.all(promises).then(pokemonInfo => {
          setPokemonList(pokemonInfo.pop());
          setIsLoaded(true);
        })
      })
  }, [setPokemonList])

  return isLoaded ?
    (<Flex maxWidth={{ lg: "1600px" }} wrap="wrap" m="auto" justify="evenly">
      {Object.entries(pokemonList).map((pokemon) => <PokeCard pokemon={pokemon[1]} isShinyModeOn={isShinyModeOn} key={pokemon[0]} />)}
    </Flex>)
    : <div>chargement...</div>
    ;
}

const App = () => {
  const [pokemonList, setPokemonList] = useState({});
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <ChakraProvider theme={theme}>
      <ShinyButton
        isDisabled={pokemonList.length !== 0}
        colorMode={colorMode}
        toggleColorMode={toggleColorMode}
      />
      <PokemonList
        pokemonList={pokemonList}
        setPokemonList={setPokemonList}
        isShinyModeOn={colorMode !== "light"}
      />
    </ChakraProvider>
  );
}

export default App;
