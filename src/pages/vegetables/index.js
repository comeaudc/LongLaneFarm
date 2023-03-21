import React, { useEffect, useContext } from 'react';
import { AppContext } from '../../contexts/app_context';
import VegetableItem from '../../components/vegetableItem';
import axios from 'axios';

const Veggies = () => {
  const { veggies } = useContext(AppContext);

  let veggieList = veggies.map((veg) => {
    return <VegetableItem vegData={veg} key={veg._id} />;
  });
  return <div>{veggieList}</div>;
};

export default Veggies;
