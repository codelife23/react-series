import React from 'react';
import NavItem from './NavItem';

const Aside = () => (
    <aside className="aside">
        <nav className="nav">
        <ul className="navigation">
            <NavItem to="/">Home</NavItem>
            <NavItem to="/users">Users</NavItem>
        </ul>
        </nav>
    </aside>
);

export default Aside;