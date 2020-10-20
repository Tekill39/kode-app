import React from 'react';
import classes from './MainFrame.module.css'




const MainFrame = (props) => {    
    
    // if (!props.isAuth) return <Redirect to={"/login"} />;

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
            MainFarme
            </div>
            <div className={classes.messages}>
                
        </div>
        </div >
    );
}


export default MainFrame;