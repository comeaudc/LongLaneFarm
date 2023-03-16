import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../contexts/app_context';
import LogOut from '../logout';

const PrivateNav = () => {
  const { user } = useContext(AppContext);

  return (
    <>
      {user.admin ? (
        <nav>
          Admin
          <Link className='navItem' to='/'>
            Vegetables
          </Link>
          <Link className='navItem' to='/create-product'>
            New product
          </Link>
          <LogOut />
        </nav>
      ) : (
        <nav>
          Private
          <Link className='navItem' to='/'>
            Vegetables
          </Link>
          <LogOut />
        </nav>
      )}
    </>
  );
};

export default PrivateNav;
