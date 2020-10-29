import React from 'react';
import classes from './Pokemons.module.css';
import pokemon from '../../../content/img/pokemon.jpg' // relative path to image 


const Pokemons = (props) => {
    let pokemon = props.pokemon;
    return (
        <div className={classes.pokemonContent}>
            <div className={classes.pokemonsBlock}>
                
                <div><img className={classes.pokemonsImg} src={pokemon.imageUrl} alt={pokemon} /></div>
                <div className={classes.pokemonsTxt}>
                <div><span>{pokemon.name} </span></div>
                <div><span>{pokemon.artist}</span></div>
                </div>

            </div>
        </div>
    );
}
export default Pokemons;