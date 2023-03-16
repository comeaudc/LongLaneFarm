import './App.css';
import { useEffect, useContext, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import AuthPage from './pages/auth';
import { AppContext } from './contexts/app_context';
import { getUserFromSession } from './utilities/user-functions';
import LogOut from './components/logout';
import Spinner from './components/spinner/index';

function App() {
  const [callWasMade, setCallWasMade] = useState(false);
  let { user, setUser } = useContext(AppContext);

  useEffect(() => {
    const getSession = async () => {
      let userResponse = await getUserFromSession();
      setUser(userResponse);
      setCallWasMade(true);
    };
    getSession();
  }, []);

  const returnPage = () => {
    if (callWasMade) {
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
    } else {
      return <Spinner />;
    }
  };
  return <div className='App'>{returnPage()}</div>;
}

export default App;
