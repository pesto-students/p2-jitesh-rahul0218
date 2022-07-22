import React from 'react';

function Header(){
    return <div>
        <header class="header">
            <div class="container flex-between">
            <div class="logo">
                <a href="#">
                 <img src="../img/logo.svg" alt="" /> 
                </a>
            </div>
            <nav class="main-navgation flex-between flex-ver-top">
                <div class="nav-links">
                <a href="#features">Features</a>
                <a href="#pricing">Pricing</a>
                <a href="#resources">Resources</a>
                </div>
                <div class="nav-buttons">
                <a href="#" class="log-in">Login</a>
                <a href="#" class="sign-up btn btn-sm">Sign Up</a>
                </div>
            </nav>
            
            </div>
  </header>
  </div>
}

export default Header;