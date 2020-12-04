// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';
import './App.css';
import ExplainBindingsComponent from './components/ExplainBindingsComponent.jsx';
import Search from './components/Search.jsx';
import Table from './components/Table.jsx';
import { list } from './config/config.js'

class App extends Component {
  constructor(props) {
    super(props)

      this.state = {
        list, searchTerm: ''
      }

    this.onSearchChange = this.onSearchChange.bind(this);
    this.onDismiss = this.onDismiss.bind(this);
  };

  onDismiss(id) {
    const isNotId = item => item.objectID !== id;
    const updatedList = this.state.list.filter(isNotId)
    this.setState({ list: updatedList});
  }

  onSearchChange(event) {
    this.setState({ searchTerm: event.target.value });
  }

  render() {
    const { searchTerm, list } = this.state;

    return (
        <div className="page">
        <div className="interactions">
          <ExplainBindingsComponent/>
          <Search
            value={searchTerm}
            onChange={this.onSearchChange}
          />
          </div>
          <Table
            list={list}
            pattern={searchTerm}
            onDismiss={this.onDismiss}
          />
        </div>
    );
  }
}

export default App