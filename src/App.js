import React from 'react';
import LoginPage from'./Wireframes/Autorization1/login';
import {Route} from "react-router-dom";
import SmsFrame from'./Wireframes/Autorization2/SmsFrame';
import MainFrameContainer from './Wireframes/MainFrame/MainFrameContainer';

const App = () => {  
  return (    
    <div className = 'app-wrapper' >
     
      <div className='app-wrapper-content'>
         <Route  path='/start/' render = { ()=> <LoginPage /> } /> 
         <Route path='/pokemons/' render = { ()=> <MainFrameContainer/>} />
         <Route path='/sms/' render = { ()=> <SmsFrame/>} />
        {/* //  <Route path='/users' render = { ()=> <UsersContainer/>} />      
        //  <Route path='/login' render = { ()=> <LoginPage/>} />                   */} 
        
      </div>
    </div>
    )};
  
    
export default App;