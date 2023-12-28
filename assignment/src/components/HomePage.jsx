// src/components/HomePage.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Card from './Card';
import { useCartContext } from '../context/cartContext';
import CartIcon from './CartIcon';
import PriceFilter from './PriceFilter';

const HomePage = () => {
  const { setCart, cart } = useCartContext();
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [priceFilter, setPriceFilter] = useState('');

  // Fetch products
  useEffect(() => {
    const fetchData = async () => {
      try {
        const productData = await axios.get('https://dummyjson.com/products');
        setProducts(productData.data.products);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchData();
  }, []); // No need to include token in dependency array if it doesn't change

  // Filter products based on search term and price filter
  const filteredProducts = products
    .filter((product) => product.title.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter((product) => {
      if (priceFilter === 'low') {
        return product.price < 50; // Adjust the threshold as needed
      } else if (priceFilter === 'high') {
        return product.price >= 50; // Adjust the threshold as needed
      }
      return true; // Show all prices if no filter selected
    });

  return (
    <div className="w-full h-screen">
      <nav className="w-full h-14 flex justify-between px-10 mt-8">
        <h1 className="text-3xl font-semibold mb-4">Home Page</h1>
        <Link to="/cart" cart={cart}>
          <CartIcon itemCount={cart.length} />
        </Link>
      </nav>

     

      {/* Search input */}
      <input
        type="text"
        placeholder="Search products"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-4/5 p-2 border border-gray-300 rounded mb-4 ml-56"
      />
      <PriceFilter priceFilter={priceFilter} setPriceFilter={setPriceFilter} />


      {/* Display filtered products */}
      <div className="flex flex-wrap -mx-4">
        {filteredProducts.map((product) => (
          <Card
            key={product.id}
            title={product.title}
            addToCart={() => setCart([...cart, product])}
            imgUrl={product.thumbnail}
            price={product.price}
            product={product}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
