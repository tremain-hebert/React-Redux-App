import axios from 'axios';

export const FETCHING_CHARACTER_START = 'FETCHING_CHARACTER_START';
export const FETCHING_CHARACTER_SUCCESS = 'FETCHING_CHARACTER_SUCCESS';
export const FETCHING_CHARACTER_ERROR = 'FETCHING_CHARACTER_ERROR';

export const getCharacter = () => (dispatch) => {
    console.log("getCharacter action");
    dispatch({ type: FETCHING_CHARACTER_START });
    function getRandom(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
      }
    axios
        .get(`https://rickandmortyapi.com/api/character/${getRandom(1, 672)}`)
        .then((res) => {
            dispatch({ 
                type: FETCHING_CHARACTER_SUCCESS,
                payload: res.data});
            console.log("API Res:", res);
        })
        .catch((err) => {
            dispatch({
                type: FETCHING_CHARACTER_ERROR,
                payload: `${err}`
            });
            console.log(err);
        });
};
 