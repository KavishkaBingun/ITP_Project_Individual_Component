import React from "react";
import {Link} from "react-router-dom";
import logo from '../images/bb.png';
import '../header.css';

function Header(){
    const handleLogout = () => {
      localStorage.removeItem("token");
      window.location = "/";
    }

    return(
      <nav class="nav-header navbar bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img src={logo} alt="Logo" width="30" height="35" class="d-inline-block align-text-top"></img>
            <b> Benthota Bake House</b>
          </a>
          &nbsp;
          <ul className="navbar-links">
            <li><a class="links-li" href="/home"><b>Home</b></a></li>
            <li><a class="links-li" href="#"><b>Our Products</b></a></li>
            <li><a class="links-li" href="#"><b>Services</b></a></li>
            <li><a class="links-li" href="#"><b>Contact</b></a></li>
          </ul> 

          <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="side-nav offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Get Started</h5>
              <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#"><i class="fa-solid fa-chart-simple"></i><b>&nbsp;&nbsp;Dashboard</b></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/viewcustomers"><i class="fa-solid fa-user"></i><b>&nbsp;&nbsp;Users</b></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/viewemployee"><i class="fa-solid fa-users"></i><b>&nbsp;&nbsp;Staff</b></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/allOrders"><i class="fa-solid fa-cart-shopping"></i><b>&nbsp;&nbsp;Orders</b></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/allDistribution"><i class="fa-solid fa-truck"></i><b>&nbsp;&nbsp;Transport</b></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/"><i class="fa-solid fa-calendar"></i><b>&nbsp;&nbsp;Reservations</b></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/viewinventory"><i class="fa-solid fa-store"></i><b>&nbsp;&nbsp;Inventory</b></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/FinanceDashboard"><i class="fa-solid fa-chart-line"></i><b>&nbsp;&nbsp;Finance</b></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/fooddiscount"><i class="fa-solid fa-hand-holding-dollar"></i><b>&nbsp;&nbsp;Loyalty Card Offers</b></a>
                </li>    
              </ul>
              <form class="d-flex mt-3" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button class="search-btn btn btn-outline-info" type="submit">Search</button>
              </form>
              <br/><br/>
              <button className ="logout-btn btn btn-outline-info me-2 align-self-end" style={{background: 'linear-gradient(#F7971E,#FFD200)',width:'110px'}} onClick={handleLogout}>
              <i class="fa-solid fa-right-from-bracket"></i>&nbsp;Log Out
              </button>
            </div> 
          </div>
        </div>
      </nav>
    )
}

export default Header;

