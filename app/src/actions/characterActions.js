import axios from 'axios';

export const FETCHING_CHARACTER_START = 'FETCHING_CHARACTER_START';
export const FETCHING_CHARACTER_SUCCESS = 'FETCHING_CHARACTER_SUCCESS';
export const FETCHING_CHARACTER_ERROR = 'FETCHING_CHARACTER_ERROR';

export const getCharacter = () => (dispatch) => {
    console.log("getCharacter action");
    dispatch({ type: FETCHING_CHARACTER_START });
    axios
        .get("https://rickandmortyapi.com/api/character/")
        .then((res) => {
            dispatch({ 
                type: FETCHING_CHARACTER_SUCCESS,
                payload: res.data.results});
            console.log("API Res:", res);
        })
        .catch((err) => {
            dispatch({
                type: FETCHING_CHARACTER_ERROR,
                payload: `${err.response.message} code: ${err.response.code}`
            });
            console.log(err);
        });
};
