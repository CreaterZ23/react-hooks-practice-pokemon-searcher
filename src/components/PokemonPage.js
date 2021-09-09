import React from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage( {pokemons, handleSearch, search, postData, handleSubmitForm, handleAddPokemon} ) {


  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm handleAddPokemon={handleAddPokemon} postData={postData} />
      <br />
      <Search pokemons={pokemons} handleSearch={handleSearch} search={search}/>
      <br />
      <PokemonCollection pokemons={pokemons} handleSearch={handleSearch} search={search}/>
    </Container>
  );
}

export default PokemonPage;
