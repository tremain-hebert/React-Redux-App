import {
    FETCHING_CHARACTER_START,
    FETCHING_CHARACTER_SUCCESS,
    FETCHING_CHARACTER_ERROR
} from '../actions/characterActions';

const initialState = {
    isFetching: false,
    error: '',
    character: []
};

export const characterReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_CHARACTER_START:
            console.log("fetching a new character");
            return {
                ...state,
                isFetching: true
            };
        case FETCHING_CHARACTER_SUCCESS:
            return { ...state, character: action.payload, isFetching: false };
        case FETCHING_CHARACTER_ERROR:
            return { ...state, error: action.payload, isFetching: false};
        default:
            return state;
    }
};