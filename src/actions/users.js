import database from '../firebase/firebase';

export const addUser = (user) => {
    return {
        type: 'ADD_USER',
        user
    }
};

export const startAddUser = (userData = {}) => {
    return (dispatch) => {
        const {
            name = '',
            age = ''
        } = userData;
        const user = { name, age};

        return database.ref('users').push(user).then((ref) => {
            dispatch(addUser({
                id: ref.key,
                ...user
            }));
        });
    };
};

const editUser = (id, updates) => {
    return {
        type: 'EDIT_USER',
        id,
        updates
    }
};

export const startEditUser = (id, updates) => {
    return (dispatch) => {
        return database.ref(`users/${id}`).update(updates).then(() => {
            dispatch(editUser(id, updates));
        });
    };
};

const removeUser = ({id} = {}) => {
    return {
        type: 'REMOVE_USER',
        id
    }
}

export const startRemoveUser = ({ id }) => {
    return (dispatch) => {
        return database.ref(`users/${id}`).remove().then(() => {
            dispatch(removeUser({ id }));
        });
    };
};

const setUsers = (users) => ({
    type: 'SET_USERS',
    users
});

export const startSetUsers = () => {
    return (dispatch) => {
        return database.ref('users').once('value').then((snapshot) => {
            const users = [];

            snapshot.forEach((childSnaphot) => {
                users.push({
                    id: childSnaphot.key,
                    ...childSnaphot.val()
                });
            });

            dispatch(setUsers(users));
        });
    };
};