import logo from './logo.svg';
import './App.css';
import Card from './Card.js'
import './Card.css'
function App() {
  return (
    <div className="App">
      <Card />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Exploring the <span>World Of ReactJs</span>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hello World
        </a>
      </header>
    </div>
  );
}

export default App;
