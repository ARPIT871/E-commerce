// src/components/PriceFilter.jsx
import React from 'react';

const PriceFilter = ({ priceFilter, setPriceFilter }) => {
  const handleFilterChange = (value) => {
    setPriceFilter(value);
  };

  return (
    <div className='ml-6'>
      <label>
        <input
          type="radio"
          value="low"
          checked={priceFilter === 'low'}
          onChange={() => handleFilterChange('low')}
          className='ml-5'
        />
        Low Price
      </label>
      <label>
        <input
          type="radio"
          value="high"
          checked={priceFilter === 'high'}
          onChange={() => handleFilterChange('high')}
          className='ml-5'

        />
        High Price
      </label>
      <label>
        <input
          type="radio"
          value=""
          checked={!priceFilter}
          onChange={() => handleFilterChange('')}
          className='ml-5'

        />
        All Prices
      </label>
    </div>
  );
};

export default PriceFilter;
