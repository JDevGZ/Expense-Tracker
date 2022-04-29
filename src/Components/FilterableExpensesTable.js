import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

import SearchBar from './Search.js';
import ExpensesTable from './ExpenseTable';

class FilterableExpensesTable extends Component {
  constructor() {
    super();
    this.state = { filter: '' };
  }

  render() {
    const setFilter = (text) => {
      this.setState({ filter: text });
    };

    return (
      <Container>
        <SearchBar handleSearch={setFilter} />
        <ExpensesTable
          filter={this.state.filter}
          expenses={this.props.expenses}
          handleEdit={this.props.handleEdit}
          handleDelete={this.props.handleDelete}
          handleSearch={this.props.handleSearch}
        />
      </Container>
    );
  }
}

export default FilterableExpensesTable;
