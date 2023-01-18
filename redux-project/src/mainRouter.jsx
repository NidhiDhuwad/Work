import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Home from './home.jsx';
import About from './about.jsx';
import Login from './login.jsx';
import Registration from './registration.jsx';
import ViewAllUsers from './viewallusers';
import ViewAllUsersData from './ViewAllUsersData.jsx';
function MainRouter() {
    const AdminCompo = React.lazy(() => import('./component/admin/AdminRouter'));
    return (
        <>
            <Routes>
                <Route  element={<Home />} >

                <Route index  />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} />
                <Route path="/registration" element={<Registration />} />
                <Route path="/allusers" element={<ViewAllUsers />} />
                <Route path="/allusersdata" element={<ViewAllUsersData />} />
                </Route>
                <Route path="admin/*" element={<React.Suspense fallback={<h1>Loding...</h1>}> <AdminCompo /></React.Suspense>} />
            </Routes>
        </>
    );
}

export default MainRouter;