import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom'

class Menu extends Component {
  render() {
    return (
      <header className='menu'>
        <nav>
          <h1>
            <Link to='/'>
              M
              <span className='hideme'>a</span>
              r
              <span className='hideme'>k</span>
              <span className="alt-color">Chambers</span>
            </Link>
          </h1>
          <ul className='nav navbar-nav'>
            <li className='home'>
              <p>
                <NavLink activeClassName='active' exact to='/'>Home</NavLink>
              </p>
            </li>
            <li className='work'>
              <p>
                <NavLink activeClassName='active' to='/work'>Work</NavLink>
              </p>
            </li>
            <li className='contact'>
              <p>
                <NavLink activeClassName='active' to='/contact'>Contact</NavLink>
              </p>
            </li>
          </ul>
        </nav>
    </header>
    );
  }
}

export default Menu;
