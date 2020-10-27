import React from 'react';
import classes from './SmsFrame.module.css'



const SmsFrame = (props) => {

    // if (!props.isAuth) return <Redirect to={"/login"} />;

    return (

        <div className={classes.wrapper}>
            <div className={classes.passInput}>
                <div>
                    <input type="text" autoFocus={true} placeholder={'Code from SMS'}/>
                </div>                
            </div>
            <div className={classes.passBtn}>
                <button className={classes.btn}>
                </button>                
            </div>
        </div>

    );
}
export default SmsFrame;