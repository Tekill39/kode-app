import * as axios from 'axios';

const instance = axios.create({
    baseURL: `https://api.pokemontcg.io/v1/`
});


export const pokemonsAPI = {
    getPokemons(currentPage = 1, pageSize = 8, types='', subtype='') {
        return instance.get(`cards?page=${currentPage}&pageSize=${pageSize}&types=${types}&subtype=${subtype}`)
            .then(response => {
                return response;
            });
    },
    getTypes(){
        return instance.get(`types`)
        .then(response => {
            return response;
        })
    },
    getSubtypes(){
        return instance.get(`subtypes`)
        .then(response=>{
            return response;
        })
    },
    getPokemon(pokemonId){
        return instance.get(`cards?id=${pokemonId}`)
        .then(response=>{
            return response;
        })
    }
}
