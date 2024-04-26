import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { apiAuth, User } from './auth';

type AuthState = {
  user: User | null;
  token: string | null;
};

const slice = createSlice({
  name: 'auth',
  initialState: { user: null, token: null } as AuthState,
  reducers: {},
  extraReducers: builder => {
    builder.addMatcher(apiAuth.endpoints.login.matchFulfilled, (state, { payload }) => {
      state.token = payload.token;
      state.user = payload.user;
    });
  }
});

export default slice.reducer;

export const selectCurrentUser = (state: RootState) => state.auth.user;
