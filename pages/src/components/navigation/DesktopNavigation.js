import React from 'react';
import Link from 'next/link'

import Branding from './Branding';
import { openCrisp } from '../crisp/Crisp';

const DesktopNavigation = () => {
  return (
    <div className="desktop-navigation">
      <ul className="main-navigation-branding">
        <li>
          <Branding />
        </li>
      </ul>
      <ul className="main-navigation-links">
        <li>
          <Link href="/" activeClassName="active">
            <a>
              <div className="nav-link">Home</div>
              <div className="active-bar" />
            </a>
          </Link>
        </li>
        <li>
          <Link href="/daily" activeClassName="active">
            <a>

            <div className="nav-link">Daily</div>
            <div className="active-bar" />
            </a>
          </Link>
        </li>
        <li>
          <Link href="/curriculum" activeClassName="active">
            <a>
            <div className="nav-link">CV</div>
            <div className="active-bar" />
            </a>
          </Link>
        </li>
        <li>
          <Link href="/projects" activeClassName="active">
            <a>
            <div className="nav-link">Projects</div>
            <div className="active-bar" />
            </a>
          </Link>
        </li>
        <li>
          <button className="nav-button" onClick={openCrisp}>
            Contact me
          </button>
        </li>
      </ul>
    </div>
  );
};

export default DesktopNavigation;
