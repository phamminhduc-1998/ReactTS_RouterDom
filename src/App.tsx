import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import About from './components/About'
import Home from './components/Home'
import User from './components/User'
import UserDetail from './components/UserDetail'

function App() {
  return (

    <Router>
      <div className="App">
        <h3>Logo</h3>
        <ul className="nav-link" >
          <li> <Link to="/home">Home</Link></li>
          <li> <Link to="/about">About</Link></li>
          <li> <Link to="/users">User</Link></li>
        </ul>

      </div>
      

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<User />} />
        <Route path="/users/:id" element={<UserDetail />} />
      </Routes>
    </Router>

  );
}

export default App;


// libiry react router dom: https://v5.reactrouter.com/web/guides/quick-start