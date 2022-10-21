import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import './index.css'
import Main from './pages/Main.js';
import Home from './pages/Home.js';
import About from './pages/About.js';
import Login from './pages/Login.js';
import Footer from './components/Footer';
import ContactUs from './pages/ContactUs';
import Signup from './pages/Signup';
import PostForm from './pages/PostForm'
import AllPost from './pages/AllPost';
// import UserDashboard from './pages/UserDashboard';


function App() {
  return (
    <Router>
      <div>

        <Route exact path="/" component={Main} />
        <Route exact path="/Home" component={Home} />
        <Route exact path="/About" component={About} />
        <Route exact path="/ContactUs" component={ContactUs} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Signup" component={Signup} />
        <Route exact path="/" component={PostForm} />
        <Route exact path="/gallery" component={AllPost} />
      </div>
    </Router>



  );
}

export default App;
