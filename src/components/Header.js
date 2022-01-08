import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <nav id="navbar" className="bg-white text-slate-500 flex justify-between p-6 text-center align-center h-10">
    <div className="flex gap-10 items-center">
      <h1 className="text-blue-600 text-3xl font-bold"> Atlas </h1>
      <ul className="flex justify-evenly gap-8">
        <li className="hover:text-orange-300 uppercase tracking-wide">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:text-orange-300 uppercase tracking-wide ">
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Header;
