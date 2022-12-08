import logo from './logo.svg';
import './App.css';
import Button from './Button'

function App() {
  const clicked = () => {
    return alert ("Button ditekan");
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>React JS</code>
        </p>
        <Button clicked={clicked}></Button>
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
