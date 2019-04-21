import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Nav.css';

const Nav = () => {
  return (
    <div className='Nav'>
      <Link to={'/'}>Explore</Link>
      <Link to={'/my-list'}>Rated</Link>
    </div>
  );
};

export default Nav;
