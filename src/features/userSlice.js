import { createSlice } from '@reduxjs/toolkit';
// import { fetchCount } from './counterAPI';

// const initialState = {
//   user: null,
//   status: 'idle',
// };



export const userSlice = createSlice({
  name: 'user',
  initialState : {
    user : null
  },
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    Login: (state , actions) => {
      state.user = actions.payload;
    },
    Logout: (state) => {
      state.user = null;
    },
    incrementByAmount: (state, actions) => {
      state.value += actions.payload;
    },
  },
  
});

export const { Login, Logout } = userSlice.actions;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
