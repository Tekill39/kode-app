import React from 'react';
import PassFrame from'./Wireframes/Autorization1/PassFrame';
import {Route} from "react-router-dom";
import SmsFrame from'./Wireframes/Autorization2/SmsFrame';
import MainFrame from'./Wireframes/MainFrame/MainFrame';
import PokemonFrame from'./Wireframes/PokemonFrame/PokemonFrame';

const App = () => {  
  return (    
    <div className = 'app-wrapper' >
     
      <div className='app-wrapper-content'>
         <Route  path='/start/' render = { ()=> <PassFrame /> } /> 
         <Route path='/pokemons/' render = { ()=> <MainFrame/>} />
         <Route path='/sms/' render = { ()=> <SmsFrame/>} />
        {/* //  <Route path='/users' render = { ()=> <UsersContainer/>} />      
        //  <Route path='/login' render = { ()=> <LoginPage/>} />                   */} 
        
      </div>
    </div>
    )};
  
    
export default App;