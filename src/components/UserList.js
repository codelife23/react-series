import React from 'react';
import { connect } from 'react-redux';
import UserModal from './UserModal';
import UserListItem from './UserListItem';
import { startRemoveUser, startMultipleRemoveUser } from '../actions/users';
import selectUsers from '../selectors/users';

class UserList extends React.Component {
    state = {
        expenseModal: undefined,
        id: '',
        name: '',
        selectedIds: []
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
    afterCheckboxChange = () => {
        const multipleDelBtn = document.getElementsByClassName('user-list-button__delete')[0];

        this.state.selectedIds.length ? multipleDelBtn.style.display = "block" : multipleDelBtn.style.display = "none";
    };
    onCheckboxChange = (e, id) => {
        const checked = e.target.checked;
        if (checked) {
            this.setState((prevState) => ({
                selectedIds: prevState.selectedIds.concat(id)
            }), this.afterCheckboxChange);
        } else {
            this.setState((prevState) => {
                for( let i = 0; i < prevState.selectedIds.length; i++){ 
                    if ( prevState.selectedIds[i] == id) {
                        const idsArr = prevState.selectedIds;
                        idsArr.splice(i, 1);
                        return {selectedIds: idsArr}
                    }
                 }
            }, this.afterCheckboxChange);
        }
    };
    onMultipleRemove = () => {
        this.props.startMultipleRemoveUser(this.state.selectedIds);
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
                    <div className="user-list-button">
                        <div
                            className="user-list-button__delete"
                            onClick={this.onMultipleRemove}
                        >
                            <i className="fa fa-trash-o" aria-hidden="true"></i>
                        </div>
                    </div>

                    <ul className="user-list">
                        {this.props.users.map((user) => {
                            return <UserListItem
                                        key={user.id}
                                        user={{...user}}
                                        onAskToRemove={this.onAskToRemove}
                                        onCheckboxChange={this.onCheckboxChange}
                                    />
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
        startRemoveUser: ({ id }) => {return dispatch(startRemoveUser({ id }))},
        startMultipleRemoveUser: (ids) => {return dispatch(startMultipleRemoveUser(ids))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);