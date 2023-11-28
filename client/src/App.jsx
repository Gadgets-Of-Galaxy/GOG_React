// import { useState } from 'react'

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

import messagesData from '../DumpDatabase/contactus.json';
import productsData from '../DumpDatabase/products.json';
import usersData from '../DumpDatabase/users.json';
// import wishlists from '../DumpDatabase/wishlists.json';
// import cartsData from '../DumpDatabase/carts.json';
import ordersData from '../DumpDatabase/checkouts.json';
import { Login } from './pages/Login_SignUp/components/Login';
import ProductDetailsPage from './pages/Home/components/ProductDetailsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products/:productId" component={ProductDetailsPage} />
        <Route path="/login" element={<Login/>} />
        <Route path="/myAccount" element={<MyAccount/>} />
        <Route path='/admin' element={<AdminDashboard />} />
        <Route path='/admin/addProduct' element={<AddProduct />} />
        <Route path='/admin/productDetails' element={<Products products={productsData} />}/>
        <Route path='/admin/userDetails' element={<Users users={usersData} />} />
        <Route path='/admin/ordersList' element={<OrdersList orders={ordersData} />} />
        <Route path='/admin/messages' element={<AdminMessages messages={messagesData} />} />
      </Routes>
    </Router>
  )
}

export default App
