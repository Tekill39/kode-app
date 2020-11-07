// import React from 'react';
// import classes from './SmsFrame.module.css'



// const SmsFrame = (props) => {

//     // if (!props.isAuth) return <Redirect to={"/login"} />;

//     return (

//         <div className={classes.wrapper}>
//             <div className={classes.passInput}>
//                 <div>
//                     <input type="text" autoFocus={true} placeholder={'Code from SMS'}/>
//                 </div>                
//             </div>
//             <div className={classes.passBtn}>
//                 <button className={classes.btn}>
//                 </button>                
//             </div>
//         </div>

//     );
// }
// export default SmsFrame;
import React from 'react';
import { reduxForm } from 'redux-form';
import { Field } from 'redux-form';
import { Input } from '../../utils/FormControls/FormControls';
import { required } from "../../utils/validators";
import { connect } from 'react-redux';
import { login } from '../../redux/auth-reducer';
import { Redirect } from 'react-router-dom';
import style from '../../utils/FormControls/FormControls.module.css';

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"sms"} component={Input}
                    validate={[required]} name={"sms"} />
            </div>
                        
            {props.error && <div className={style.formSummaryError}>
                {props.error}
            </div>
            }
            <div>
                <button>Login</button>
            </div>
        </form>)
}
const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.sms);
    }
    if (props.isProcess) {
        return <Redirect to={"/pokemons"} />
    }
    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
}
const mapStateToProps = (state) => ({
    isProcess: state.auth.isProcess
})
export default connect(mapStateToProps, { login })(Login);