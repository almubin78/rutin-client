import React from 'react';
import { Outlet } from 'react-router-dom';
import DatePic from './DatePic';
import Menubar from './Menubar';

const Main = () => {
    return (
        <div>
            <Menubar></Menubar>
            <DatePic></DatePic>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;