// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';
import './App.css';
import ExplainBindingsComponent from './components/ExplainBindingsComponent.jsx';

const list = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

// ES6
const isSearched = searchTerm => item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase());

//ES5
// function isSearched(searchTerm) {
//   return function(item) {
//     return item.title.toLowerCase().includes(searchTerm.toLowerCase());
//   }
// }


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      list, searchTerm: '',
    };

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
        <div className="App">
          <ExplainBindingsComponent/>
          <Search/>
          <Table/>
          <form>
            <input type="text"
                   value={searchTerm}
            onChange={this.onSearchChange}/>
          </form>
          {list.filter(isSearched(searchTerm)).map(item =>
                  <div key={item.objectID}>
                    <span>
                    <a href={item.url}>{item.title}</a>
                    </span>
                    <span>{item.author}</span>
                    <span>{item.num_comments}</span>
                    <span>{item.points}</span>
                    <span>
          <button
              onClick={() => this.onDismiss(item.objectID)}
              type="button"
                >
                Отбросить
                </button>
                </span>
                  </div>
          )}
        </div>
    );
  }
}

export default App