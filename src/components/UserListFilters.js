import React from 'react';
import { connect } from 'react-redux';
import { setName, setMinAge, setMaxAge, setSortBy } from '../actions/filters';

class UserListFilters extends React.Component {
    onNameChange = (e) => {
        const name = e.target.value;
        this.props.setName(name);
    };
    onMinAgeChange = (e) => {
        const minAge = e.target.value;
        this.props.setMinAge(minAge);
    };
    onMaxAgeChange = (e) => {
        const maxAge = e.target.value;
        this.props.setMaxAge(maxAge);
    };
    onSortChange = (e) => {
        const sortBy = e.target.value;
        this.props.setSortBy(sortBy);
    };
    onClear = () => {
        this.props.setName();
        this.props.setMinAge();
        this.props.setMaxAge();
        this.props.setSortBy();
    }
    onFind = () => {
        const name = document.querySelector('.name-input').value;
        this.props.setName(name);
        const minAge = document.querySelector('.min-age-input').value;
        this.props.setMinAge(minAge);
        const maxAge = document.querySelector('.max-age-input').value;
        this.props.setMaxAge(maxAge);
        const sortBy = document.querySelector('.sort-by-select').value;
        this.props.setSortBy(sortBy);
    }
    render() {
        return (
            <div className="user-filters">
                <div className="user-filters__item">
                    <input
                        type="text"
                        className="c-input name-input"
                        value={this.props.filters.name}
                        placeholder="Name"
                        onChange={this.onNameChange}
                    />
                </div>
                <div className="user-filters__item">
                    <select
                        className="c-select sort-by-select"
                        value={this.props.filters.sortBy}
                        onChange={this.onSortChange}
                    >
                        <option value='' disabled>Sort by</option>
                        <option value="age">Age</option>
                        <option value="name">Name</option>
                    </select>
                </div>
                <div className="user-filters__item user-filters__item--age">
                    <input
                        type="text"
                        className="c-input min-age-input"
                        value={this.props.filters.minAge}
                        placeholder="Min. age"
                        onChange={this.onMinAgeChange}
                    />
                </div>
                <div className="user-filters__item user-filters__item--age">
                    <input
                        type="text"
                        className="c-input max-age-input"
                        value={this.props.filters.maxAge}
                        placeholder="Max. age"
                        onChange={this.onMaxAgeChange}
                    />
                </div>
                <div className="user-filters__item user-filters__item--clear">
                    <div onClick={this.onClear}>
                        <i className="fa fa-times" aria-hidden="true"></i><span>Clear</span>
                    </div>
                </div>
                <div className="user-filters__item user-filters__item--find">
                    <div onClick={this.onFind}>
                        <i className="fa fa-search" aria-hidden="true"></i><span>Find</span>
                    </div>
                </div>
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setName: (name) => dispatch(setName(name)),
        setMinAge: (minAge) => dispatch(setMinAge(minAge)),
        setMaxAge: (maxAge) => dispatch(setMaxAge(maxAge)),
        setSortBy: (sortBy) => dispatch(setSortBy(sortBy))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UserListFilters);