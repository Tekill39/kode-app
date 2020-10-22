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
                <Select />             
            </div>
            <div className={classes.Pokemons}>
                <Pokemons />
            </div>
        </div >
    );
}

export default MainFrame;