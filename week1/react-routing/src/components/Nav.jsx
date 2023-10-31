import React from 'react';
import { Link } from 'react-router-dom';
import style from './Nav.module.css';

const Nav = () => {
  return (
    <div className={style.nav}>
      <Link to='/' className={style.nav_button}>
        Home
      </Link>
      <Link to='/list' className={style.nav_button}>
        List
      </Link>
      <Link to='/about' className={style.nav_button}>
        About
      </Link>
    </div>
  );
};

export default Nav;
