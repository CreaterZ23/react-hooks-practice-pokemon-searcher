import React, {useState, useEffect} from "react";
import PokemonPage from "./PokemonPage";

function App() {
  const [pokemons, setPokemons] = useState([])
  const [status, setStatus] = useState('pending')
  const [isToggle, setIsToggle] = useState(false)
  const [search, setSearch] = useState('')
  
 
  useEffect(()=>{
    fetch('http://localhost:3001/pokemon')
    .then(resp => resp.json())
    .then(data => {setPokemons(data)
                  setStatus('success')})}, [isToggle])
  if(status === 'pending') {
    return <h1>Loading...</h1>
  }

  function postData(newCard){
    fetch('http://localhost:3001/pokemon', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newCard)
    }).then(
    

    setIsToggle(!isToggle)
    );
  }

  function handleSearch(event){
    setSearch(event.target.value)
  }

  function handleAddPokemon(newPokemon) {
    setPokemons([...pokemons, newPokemon]);
  }
  const searchedPokemons= pokemons.filter(pokemon=> search === ''|| pokemon.name.toLowerCase().includes(search.toLowerCase()))
  console.log(pokemons)

  return (
    <div className="App">
      <PokemonPage handleAddPokemon={handleAddPokemon} postData={postData} handleSearch={handleSearch} pokemons={searchedPokemons} search={search}/>
    </div>
  );
}

export default App;
