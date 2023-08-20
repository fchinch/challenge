import { createSlice } from '@reduxjs/toolkit';

const filesSliceReducer = createSlice({
  name: 'files',
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {
    fetchDataStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchDataSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    fetchDataFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchDataStart, fetchDataSuccess, fetchDataFailure } = filesSliceReducer.actions;

export default filesSliceReducer;
