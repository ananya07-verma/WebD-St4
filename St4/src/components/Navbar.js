import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';



class Navbar extends Component {
  render() {
    return (
      // <nav class="navbar" style="background-color: #e3f2fd;">
      <nav class="navbar navbar-expand-lg bg-dark">
        <div class="container-fluid">
          {/* <a class="navbar-brand" href="#">Navbar</a> */}
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">

                {/* logo */}
                <Link class="nav-link active" aria-current="page" to="/home" ><img id="logo" src="https://images-platform.99static.com//f2sZeDTWz0zmbhEKgE20Z5iXLk8=/321x792:1166x1637/fit-in/500x500/99designs-contests-attachments/89/89914/attachment_89914782" alt="HTML tutorial" ></img></Link>
              </li>
              <li id='head'>My World</li>
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/Home">Home</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/About">About</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/ContactUs">ContactUs</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/Login">Login</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/Signup">Signup</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav >
    );
  }
}

export default Navbar;