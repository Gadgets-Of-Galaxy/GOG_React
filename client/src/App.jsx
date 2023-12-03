import { useState, useEffect } from 'react'
// import {useLocation} from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import { Login } from './pages/Login_SignUp/components/Login'
import { Home } from './pages/Home/Home';
import { MyAccount } from './pages/Home/components/MyAccount';
import { AdminDashboard } from './pages/Admin/components/AdminDashboard';
import { AddProduct } from './pages/Admin/components/AddProduct';
import { AdminMessages } from './pages/Admin/components/AdminMessages';
import { Products } from './pages/Admin/components/Products';
import { Users } from './pages/Admin/components/Users';
import { OrdersList } from './pages/Admin/components/OrdersList';
import { Category } from './pages/Home/components/Category';
import {EditProfile } from './pages/Home/components/EditProfile';
import { MyWishlists } from './pages/Home/components/MyWishlists';

import messagesData from '../DumpDatabase/contactus.json';
import productsData from '../DumpDatabase/products.json';
import usersData from '../DumpDatabase/users.json';
// import wishlists from '../DumpDatabase/wishlists.json';
// import cartsData from '../DumpDatabase/carts.json';
import ordersData from '../DumpDatabase/checkouts.json';
import { Login } from './pages/Login_SignUp/components/Login';
import ProductDetailsPage from './pages/Home/components/ProductDetailsPage';
import Categorydata from '../DumpDatabase/categories.json'

import axios from "axios";

function App() {
  const [user, setUser] = useState(null);
  const storedUser = JSON.parse(localStorage.getItem('loggedInUser'));
  const [loginuser, setLoginUser] = useState(storedUser || null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (storedUser) {
      setLoginUser(storedUser);
    }
  }, []);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/users/' + loginuser._id);
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    if (loginuser) {
      fetchUser();
    }
  }, [loginuser]);

  return (
    <Router>
    <div>
      <Routes>
        <Route path="/" element={<Home loginuser={user}/>} />
        <Route path="/login" element={<Login setLoginUser={setLoginUser} />} />
        <Route path="/products/:productId" component={ProductDetailsPage} />
        <Route path="/myAccount" element={<MyAccount user={user}/>} />
        <Route path="/editProfile" element={<EditProfile user={loginuser}/>} />
        <Route path='/wishlist' element={<MyWishlists user={loginuser}/>} />
        <Route path="/category" element={<Category categories={Categorydata} products={productsData}/>} />
        <Route path='/admin' element={<AdminDashboard />} />
        <Route path='/admin/addProduct' element={<AddProduct />} />
        <Route path='/admin/productDetails' element={<Products products={productsData} />}/>
        <Route path='/admin/userDetails' element={<Users users={usersData} />} />
        <Route path='/admin/ordersList' element={<OrdersList orders={ordersData} />} />
        <Route path='/admin/messages' element={<AdminMessages messages={messagesData} />} />
      </Routes>
      </div>
    </Router>
  )
}

export default App
