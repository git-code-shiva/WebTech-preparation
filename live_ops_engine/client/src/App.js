//import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignupForm from './component/signup';
import LoginForm from './component/login';
//import ChangePassword from './component/password';
import PostOffer from './component/offer';
import Cart from './component/cart';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignupForm />} />
          <Route path='/' element={<LoginForm />} />
          <Route path='/admin' element={<PostOffer />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;