import React from 'react';
import { Outlet } from 'react-router-dom';
import MainHeaderCompo from './MainHeaderCompo';

const Home = () => {
    return (
        <>
          <MainHeaderCompo/>
          <div className="container">
            <Outlet/>
          </div>
        </>
    );
};

export default Home;