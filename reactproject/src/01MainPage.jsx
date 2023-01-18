import React from 'react';
import HeaderFile from './CommonCompo/Headerfile';
import { Outlet } from 'react-router-dom';


const MainPage = () => {
  return (
    <>
      {/* <HeaderFile/> */}
      <Outlet />
      {/* Footer */}
    </>
  );
};

export default MainPage;