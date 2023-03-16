import React, { useContext, useState, useEffect } from 'react';
import { getUserFromSession, login } from '../../utilities/user-functions';
import { AppContext } from '../../contexts/app_context';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const nav = useNavigate();
  let { setUser } = useContext(AppContext);

  const [disable, setDisable] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  useEffect(() => {
    setDisable(formData.email && formData.password.length > 5 ? false : true);
  }, [formData]);

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
    setUser(user);
    nav('/');
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
        <button type='submit' disabled={disable}>
          Log In
        </button>
      </form>
    </>
  );
};

export default LoginForm;
