import { api } from '../../services/api';

export interface User {
  first_name: string;
  last_name: string;
}

export interface UserResponse {
  user: User;
  token: string;
}

export interface LoginRequest {
  username: string;
  password: string;
}

export const apiAuth = api.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation<UserResponse, LoginRequest>({
      query: credentials => ({
        url: 'login',
        method: 'POST',
        body: credentials
      })
    }),
    protected: builder.mutation<{ message: string }, void>({
      query: () => 'protected'
    })
  })
});

export const { useLoginMutation, useProtectedMutation } = apiAuth;
