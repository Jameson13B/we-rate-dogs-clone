import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Nav.css';

const Nav = () => {
  return (
    <div className='Nav'>
      <Link to={'/'}>Rate</Link>
      <Link to={'/'}>Dog List</Link>
    </div>
  );
};

export default Nav;
