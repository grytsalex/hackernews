import React, { Component } from 'react';


class ExplainBindingsComponent extends Component {
    constructor(props) {
        super(props);
        this.onClickMe = this.onClickMe.bind(this);
    }
    onClickMe() {
        console.log(this);
    }
    render() {
        return (
            <button
                onClick={this.onClickMe}
                type="button"
            >
                Нажми на меня
            </button>
        );
    }
}

export default ExplainBindingsComponent;