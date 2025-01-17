import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Public, Login, Home, Product, DetailProduct, FinalRegister, ResetPassword, DetailCart, Cancel, Success, PaymentResult  } from './pages/public';
import { ManageOrders, ManageUsers, Dashboard, CreateProducts, ManageProducts, AdminLayout } from './pages/admin';
import { CheckOut, Personal, MemberLayout } from './pages/member';
import path from './utils/path';
import { getCategories } from './store/app/asyncActions'
import { useDispatch } from 'react-redux'
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

function App() {
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getCategories())
  }, [])

  return (
    <div className="font-main relative">
     <Routes>
        <Route path = {path.PUBLIC} element={<Public />} >
          <Route path = {path.HOME} element={<Home />} />
          <Route path = {path.PRODUCT} element={<Product />} />
          <Route path = {path.DETAIL_PRODUCT} element={<DetailProduct />} />
          <Route path = {path.DETAIL_CART} element={<DetailCart />} />
          <Route path = {path.CHECKOUT} element={<CheckOut />} />
          <Route path = {path.ALL} element={<Home/>} />
          <Route path = {path.PAYMENT_RESULT} element={<PaymentResult />} />
        </Route>
        <Route path = {path.ADMIN} element={<AdminLayout />}>
          <Route path={path.DASHBOARD} element={<Dashboard/>} />
          <Route path={path.MANAGE_ORDERS} element={<ManageOrders/>} />
          <Route path={path.MANAGE_PRODUCTS} element={<ManageProducts/>} />
          <Route path={path.MANAGE_USERS} element={<ManageUsers/>} />
          <Route path={path.CREATE_PRODUCT} element={<CreateProducts/>} />
        </Route>
        <Route path={path.MEMBER} element={<MemberLayout />}>
          <Route path={path.PERSONAL} element={<Personal />}/>
        </Route>
        <Route path = {path.LOGIN} element={<Login />} />
        <Route path = {path.FINAL_REGISTER} element={<FinalRegister />} />
        <Route path = {path.RESET_PASSWORD} element={<ResetPassword/>} />
        <Route path = {path.CANCEL} element={<Cancel/>} />
        <Route path = {path.SUCCESS} element={<Success/>} />
     </Routes>
     <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {/* Same as */}
      <ToastContainer />
    </div>
  );
}

export default App;
