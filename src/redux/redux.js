import { createStore, combineReducers, applyMiddleware, compose } from "redux";
/* import pokemonPage from './pokemon-reducer'; */
/* import authReducer from "./auth-reducer"; */
import thunkMiddleware from 'redux-thunk';
import pokemonsReducer from "./pokemons-reducer";
/* import { reducer as formReducer } from 'redux-form';
 */
let reducers = combineReducers({
    // pokemonPage: profileReducer,
    pokemonsPage: pokemonsReducer, 
    // auth: authReducer,
    /* form: formReducer */
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;