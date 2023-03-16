import './App.css';
import { useEffect, useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import AuthPage from './pages/auth';
import { AppContext } from './contexts/app_context';
import { getUserFromSession } from './utilities/user-functions';
import LogOut from './components/logout';

function App() {
  let { user, setUser } = useContext(AppContext);

  useEffect(() => {
    const getSession = async () => {
      let userResponse = await getUserFromSession();
      setUser(userResponse);
    };
    getSession();
  }, []);

  const returnPage = () => {
    if (true) {
      return (
        <>
          {user ? (
            <div>
              <LogOut />
              <h1>No Private Routes Yet</h1>
            </div>
          ) : (
            <AuthPage />
          )}
        </>
      );
    }
  };
  return <div className='App'>{returnPage()}</div>;
}

export default App;
