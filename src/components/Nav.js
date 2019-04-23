import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Nav.css';

const Nav = () => {
  return (
    <div className='Nav'>
      <NavLink exact to={'/'} activeClassName='active'>
        Explore
      </NavLink>
      <NavLink to={'/my-list'} activeClassName='active'>
        Rated
      </NavLink>
    </div>
  );
};

export default Nav;
