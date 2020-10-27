import React from 'react';
import { pokemonsAPI } from '../../../api/api';
import classes from './Select.module.css'


const Select = (props) => {
    let pokemon = props.pokemon;
    return (
        <div className={classes.formContent}>
            <div>Select</div>
            <div className={classes.form}>
                <form action="formdata" method="post" name="type">
                    <p><select name="list1">
                        <option>{pokemon.types}</option>
                        {/* <option>Water</option>
                        <option>Fire</option>
                        <option>Power</option>
                        <option>Wind</option>
                        <option>Legend</option> */}
                    </select></p>
                </form>
            </div>
            <div className={classes.form}>
            <form action="formdata" method="post" name="subtype">
                    <p><select name="list1">
                    <option>{pokemon.subtype}</option>
                        {/* <option>Option</option>
                        <option>Textarea</option>
                        <option>Label</option>
                        <option>Fieldset</option>
                        <option>Legend</option> */}
                    </select></p>
                </form>
            </div>
        </div>
    );
}
export default Select;