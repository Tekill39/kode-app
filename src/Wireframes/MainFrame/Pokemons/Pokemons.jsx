import React from 'react';
import classes from './Pokemons.module.css';
import pokemon from '../../../content/img/pokemon.jpg' // relative path to image 


const Pokemons = (props) => {
    return (
        <div className={classes.pokemonContent}>
            <div className={classes.pokemonsBlock}>
                <div><img className={classes.pokemonsImg} src={pokemon} alt={pokemon} /></div>
                <div><span>Pokemon</span></div>
                <div><span>Artist</span></div>

            </div>
            <div className={classes.pokemonsBlock}>
                <div><img className={classes.pokemonsImg} src={pokemon} alt={pokemon} /></div>
                <div><span>Pokemon</span></div>
                <div><span>Artist</span></div>

            </div>
        </div>
    );
}
export default Pokemons;