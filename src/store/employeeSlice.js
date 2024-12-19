import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchEmployees = createAsyncThunk('employees/fetchEmployees', async () => {
  const response = await axios.get('https://dummyjson.com/users'); 
  return response.data.users; 
});

const employeeSlice = createSlice({
  name: 'employees',
  initialState: { data: [], status: 'idle' },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchEmployees.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchEmployees.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchEmployees.rejected, state => {
        state.status = 'failed';
      });
  },
});

export default employeeSlice.reducer;
