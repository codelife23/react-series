import React from 'react';
import { Router, Route, Switch, Link, NavLink} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import HomePage from '../components/HomePage';
import UserListPage from '../components/UserListPage';
import AddUserPage from '../components/AddUserPage';
import EditUserPage from '../components/EditUserPage';
import UserPage from '../components/UserPage';


export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <Route path="/" component={HomePage} exact={true} />
                <Route path="/users" component={UserListPage} exact={true} />
                <Route path="/users/add" component={AddUserPage} />
                <Route path="/users/:id" component={UserPage} exact={true} />
                <Route path="/users/:id/edit" component={EditUserPage} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;