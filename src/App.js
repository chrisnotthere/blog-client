import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Blog from './components/Blog';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog/:id" element={<Blog />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
