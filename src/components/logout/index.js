import React, { useContext } from 'react';
import { AppContext } from '../../contexts/app_context';
import { logout } from '../../utilities/user-functions';

const LogOut = () => {
  const { setUser } = useContext(AppContext);

  const logoutUser = async () => {
    await logout();
    setUser(false);
  };
  return (
    <div>
      <button onClick={logoutUser}>Logout</button>
    </div>
  );
};

export default LogOut;
