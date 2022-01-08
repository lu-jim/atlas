import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const isHome = useLocation();
  const backButtonVisibility = isHome.pathname === '/' ? 'hidden' : 'flex';
  const navStyle = `${backButtonVisibility} bg-indigo-900 text-white justify-between p-6 text-center align-center h-10`;
  return (
    <nav id="navbar" className={navStyle}>
      <div className="flex gap-10 items-center">
        <Link to="/"><h1 className="text-white text-3xl font-bold display-mono"> &lt; </h1></Link>
        <ul className="gap-8 flex self-center">
          <li className="hover:text-orange-300 uppercase tracking-wide ">
            <Link to="/">Atlas</Link>
          </li>
          <li className="hover:text-orange-300 uppercase tracking-wide ">
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
