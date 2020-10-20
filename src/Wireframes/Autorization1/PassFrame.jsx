import React from 'react';
import classes from './PassFrame.module.css'



const PassFrame = (props) => {

    // if (!props.isAuth) return <Redirect to={"/login"} />;

    return (

        <div className={classes.wrapper}>
            <div className={classes.passInput}>
                <div>
                    <input type="text" autoFocus={true} placeholder={'Login'}/>
                </div>
                <div>
                    <input type="password" autoFocus={true} placeholder={'Password'} />
                </div>
            </div>
            <div className={classes.passBtn}>
                <button className={classes.btn}>
                </button>
                
            </div>
        </div>

    );
}
export default PassFrame;
