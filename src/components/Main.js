import React from 'react';
import { Outlet } from 'react-router-dom';
import Foot from './Foot';
import Menubar from './Menubar';

const Main = () => {
    return (
        <div>
            <Menubar></Menubar>
            <Outlet></Outlet>
            <Foot></Foot>
        </div>
    );
};

export default Main;