import React from 'react';
import { connect } from 'react-redux';
import UserModal from './UserModal';
import UserListItem from './UserListItem';
import { startRemoveUser } from '../actions/users';
import selectUsers from '../selectors/users';

class UserList extends React.Component {
    state = {
        expenseModal: undefined,
        id: '',
        name: ''
    }
    onAskToRemove = (id, name) => {
        this.setState(() => ({
            expenseModal: true,
            id,
            name
        }));
    };
    onRemove = () => {
        const id = this.state.id;
        this.props.startRemoveUser({ id });
        this.setState(() => ({
            expenseModal: false
        }));
    };
    handleClearUserModal = () => {
        this.setState(() => ({
            expenseModal: false
        }));
    }
    render() {
        return (
            this.props.users.length === 0 ? (
                <div>
                    no users
                </div>
            ) : (
                <div>
                    <ul className="user-list">
                        {this.props.users.map((user) => {
                            return <UserListItem key={user.id} user={{...user}} onAskToRemove={this.onAskToRemove} />
                        })}
                    </ul>

                    <UserModal
                        handleClearUserModal={this.handleClearUserModal}
                        onRemove={this.onRemove}
                        name={this.state.name}
                        expenseModal={this.state.expenseModal}
                    />
                </div>
            )
        );
    }
};

const mapStateToProps = (state) => {
    return {
        users: selectUsers(state.users, state.filters)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        startRemoveUser: ({ id }) => {return dispatch(startRemoveUser({ id }))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);