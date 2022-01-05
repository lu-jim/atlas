import React from 'react';
import { BrowserRouter as Link } from 'react-router-dom';

const Header = () => (
  <nav id="navbar" className="bg-white text-slate-500 font-serif flex justify-between p-6 text-center align-baseline">
    <div className="flex gap-10 items-center">
      <h1 className="text-blue-400 text-3xl font-bold"> Atlas </h1>
      <ul className="flex justify-evenly gap-8">
        <li className="hover:text-orange-300 uppercase tracking-wide">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:text-orange-300 uppercase tracking-wide ">
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
    <div className="flex mr-16 self-end">
      <h1> Logo</h1>
    </div>
  </nav>
);

export default Header;
