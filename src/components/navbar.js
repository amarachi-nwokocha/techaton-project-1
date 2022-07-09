import React from "react";
import logo from '../images/logo.svg'
import '../index.css'
function Navbar() {
    return(
    <nav class="navbar navbar-expand-lg navbar-light ">
  <div class="container my-3">
     <a class="navbar-brand" href="#"> <img src={logo} /></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse d-flex  justify-content-end" id="navbarNav">
      <ul class="navbar-nav d-flex justify-content-end">
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">teams</a>
        </li>
        <li class="nav-item">
          <a class="nav-link ">sign in</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    
    )
}
export default Navbar