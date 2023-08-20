import axios from 'axios';
import { fetchDataFailure, fetchDataStart, fetchDataSuccess } from '../reducers/filesSlice'

export const FETCH_FILES_SUCCESS = 'FETCH_FILES_SUCCESS';
export const FETCH_FILES_FAILURE = 'FETCH_FILES_FAILURE';
export  const FETCH_FILES_NO_DATA = 'FETCH_FILES_NO_DATA';

export const PORT = 9021;

export const fetchFiles = (textValue, excludeIncompleteData) => async (dispatch) => {
    try {
        let filter = '';
        const exclude = `excludeIncompleteData=${excludeIncompleteData}`;
        if(textValue && textValue !==''){
            filter = `?fileName=${textValue}&${exclude}`
        }
        else{
            filter = `?${exclude}`;
        }
        const response = await axios.get(`http://localhost:${PORT}/files/data`+filter);
        const files = response.data;
        if(files.length>0) {
            dispatch({ type: FETCH_FILES_SUCCESS, payload: files });
        }
        else{
            dispatch({ type: FETCH_FILES_NO_DATA, payload: [] });
            return 'Data not found.';
        }
    } catch (error) {
        //console.error('Error fetching files:', error);
        dispatch({ type: FETCH_FILES_FAILURE, payload: [] });
        return 'An error occurred while fetching data.';
    }
};


// export const fetchFilesData = (textValue) => async (dispatch) => {
//     try {
//         dispatch(fetchDataStart());
//
//         const response = await fetch(`http://localhost:${PORT}/files/data?fileName=${textValue}`);
//         const data = await response.json();
//
//         dispatch(fetchDataSuccess(data));
//     } catch (error) {
//         dispatch(fetchDataFailure(error.message));
//     }
// };