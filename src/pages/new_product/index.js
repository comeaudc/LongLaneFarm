import React, { useState } from 'react';
import CreateVeggie from '../../components/createVeggie_form';

const NewProductPage = () => {
  const [newVeg, setNewVeg] = useState(true);

  const handleProductToggle = () => {
    setNewVeg(newVeg ? false : true);
  };
  return (
    <>
      <h1>New Product Page</h1>
      <button onClick={handleProductToggle}>
        {newVeg ? 'Create CSA' : 'Create Veggie'}
      </button>
      {newVeg ? <CreateVeggie /> : <h3>NewCSA</h3>}
    </>
  );
};

export default NewProductPage;
