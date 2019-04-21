import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Nav.css';

const Nav = () => {
  return (
    <div className='Nav'>
      <Link to={'/'}>Rate</Link>
      <Link to={'/my-list'}>myList</Link>
    </div>
  );
};

export default Nav;
