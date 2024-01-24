import React from 'react';
import './Navbar.css';

export default function NavBar() {
  return (
    <div className='Nav'>
        <nav>
            Appnotador
            <ul className="navul">
            <li className="crear">Biblioteca</li>
            <li>Registrarse</li>
            <li>Login</li>
            <a href="https://github.com/GROOTScorer/"><img alt="" className='github' width="25px" height="25px" title="Repositorio" src="https://cdn-icons-png.flaticon.com/256/25/25231.png"></img></a>
            </ul>
        </nav>
    </div>
   );
};