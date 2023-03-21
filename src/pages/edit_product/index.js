import React, { useContext } from 'react';
import { AppContext } from '../../contexts/app_context';

const EditProductPage = () => {
  const { selected } = useContext(AppContext);

  const handleChange = () => {};

  const handlePricing = () => {};

  const handleSubmit = () => {};
  return (
    <>
      <h3>New Veggie</h3>
      <div className='formContainer'>
        <div>
          <form>
            <label htmlFor='name'>Name:</label>
            <input
              type='text'
              name='name'
              id='name'
              value={selected.name}
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
                <option value='' disabled hidden>
                  Choose here
                </option>
                <option value='oz'>Ounces</option>
                <option value='lb'>Pounds</option>
              </select>
              <label htmlFor='container' name='container' id='container'>
                Container:
              </label>
              <select name='container' onChange={(e) => handleChange(e)}>
                <option value='' disabled hidden>
                  Choose here
                </option>
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
            <button type='button' onClick={handlePricing}>
              Add Pricing Option
            </button>
            <button type='submit'>Create Veggie</button>
          </form>
        </div>
        <div>
          <h3>Pricing Options:</h3>
          {selected.pricing.length > 0
            ? selected.pricing.map((item, index) => (
                <p key={index}>
                  Size: {item.size} {item.unit} {item.container} for $
                  {item.price} Qty: {item.qty}
                </p>
              ))
            : null}
        </div>
      </div>
    </>
  );
};

export default EditProductPage;
