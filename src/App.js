import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import AuthPage from './pages/auth';

function App() {
  const [user, setUser] = useState(false);
  const returnPage = () => {
    if (true) {
      return (
        <>
          {user ? (
            <div>
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
