import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './Header';
import Aside from './Aside';
import Footer from './Footer';
import { startRemoveUser } from '../actions/users';

class UserPage extends React.Component {
    onRemove = () => {
        this.props.startRemoveUser();
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
                                <ul className="user-page__user">
                                    <li><span>name:</span> {this.props.user.name}</li>
                                    <li><span>age:</span> {this.props.user.age}</li>
                                </ul>
                                
                                <Link className="user-page__edit" to={`${this.props.user.id}/edit`}>
                                    <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                                    Edit
                                </Link>
                                <span className="user-page__remove" onClick={this.onRemove}>
                                    <i className="fa fa-trash-o" aria-hidden="true"></i>
                                    Remove
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
};

const mapStateToProps = (state, props) => {
    return {
        user: state.users.find((user) => {return user.id === props.match.params.id})
    };
};

const mapDispatchToProps = (dispatch, props) => ({
    startRemoveUser: () => dispatch(startRemoveUser({ id: props.match.params.id }))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);