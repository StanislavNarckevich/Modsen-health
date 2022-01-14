import './App.css';
import { useCallback, useEffect, useState } from 'react';

function App() {
  const [s, sets] = useState(0);
  const logger = useCallback(() => {
    sets((prevS) => prevS + 1);
  }, []);

  const b = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis debitis eius et iure, obcaecati quaerat sit! Assumenda non nostrum quae tenetur vitae? Adipisci deleniti exercitationem impedit magnam odit quisquam rerum.';
  const a = 'test';
  const c = { a: 'test' };
  useEffect(() => {
    logger();
  }, [logger]);

  return (
    <div className="App">
      {s}
      {a}
      {b}
      <header className="App-header">
        <p>
          Edit
          {' '}
          <code>src/App.js</code>
          {' '}
          and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
