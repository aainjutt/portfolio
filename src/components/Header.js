import React from 'react'
import './Header.css'
import styled from 'styled-components';
function Header() {
    
   
  return (
    <nav className="navbar navbar-expand-md navbar-dark">
    <div className="container">
  
        <a className="navbar-brand" href="#">
            Aain Jutt
        </a>


        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
        </button>

      
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav ml-auto">
                
                <li className="nav-item">
                    <a className="nav-link" href="#">About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Work</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Contact</a>
                </li>
            </ul>
         
            <a href="/asssets/Aain-ur-rehman.pdf" target="_blank" rel="nofollow noopener noreferrer" className="cKJzHK">Resume</a>
        </div>
    </div>
</nav>
  )
}

export default Header