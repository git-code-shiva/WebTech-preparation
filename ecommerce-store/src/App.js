// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './components/mainPage/mainPage';
import Cart from './components/cart/cart';
import Form from './components/form/form';
import Payment from './components/payment_page/payment';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/form' element={<Form/>} />
        <Route path='payment_page' element={<Payment/>}/>;
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
