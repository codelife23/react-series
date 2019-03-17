const usersReducerDefaultState = [];

export default (state = usersReducerDefaultState, action) => {
    switch(action.type) {
        case 'ADD_USER':
            return [
                ...state,
                action.user
            ];
        case 'EDIT_USER':
            return state.map((user) => {
                if (user.id === action.id) {
                    return {
                        ...user,
                        ...action.updates
                    };
                } else {
                    return user;
                }
            });
        case 'REMOVE_USER':
            return state.filter((user) => user.id !== action.id);
        case 'MULTIPLE_REMOVE_USERS':
            return state.filter((user) => {
                let bool = true;
                action.ids.forEach(id => {
                    if (user.id == id) {
                        bool = false;
                    }
                });

                return bool;
            });
        case 'SET_USERS':
            return action.users;
        default:
            return state;
    }
};