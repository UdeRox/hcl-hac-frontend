import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [test, setTest] = useState('test');

  return (
    <>
      <div>HCL FrontEnd</div>
      <h1>Vite + React</h1>
    </>
  );
}

export default App;
