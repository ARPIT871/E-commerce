import React from 'react';

const Card = ({ title, imgUrl, addToCart, product, price }) => {
  return (
    <div className='bg-white p-4 shadow-md rounded-md w-1/5 h-1/4 mx-3 my-5'>
      <img src={imgUrl} alt={title} className='w-full h-32 object-cover mb-4 rounded-md' />
      <h1 className='text-lg font-semibold mb-2'>{title}</h1>
      <p className='text-gray-600 text-sm mb-2'>Price: ${price}</p>
      <button
        onClick={() => addToCart(product)}
        className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue'
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Card;
