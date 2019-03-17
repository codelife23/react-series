import React from "react";
import { connect } from 'react-redux';
import Header from './Header';
import Aside from './Aside';
import Footer from './Footer';
import UserForm from './UserForm';
import { startEditUser } from '../actions/users';

class EditUserPage extends React.Component {
    onSubmit = (user) => {
        this.props.startEditUser(this.props.user.id, user);
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
                            <h1 className="h1">Edit user</h1>
                            <UserForm
                                user={this.props.user}
                                onSubmit={this.onSubmit}
                                onCancel={this.onCancel}
                                history={this.props.history}
                            />
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
};

const mapStateToProps = (state, props) => {
    return {
        user: state.users.find((user) => user.id === props.match.params.id)
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        startEditUser: (id, user) => dispatch(startEditUser(id, user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditUserPage);