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
          <Route path="/" component={<Home />} />
          <Route path="/blog/:id" component={<Blog />} />
          <Route path="/admin" component={<Admin />} />
          <Route path="/admin/dashboard" component={<AdminDashboard />} />
          <Route path="/admin/create" component={<CreateBlog />} />
          <Route path="/admin/edit/:id" component={<EditBlog />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
