import React from 'react';
import classes from './Select.module.css'

const Select = (props) => {

    return (
        <div className={classes.formContent}>
            <div>Select</div>
            <div className={classes.form}>
                <form action="formdata" method="post" name="type">
                    <p><select name="list1" onChange={e =>props.optionSelected(e.target.value)}>
                        {props.options.map(option => <option>{option}</option>)}
                    </select></p>
                </form>
            </div>

        </div>
    );
}
export default Select;