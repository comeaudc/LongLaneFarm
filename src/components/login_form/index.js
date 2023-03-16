import React from 'react';
import { useState } from 'react';
import { getUserFromSession, login } from '../../utilities/user-functions';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(formData);
    let user = await getUserFromSession();
    console.log(user);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor='email'>Email:</label>
        <input
          type='email'
          name='email'
          value={formData.email}
          onChange={(e) => handleChange(e)}
          required
        />
        <label htmlFor='password'>Password:</label>
        <input
          type='password'
          name='password'
          value={formData.password}
          onChange={(e) => handleChange(e)}
          required
        />
        <button type='submit'>Log In</button>
      </form>
    </>
  );
};

export default LoginForm;
