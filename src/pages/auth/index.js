import React, { useContext } from 'react';
import { useState } from 'react';
import LoginForm from '../../components/login_form';
import SignUpForm from '../../components/signup_form';
import { AppContext } from '../../contexts/app_context';

const AuthPage = () => {
  const { error } = useContext(AppContext);
  const [newUser, setNewUser] = useState(false);

  const handleClick = () => {
    setNewUser(newUser ? false : true);
  };

  return (
    <section>
      {newUser ? <SignUpForm setNewUser={setNewUser} /> : <LoginForm />}
      <p className='error-message'>&nbsp;{error}</p>
      <small>{newUser ? 'Already have an account? ' : 'No Account? '}</small>
      <button onClick={handleClick}>{newUser ? 'Login' : 'Sign Up'}</button>
    </section>
  );
};

export default AuthPage;
