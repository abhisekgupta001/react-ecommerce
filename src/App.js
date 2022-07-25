import './App.css';
import {Routes, Route} from "react-router-dom"
import Home from './pages/Home';
import Product from './pages/Product';
import Wishlist from './pages/Wishlist';
import Cart from './pages/Cart';
import Account from './pages/Account';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import RequiresAuth from './RequiresAuth';
// import PrivateRoute from './PrivateRoute';

function App(){

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Product/>}/>
        <Route path='/login' element={<Login/>} />
        <Route path='/logout' element={<Home/>} />
        <Route path='/account' element={<RequiresAuth><Account/></RequiresAuth>}/>
        <Route path='/wishlist' element={<RequiresAuth><Wishlist/></RequiresAuth>}/>
        <Route path='/cart' element={<RequiresAuth><Cart/></RequiresAuth>}/>
        {/* <PrivateRoute path="/account" element={<Account/>}/> */}
        {/* <PrivateRoute path="/wishlist" element={<Wishlist/>}/> */}
        {/* <PrivateRoute path="/cart" element={<Cart/>}/> */}
        <Route path='*' element={<NotFound/>}/>
      </Routes>                                                                                                                                                             																			                             
    </div>
  );
}

export default App;
