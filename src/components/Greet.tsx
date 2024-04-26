import Login from './Login';

const Greet = ({ name }: { name?: string }) => {
  if (name) return <h1>Hello {name}</h1>;
  return <Login />;
};

export default Greet;
