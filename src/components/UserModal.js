import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#app');

const UserModal = (props) => {
    return (
        <Modal
            isOpen={!!props.expenseModal}
            onRequestClose={props.handleClearUserModal}
            contentLabel="remove user"
            closeTimeoutMS={200}
            className="user-modal"
        >
            <p>Are you sure you want to remove <span>{props.name}</span></p>
            <div className="user-modal__buttons">
                <button className="c-btn c-btn--cancel" onClick={props.handleClearUserModal}>
                    <i className="fa fa-ban" aria-hidden="true"></i>
                    No
                </button>
                <button className="c-btn c-btn--submit" onClick={props.onRemove}>
                    <i className="fa fa-check" aria-hidden="true"></i>
                    Yes
                </button>
            </div>
        </Modal>
    );
};

export default UserModal;