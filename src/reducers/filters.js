const filtersReducerDefaultState = {
    name: '',
    minAge: '',
    maxAge: '',
    sortBy: ''
};

export default (state = filtersReducerDefaultState, action) => {
    switch(action.type) {
        case 'SET_NAME':
            return {
                ...state,
                name: action.name
            };
        case 'SET_MIN_AGE':
            return {
                ...state,
                minAge: action.minAge
            };
        case 'SET_MAX_AGE':
            return {
                ...state,
                maxAge: action.maxAge
            };
        case 'SET_SORT_BY':
            return {
                ...state,
                sortBy: action.sortBy
            };
        default:
            return state;
    }
};