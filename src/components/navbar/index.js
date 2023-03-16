import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../contexts/app_context';
import LogOut from '../logout';
import './index.css';

const NavBar = () => {
  const { user } = useContext(AppContext);

  return (
    <>
      {user ? (
        <nav>
          Private
          <Link className='navItem' to='/'>
            Vegetables
          </Link>
          <LogOut />
        </nav>
      ) : (
        <nav>
          Public
          <Link className='navItem' to='/'>
            Vegetables
          </Link>
          <Link className='navItem' to='/auth'>
            LogIn/Register
          </Link>
        </nav>
      )}
    </>
  );
};

export default NavBar;
