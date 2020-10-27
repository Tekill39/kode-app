import {
    pokemonsAPI
} from "../api/api";

const SET_POKEMONS = 'pokemonPage/SET_POKEMONS';
const GET_TYPES = 'pokemonPage/GET_TYPES';
const GET_SUBTYPES = 'pokemonPage/GET_SUBTYPES';
const TOGGLE_IS_FETCHING = 'pokemonPage/TOGGLE_IS_FETCHING';

let initialState = {
    pokemons: [],
    isFetching: false,
    types: [],
    subtypes: []

};

const pokemonsReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_POKEMONS:
            return {
                ...state,
                pokemons: action.pokemons
            };
        case GET_TYPES:
            return {
                ...state,
                types: action.types
            };
        case GET_SUBTYPES:
            return {
                ...state,
                subtypes: action.subtypes
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

export const setPokemons = (pokemons) => ({
    type: SET_POKEMONS,
    pokemons
});
export const getTypes = (types) => ({
    type: GET_TYPES,
    types
});
export const getSubtypes = (subtypes) => ({
    type: GET_SUBTYPES,
    subtypes
});
export const toggleIsFetching = (isFetching) => ({
    type: TOGGLE_IS_FETCHING,
    isFetching
});

export const requestPokemons = (types, subtype, pageSize, page) => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    let data = await pokemonsAPI.getPokemons(page, pageSize, types, subtype);
    dispatch(toggleIsFetching(false));
    dispatch(setPokemons(data.data.cards));
}
export const requestOptions = () => async (dispatch) => {
    let dataTypes = await pokemonsAPI.getTypes();
    let dataSubtype = await pokemonsAPI.getSubtypes();
    dispatch(getTypes(dataTypes.data.types));
    dispatch(getSubtypes(dataSubtype.data.subtypes));
}

export default pokemonsReducer;