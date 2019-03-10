const selectUsers = (users, {name, minAge, maxAge, sortBy}) => {
    return users.filter((user) => {
        const nameMatch = user.name.toLowerCase().includes(name.toLowerCase());
        const minAgeMatch = minAge ? (minAge <= user.age) : true;
        const maxAgeMatch = maxAge ? (maxAge >= user.age) : true;

        return nameMatch && minAgeMatch && maxAgeMatch;
    }).sort((a, b) => {
        if (sortBy === 'name') {
            return a.name < b.name ? -1 : 1
        }
        if (sortBy === 'age') {
            return a.age < b.age ? -1 : 1
        }
    });
}

export default selectUsers;