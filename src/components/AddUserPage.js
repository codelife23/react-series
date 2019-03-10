import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import Aside from './Aside';
import Footer from './Footer';
import UserForm from './UserForm';
import { startAddUser } from '../actions/users';

class AddUserPage extends React.Component {
    onCancel = () => {
        this.props.history.goBack();
    }
    onSubmit = (user) => {
        this.props.startAddUser(user);
        this.props.history.push('/users');
    }
    render() {
        return (
            <div>
                <Header />
                <div className="wrapper">
                    <div className="structure">
                        <div className="aside-here">
                            <Aside />
                        </div>
                        <div className="content-here">
                            <div className="content">
                                <h1 className="h1">Add new user</h1>
                                <UserForm onSubmit={this.onSubmit} onCancel={this.onCancel} />
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        startAddUser: (user) => dispatch(startAddUser(user))
    }
}

export default connect(undefined, mapDispatchToProps)(AddUserPage);