import React, { Component } from 'react';
import './styles.css';

export class ExplainBindingsComponent extends Component {
    constructor(props) {
        super(props);
        this.onClickMe = this.onClickMe.bind(this);
    }
    onClickMe() {
        console.log(this);
    }
    render() {
        return (
            <div className="bind">
            <button
                onClick={this.onClickMe}
                type="button"
            >
                Press here!
            </button>
            </div>
        );
    }
}

export default ExplainBindingsComponent;