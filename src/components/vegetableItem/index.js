import React from 'react';
import './index.css';
import { useNavigate } from 'react-router-dom';

const VegetableItem = ({ vegData }) => {
  const nav = useNavigate();
  const handleClick = () => {
    console.log(`/vegetables/${vegData._id}`);
  };
  return (
    <div className='veg'>
      <h2>{vegData.name}</h2>
      <button onClick={handleClick}>Edit</button>
    </div>
  );
};

export default VegetableItem;
