import React from "react";

function Navigation() {
  return (
    <div className="navigation">
      <input
        type="checkbox"
        className="navigation__checkbox"
        id="navi-toggle"
      />

      <label htmlFor="navi-toggle" className="navigation__button">
        <span className="navigation__icon">&nbsp;</span>
      </label>
      <div className="navigation__background">&nbsp;</div>

      <nav className="navigation__nav">
        <ul className="navigation__list">
          <li className="navigation__item">
            <a href="/" className="navigation__link">
              <span>01</span>Home
            </a>
          </li>
          <li className="navigation__item">
            <a href="/projects" className="navigation__link">
              <span>02</span>Projects
            </a>
          </li>
          <li className="navigation__item">
            <a href="/about" className="navigation__link">
              <span>03</span>About
            </a>
          </li>
          <li className="navigation__item">
            <a href="/jokes" className="navigation__link">
              <span>04</span>Jokes
            </a>
          </li>
          <li className="navigation__item">
            <a href="/contact" className="navigation__link">
              <span>05</span>Contact
            </a>
          </li>
          <li className="navigation__item">
            <a href="/usercards" className="navigation__link">
              <span>06</span>GitHubCards
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
