import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from './01MainPage';
import AboutCompo from './Aboutus.jsx';
import ContactCompo from './Contact.jsx';
import ApiExample from './ApiExample.jsx';
import Login from './Login';
import Register from './Register.jsx';
import AdminDashboard from './Admin/Dashboard';
import  './Login.css';

const MainRouter = () => {
    const AdminPanel = React.lazy(() => import("./Admin/AdminRouter"));

    return (
        <>
            <Routes>
                <Route path="/" element={<MainPage />} >
                    <Route path="about" element={<AboutCompo />} />
                    <Route path="contact" element={<ContactCompo />} />
                    <Route path="login" element={<Login />} />
                    <Route path="registration" element={<Register />} />
                    <Route path="api-example" element={<ApiExample />} />
                    <Route path="admindashboard" element={<AdminDashboard/>}></Route>
                    {/* <Route path="admin/*" element={<ApiExample />} >
                    </Route> */}
                    <Route path="admin/*" element={<React.Suspense fallback={<h1>Loding...</h1>}> <AdminPanel /></React.Suspense>} />
                </Route>
            </Routes>
        </>
    );
};

export default MainRouter;