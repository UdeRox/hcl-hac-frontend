import { useState } from 'react';
import { useLoginMutation } from '../features/auth/auth';

const Login = () => {
  const [login, { isLoading }] = useLoginMutation();
  const { user, setUser } = useState({});
  const userLogin = async () => {
    try {
      const user = await login({ username: 'udeshika', password: 'test' }).unwrap();
      setUser(user);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <>
      <button type="button" onClick={() => userLogin()}>
        Login
      </button>
    </>
  );
};

export default Login;
