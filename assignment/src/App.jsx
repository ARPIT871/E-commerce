
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { CartContextProvider } from './context/cartContext';
import Login from './components/Login';
import HomePage from './components/HomePage';
import CartPage from './components/CartPage';

const App = () => {
  const [cookies,setCookies] = useCookies(['authToken']);
  const authToken = cookies.authToken;

  return (
    <BrowserRouter>
      <CartContextProvider>
        <Routes>
          <Route path="/cart" element={authToken ? <CartPage /> : <Navigate to="/" />} />
          <Route exact path="/" element={authToken ? <Navigate to="/home" /> : <Login setCookies={setCookies}/>} />
          <Route path="/home" element={authToken ? <HomePage /> : <Navigate to="/" />} />
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
};

export default App;
