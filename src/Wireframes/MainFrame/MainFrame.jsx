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
               
            <Select options={props.types} optionSelected={props.onTypeChanged}/>  
            <Select options={props.subtypes} optionSelected={props.onSubtypeChanged}/>                    
            </div>
            <div className={classes.Pokemons}>
           { props.pokemons.map(pokemon => <Pokemons pokemon={pokemon} key={pokemon.id}/>)}
            </div>
        </div >
    );
}

export default MainFrame;