import { NavLink } from 'react-router-dom';
import React from 'react';

const Navigation = () => {
  return (
    <nav>
      <div className="container">
        <div className="nav-columns">
          <div className="nav-column">
            <div className="nav-label">Menu</div>
            <ul className="nav-links">
              <li>
                <NavLink exact to="/projects">
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/technologies">
                  Technologies
                </NavLink>
              </li>

              <li>
                <NavLink exact to="/about-me">
                  About me
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="nav-column">
            <div className="nav-label">Contact</div>
            <div className="nav-infos">
              <ul className="nav-info">
                <li className="nav-info-label">Email</li>
                <li>
                  <NavLink exact to="/contact">
                    Get in touch with me
                  </NavLink>
                </li>
              </ul>
              <ul className="nav-info">
                <li className="nav-info-label">Phone</li>
                <li>601-956-000</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
