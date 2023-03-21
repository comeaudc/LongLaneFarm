import React, { useContext } from 'react';
import './index.css';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../contexts/app_context';

const VegetableItem = ({ vegData }) => {
  const { user, setSelected } = useContext(AppContext);
  const nav = useNavigate();
  const handleClick = () => {
    setSelected(vegData);
    nav(`/edit-product/${vegData._id}`);
  };
  return (
    <div className='veg'>
      <h2>{vegData.name}</h2>
      {user.admin ? <button onClick={handleClick}>Edit</button> : null}
    </div>
  );
};

export default VegetableItem;
