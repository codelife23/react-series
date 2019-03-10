export const setName = (name = '') => {
    return {
        type: 'SET_NAME',
        name
    }
};

export const setMinAge = (minAge = '') => {
    return {
            type: 'SET_MIN_AGE',
            minAge
    }
};

export const setMaxAge = (maxAge = '') => ({
    type: 'SET_MAX_AGE',
    maxAge
});

export const setSortBy = (sortBy = '') => ({
    type: 'SET_SORT_BY',
    sortBy
});