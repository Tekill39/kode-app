import React from 'react';
import classes from './MainFrame.module.css';
import Select from './Select/Select'
import Header from '../MainFrame/Header/Header';
import Pokemons from './Pokemons/Pokemons';



const MainFrame = (props) => {

    // if (!props.isAuth) return <Redirect to={"/login"} />;

    return (
        <div className={classes.wrapper}>
            <div><Header /></div>
            <div className={classes.filters}>
               
            { props.type.map(type => <Select types={types} key={types} subtypes={subtypes} key={subtypes}/>)}                      
            </div>
            <div className={classes.Pokemons}>
           { props.pokemons.map(pokemon => <Pokemons pokemon={pokemon} key={pokemon.id}/>)}
            </div>
        </div >
    );
}

export default MainFrame;