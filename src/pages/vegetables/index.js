import React, { useContext } from 'react';
import { AppContext } from '../../contexts/app_context'; 

const Veggies = () => {
    let {veggies} = useContext(AppContext)

  return <div>Veggies</div>;
};

export default Veggies;
