import React from 'react';
import {Link, useLocation} from 'react-router-dom';

function Header({loggedIn}){
  const location = useLocation();
  return (
    <header className='header' style={location.pathname='/' && {background: '#F3C1F8'}}>
      <nav className='header__nav'>
        <Link to='' className='header__link'>Фильмы</Link>
        <Link to='' className='header__link'>Сохранённые фильмы</Link>
        <Link to='' className='header__profile'>Аккаунт</Link>
        <button className='header__menu'></button>
      </nav>
    </header>
  )
};

export default Header;
