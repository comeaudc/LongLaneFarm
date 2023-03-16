import axios from 'axios';
import React, { useEffect, useState } from 'react';

const CreateVeggie = () => {
  const [disable, setDisable] = useState(true);
  const [unitPricing, setUnitPricing] = useState({
    size: '',
    unit: '',
    container: '',
    price: '',
    qty: '',
  });
  const [formData, setFormData] = useState({
    name: '',
    pricing: [],
  });

  useEffect(() => {
    setDisable(formData.name ? false : true);
  }, [formData]);

  const handleChange = (e) => {
    let target = e.target.name;
    if (target === 'name') {
      setFormData({
        ...formData,
        [target]: e.target.value,
      });
    } else {
      setUnitPricing({
        ...unitPricing,
        [target]: e.target.value,
      });
    }
    console.log(formData);
    console.log(unitPricing);
  };

  const handlePricing = () => {
    setFormData({
      ...formData,
      pricing: [...formData.pricing, unitPricing],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let res = await axios({
      method: 'POST',
      url: '/api/vegetables',
      data: formData,
    });
    console.log(res);
  };

  return (
    <>
      <h3>New Veggie</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Name:</label>
        <input
          type='text'
          name='name'
          id='name'
          value={formData.name}
          onChange={(e) => handleChange(e)}
          required
        />
        <label htmlFor='pricing'>Pricing:</label>
        <div>
          <label htmlFor='size'>Size:</label>
          <input
            type='number'
            name='size'
            id='size'
            onChange={(e) => handleChange(e)}
          />
          <label htmlFor='unit' name='unit' id='unit'>
            Unit:
          </label>
          <select name='unit' onChange={(e) => handleChange(e)}>
            <option value='oz'>Ounces</option>
            <option value='lb'>Pounds</option>
          </select>
          <label htmlFor='container' name='container' id='container'>
            Container:
          </label>
          <select name='container' onChange={(e) => handleChange(e)}>
            <option value='box'>Box</option>
            <option value='bag'>Bag</option>
          </select>
          <label htmlFor='price'>Price:</label>
          <input
            type='number'
            name='price'
            id='price'
            onChange={(e) => handleChange(e)}
          />
          <label htmlFor='qty'>Quantity:</label>
          <input
            type='number'
            name='qty'
            id='qty'
            onChange={(e) => handleChange(e)}
          />
        </div>
        <button onClick={handlePricing}>Add Pricing Option</button>
        <button type='submit' disabled={disable}>
          Create Veggie
        </button>
      </form>
      <div>
        {formData.pricing.length > 0
          ? formData.pricing.map((item, index) => (
              <p key={index}>
                Size: {item.size} {item.unit} {item.container} for ${item.price}{' '}
                Qty: {item.qty}
              </p>
            ))
          : null}
      </div>
    </>
  );
};

export default CreateVeggie;
