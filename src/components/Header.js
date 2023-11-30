import React from 'react';
import './Header.css';
import { Link, animateScroll as scroll } from 'react-scroll';

function Header() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <nav className="navbar navbar-expand-md navbar-dark">
      <div className="container">
        <a className="navbar-brand" href="#">
          Aain Jutt
        </a>
        <button onClick={scrollToTop}
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="nav-link"
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="nav-link"
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="nav-link"
              >
                Contact
              </Link>
            </li>
          </ul>

          <a
            href="https://drive.google.com/file/d/1miL0QfiIjOtx8jwRjnV-02wcdieyUpm7/view?usp=drive_link"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="sc-fzpans cKJzHK"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Header;
