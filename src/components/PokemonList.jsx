import React, { useState, useEffect } from 'react';
import './PokemonList.css';
import axios from 'axios';

const PokemonList = ({setUrlPokemon}) => {
    const [pokemons, setPokemons] = useState([]);
    const [next, setNext] = useState(undefined);
    const [previous, setPrevious] = useState(undefined);
    const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon');

    useEffect(()=>{
        axios.get(url).then(({data: {results, next, previous}})=>{
            setPokemons(results)
            setNext(next)
            setPrevious(previous)
        })
    }, [url])

    return (
        <div>
            <ul className="pkmnList">
                {pokemons.map(pkmn => (
                    <li key={pkmn.name} onClick={()=>{
                            setUrlPokemon(pkmn.url);
                        }}>{pkmn.name}</li>
                ))}
            </ul>
            <div style={{display: 'inline'}}>
                <button disabled={!previous} onClick={()=>setUrl(previous)}>⬅️ Previous</button>
                <button disabled={!next} onClick={()=>setUrl(next)}>Next ➡️</button>
            </div>
        </div>

    );
}

export default PokemonList;
