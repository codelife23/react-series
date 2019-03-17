import React from 'react';

export default class UserForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: props.user ? props.user.name : '',
            age: props.user ? props.user.age : '',
            nameError: '',
            ageError: ''
        }
    }

    onNameChange = (e) => {
        const name = e.target.value;
        this.setState(() => ({ name }));
    }
    onAgeChange = (e) => {
        const age = e.target.value;
        this.setState(() => ({ age }));
    }
    onCancel = () => {
        this.props.history.goBack();
    }
    onSubmit = (e) => {
        e.preventDefault();
        
        const nameValid = /^[A-Za-z\s]+$/.test(this.state.name);
        const ageValid = /^[1-9]?[0-9]?[0-9]{1}$/.test(this.state.age);
        
        this.setState(() => ({
            nameError: '',
            ageError: ''
        }));

        if (nameValid && ageValid) {
            this.props.onSubmit({
                name: this.state.name,
                age: this.state.age
            });
            this.props.history.goBack();
        } else {
            if (!nameValid) {
                this.setState(() => ({ nameError: 'Provide valid name' }));
            };
            if (!ageValid) {
                this.setState(() => ({ ageError: 'Provide valid age' }));
            };
        };

        
    };
    render() {
        return (
            <form className="user-form" onSubmit={this.onSubmit}>
                {this.state.nameError && <span className="user-form__input-error">{this.state.nameError}</span>}
                <input
                    type="text"
                    placeholder="User name"
                    value={this.state.name}
                    onChange={this.onNameChange}
                />
                {this.state.ageError && <span className="user-form__input-error">{this.state.ageError}</span>}
                <input
                    className="last"
                    type="text"
                    placeholder="User age"
                    value={this.state.age}
                    onChange={this.onAgeChange}
                />

                <div className="buttons">
                    <div className="btn-1">
                        <div className="c-btn c-btn--cancel" onClick={this.onCancel}>
                            <i className="fa fa-ban" aria-hidden="true"></i>
                            Cancel
                        </div>
                    </div>
                    <div className="btn-2">
                        <button className="c-btn c-btn--submit">
                            <i className="fa fa-paper-plane" aria-hidden="true"></i>
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        );
    }
}