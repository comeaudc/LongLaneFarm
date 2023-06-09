import './App.css';
import { useEffect, useContext, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AppContext } from './contexts/app_context';
import axios from 'axios';

// Pages
import AuthPage from './pages/auth';
import Vegetables from './pages/vegetables/index';
import NewProductPage from './pages/new_product';
import EditProductPage from './pages/edit_product';

import { getUserFromSession } from './utilities/user-functions';
import Spinner from './components/spinner/index';
import NavBar from './components/navbar';
import { AdminRoutes } from './components/adminRoutes';

function App() {
  const [callWasMade, setCallWasMade] = useState(false);
  let { user, setUser, setVeggies } = useContext(AppContext);

  useEffect(() => {
    const getSession = async () => {
      let userResponse = await getUserFromSession();
      setUser(userResponse);
      setCallWasMade(true);
    };
    getSession();
  }, []);

  useEffect(() => {
    const getVeggies = async () => {
      let res = await axios('/api/vegetables');
      setVeggies(res.data);
    };

    getVeggies();
  }, []);

  const returnPage = () => {
    if (callWasMade) {
      return (
        <>
          <NavBar />
          <div id='container'>
            {user ? (
              <Routes>
                <Route path={'/'} element={<Vegetables />} />
                <Route element={<AdminRoutes />}>
                  <Route
                    path={'/create-product'}
                    element={<NewProductPage />}
                  />
                  <Route path={'/edit-product/:id'} element={<EditProductPage />} />
                </Route>
              </Routes>
            ) : (
              <Routes>
                <Route path={'/auth'} element={<AuthPage />} />
                <Route path={'/'} element={<Vegetables />} />
              </Routes>
            )}
          </div>
        </>
      );
    } else {
      return <Spinner />;
    }
  };
  return <div className='App'>{returnPage()}</div>;
}

export default App;
