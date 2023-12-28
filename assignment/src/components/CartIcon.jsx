
import React from 'react';
import { FaShoppingCart } from "react-icons/fa";

const CartIcon = ({ itemCount }) => (
  <div style={{ position: 'relative', display: 'inline-block' }}>

    
    <FaShoppingCart/>

    {/* Item Count */}
    {itemCount > 0 && (
      <div
        style={{
          position: 'absolute',
          top: -20,
          right: -20,
          background: 'red',
          color: 'white',
          borderRadius: '50%',
          padding: '4px 8px',
          fontSize: '14px',
        }}
      >
        {itemCount}
      </div>
    )}
  </div>
);

export default CartIcon;
