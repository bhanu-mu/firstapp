import logo from './logo.svg';
import './App.css';
import Car from './app/Car';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <p>
          This is my first React app
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Car />
      </header>
    </div>
  );
}

export default App;
