import React from 'react';
import { Link } from 'react-router-dom';

class UserListItem extends React.Component {
    onAskToRemove = () => {
        this.props.onAskToRemove(this.props.user.id, this.props.user.name);
    };
    onCheckboxChange = (e) => {
        this.props.onCheckboxChange(e, this.props.user.id);
    }
    render () {
        return (
            <li>
                <span className="user-list__check-wrap">
                    <label className="user-list__check">
                        <input type="checkbox" onChange={this.onCheckboxChange}></input>
                        <span>
                            <i className="fa fa-check" aria-hidden="true"></i>
                        </span>
                    </label>
                </span>
                
                <span className="user-list__name-wrap">
                    <Link className="user-list__name" to={`/users/${this.props.user.id}`}>
                        {this.props.user.name}
                    </Link>
                </span>

                <span className="user-list__btn-wrap">
                    <Link className="user-list__btn-edit" to={`/users/${this.props.user.id}/edit`}>
                        <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                    </Link>
                    <span className="user-list__btn-remove" onClick={this.onAskToRemove}>
                        <i className="fa fa-trash-o" aria-hidden="true"></i>
                    </span>
                </span>
            </li>
        );
    }
};

export default UserListItem;