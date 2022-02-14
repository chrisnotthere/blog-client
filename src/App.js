import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Blog from './components/Blog';
import Admin from './components/Admin';
import AdminDashboard from './components/AdminDashboard';
import CreateBlog from './components/CreateBlog';
import EditBlog from './components/EditBlog';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/create" element={<CreateBlog />} />
          <Route path="/admin/edit/:id" element={<EditBlog />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
