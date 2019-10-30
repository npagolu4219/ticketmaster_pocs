import React, { Component } from 'react';

import '../pages/index.scss';
import AppNavbar from './appNavBar';

const Layout = (props) => (
    <div>
        <AppNavbar />
        {props.children}
    </div>
);

export default Layout;