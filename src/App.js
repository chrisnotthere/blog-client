import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

export default App;
