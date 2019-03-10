import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Aside from './Aside';
import Footer from './Footer';
import UserListFilters from './UserListFilters';
import UserList from './UserList';


const UserListPage = () => (
    <div>
        <Header />
        <div className="wrapper">
            <div className="structure">
                <div className="aside-here">
                    <Aside />
                </div>
                <div className="content-here">
                    <div className="content">
                        <h1 className="h1 h1--user-list">User List</h1>
                        
                        <Link className="add-user" to="/users/add">
                            <i className="fa fa-user-plus" aria-hidden="true"></i>
                            Add User
                        </Link>

                        <UserListFilters />
                        
                        <UserList />
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
);

export default UserListPage;