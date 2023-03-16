import React from 'react';
import { useState } from 'react';
import LoginForm from '../../components/login_form';
import SignUpForm from '../../components/signup_form';

const AuthPage = () => {
  const [newUser, setNewUser] = useState(true);

  const handleClick = () => {
    setNewUser(newUser ? false : true);
  };

  return (
    <section>
      {newUser ? <SignUpForm setNewUser={setNewUser} /> : <LoginForm />}
      <small>{newUser ? 'Already have an account? ' : 'No Account? '}</small>
      <button onClick={handleClick}>{newUser ? 'Login' : 'Sign Up'}</button>
    </section>
  );
};

export default AuthPage;
