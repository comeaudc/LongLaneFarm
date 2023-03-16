import { Outlet } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from '../../contexts/app_context';

export const AdminRoutes = () => {
  const { user } = useContext(AppContext);

  return user.admin ? <Outlet /> : <h1>You are not an admin</h1>;
};
