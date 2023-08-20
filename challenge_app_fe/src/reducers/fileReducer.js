import { FETCH_FILES_FAILURE, FETCH_FILES_NO_DATA, FETCH_FILES_SUCCESS } from '../actions/fileActions'

const initialState = [];

const fileReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_FILES_SUCCESS:
            return action.payload;
        case FETCH_FILES_FAILURE:
            return action.payload;
        case FETCH_FILES_NO_DATA:
            return action.payload
        default:
            return state;
    }
};

export default fileReducer;
