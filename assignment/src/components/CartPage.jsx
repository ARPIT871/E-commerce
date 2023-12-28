import React from "react";
import Card from "./Card";
import { useCartContext } from '../context/cartContext';

const CartPage = () => {
  const { cart } = useCartContext();
  const cartCount = cart.length;
  const totalAmount = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-8">Shopping Cart</h1>

      {cart.length === 0 ? (
        <p className="text-lg text-gray-600">Your cart is empty.</p>
      ) : (
        <>
          <div className="flex flex-wrap -mx-4">
            {cart.map((product) => (
              <Card
                key={product.id}
                title={product.title}
                imgUrl={product.thumbnail}
                price={product.price}
                product={product}
              />
            ))}
          </div>

          <div className="mt-8">
            <div className="text-lg font-semibold">Cart Count: {cartCount}</div>
            <div className="text-lg font-semibold">Total Amount: ${totalAmount}</div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
