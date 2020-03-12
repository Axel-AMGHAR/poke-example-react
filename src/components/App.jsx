import React, { useState } from 'react';
import PokemonList from './PokemonList';
import PokemonInfo from './PokemonInfo';

const App = () => {

    const [urlPokemon, setUrlPokemon] = useState(null);

    return (
        <div>
            <PokemonList setUrlPokemon={ (url)=> setUrlPokemon(url)} />
            { (urlPokemon)? <PokemonInfo url={urlPokemon} ></PokemonInfo> : 'Pas de pokémons séléctionés'}
        </div>
    );
};

export default App;
