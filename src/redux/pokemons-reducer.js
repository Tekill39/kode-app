import { pokemonsAPI } from "../api/api";

const SET_POKEMONS = 'pokemonPage/SET_POKEMONS';
const TOGGLE_IS_FETCHING = 'pokemonPage/TOGGLE_IS_FETCHING';

let initialState = {
    pokemons: [],
    isFetching: false,
};

const pokemonsReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_POKEMONS:
            return {
                ...state,
                pokemons: action.pokemons
            };

        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            };

        default:
            return state;
    }
}

export const setPokemons = (pokemons) => ({ type: SET_POKEMONS, pokemons });
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });

export const requestPokemons = (page, pageSize, types, subtype) => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    let data = await pokemonsAPI.getPokemons(page, pageSize, types, subtype);
    dispatch(toggleIsFetching(false));
    dispatch(setPokemons(data.data.cards));
}


export default pokemonsReducer;