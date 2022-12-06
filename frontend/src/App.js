import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome <code>to Cafe Bar</code> management system..
        </p>
        <a
          className="App-link"
          href="http://18.181.80.243:3000/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Manage Menu
        </a>
        <a
          className="App-link"
          href="http://18.183.11.93:3000/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Manage Stock
        </a>
      </header>
    </div>
  );
}

export default App;
