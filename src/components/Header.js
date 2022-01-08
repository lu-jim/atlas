import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const isHome = useLocation();
  const backButtonVisibility = isHome.pathname === '/' ? 'hidden' : 'flex';
  const navStyle = `${backButtonVisibility} bg-sky-900 text-white justify-between p-6 align-baseline w-screen`;
  return (
    <nav id="navbar" className={navStyle}>
      <Link to="/" className="self-start w-60"><h1 className="text-white text-3xl font-bold display-mono"> &lt; </h1></Link>
      <ul className="gap-8 flex self-center">
        <li className="hover:text-orange-300 uppercase tracking-wide ">
          <Link to="/">Atlas</Link>
        </li>
        <li className="hover:text-orange-300 uppercase tracking-wide ">
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
