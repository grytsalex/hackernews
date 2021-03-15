// eslint-disable-next-line no-unused-vars
import React, { Component } from "react";
import axios from "axios";

import "./App.css";
import {
  Table,
  ButtonWithLoading,
  ExplainBindingsComponent,
  Search,
} from "./components";
import {
  DEFAULT_QUERY,
  DEFAULT_HPP,
  PATH_BASE,
  PARAM_SEARCH,
  PATH_SEARCH,
  PARAM_PAGE,
  PARAM_HPP,
} from "./consts";

import { updateSearchTopStoriesState } from './helpers'

class App extends Component {
  _isMounted = false;

  constructor(props) {
    super(props);

    this.state = {
      results: null,
      searchKey: "",
      searchTerm: DEFAULT_QUERY,
      error: null,
      isLoading: false,
     
    };

    this.needsToSearchTopStories = this.needsToSearchTopStories.bind(this);
    this.setSearchTopStories = this.setSearchTopStories.bind(this);
    this.getSearchTopStories = this.getSearchTopStories.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
    this.onSearchSubmit = this.onSearchSubmit.bind(this);
    this.onDismiss = this.onDismiss.bind(this);
  }

  needsToSearchTopStories(searchTerm) {
    return !this.state.results[searchTerm];
  }

  setSearchTopStories(result) {
    const { hits, page } = result;

    this.setState(updateSearchTopStoriesState(hits, page));
  }

  onSearchSubmit(event) {
    const { searchTerm } = this.state;

    this.setState({ searchKey: searchTerm });

    if (this.needsToSearchTopStories(searchTerm)) {
      this.getSearchTopStories(searchTerm);
    }
    event.preventDefault();
  }

  onDismiss(id) {
    const { searchKey, results } = this.state;
    const { hits, page } = results[searchKey];

    const isNotId = (item) => item.objectID !== id;
    const updatedHits = hits.filter(isNotId);

    this.setState({
      results: { ...results, [searchKey]: { hits: updatedHits, page } },
    });
  }

  onSearchChange(event) {
    this.setState({ searchTerm: event.target.value });
  }

  getSearchTopStories(searchTerm, page = 0) {
    this.setState({ isLoading: true });

    axios(
      `${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}&${PARAM_PAGE}${page}&${PARAM_HPP}${DEFAULT_HPP}`
    )
      .then((result) => this.setSearchTopStories(result.data))
      .catch((error) => this._isMounted && this.setState({ error }));
  }

  componentDidMount() {
    this._isMounted = true;

    const { searchTerm } = this.state;
    this.setState({ searchKey: searchTerm });
    this.getSearchTopStories(searchTerm);
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    const {
      searchTerm,
      results,
      searchKey,
      error,
      isLoading,
    } = this.state;

    const page =
      (results && results[searchKey] && results[searchKey].page) || 0;

    const list =
      (results && results[searchKey] && results[searchKey].hits) || [];

    return (
      <div className="page">
        <div className="interactions">
          <ExplainBindingsComponent />
          <Search
            value={searchTerm}
            onChange={this.onSearchChange}
            onSubmit={this.onSearchSubmit}
          >
            Search
          </Search>
        </div>
        {error ? (
          <div className="interactions">
            <p>Something went wrong</p>
          </div>
        ) : (
          <Table
            list={list}
            onDismiss={this.onDismiss}
          />
        )}
        <div className="interactions">
          <ButtonWithLoading
            isLoading={isLoading}
            onClick={() => this.getSearchTopStories(searchTerm, page + 1)}
          >
            More stories
          </ButtonWithLoading>
        </div>
      </div>
    );
  }
}

export default App;
