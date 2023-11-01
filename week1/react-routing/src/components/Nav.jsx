import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import style from './Nav.module.css';
import { useSetRecoilState } from 'recoil';
import { pageAtom } from '../atom/pageAtom';

const Nav = () => {
  const setPage = useSetRecoilState(pageAtom);
  const navigate = useNavigate();

  const listClick = () => {
    setPage(0);
    navigate(`/list/page/0`);
  };

  return (
    <div className={style.nav}>
      <Link to='/' className={style.nav_button}>
        Home
      </Link>
      <button onClick={listClick} className={style.nav_button}>
        List
      </button>
      <Link to='/about' className={style.nav_button}>
        About
      </Link>
    </div>
  );
};

export default Nav;
