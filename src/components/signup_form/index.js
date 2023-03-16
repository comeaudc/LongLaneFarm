import React from 'react';
import { useState, useEffect } from 'react';
import { signUp } from '../../utilities/user-functions';

const SignUpForm = ({ setNewUser }) => {
  const [disable, setDisable] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  useEffect(() => {
    setDisable(
      formData.name &&
        formData.email &&
        formData.password.length > 5 &&
        formData.password2.length > 5
        ? false
        : true
    );
  }, [formData]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      console.log('PW do not match');
    } else {
      await signUp(formData);
      setNewUser(false);
    }
  };

  const { password, password2 } = formData;
  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor='name'>Name:</label>
        <input
          type='text'
          name='name'
          value={formData.name}
          onChange={(e) => handleChange(e)}
          required
        />
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
        <label htmlFor='password2'>Confirm Password:</label>
        <input
          type='password'
          name='password2'
          value={formData.password2}
          onChange={(e) => handleChange(e)}
          required
        />
        <button type='submit' disabled={disable}>
          Sign Up
        </button>
      </form>
    </>
  );
};

export default SignUpForm;
