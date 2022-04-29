import React, { Component } from 'react';
import { Table, Button, ButtonToolbar } from 'react-bootstrap';

class ExpenseForm extends Component {
  constructor() {
    super();
    this.state = { sortBy: ''};
  }

  render() {
    const exp = this.props.expenses;
    if (this.state.sortBy !== '') {
      exp.sort((a,b) => {
        return a[this.state.sortby] > b[this.state.sortby] ? 1 : -1;
      })
    }

    return (
      <Table striped bordered hover variant="dark" className="mt-5">
        <thead>
          <tr>
            <th> <Button
                variant="success"
                onClick={() => this.setState({ sortBy: 'type' })}
              >Type</Button></th>
            <th>
              <Button
                variant="success"
                onClick={() => this.setState({ sortBy: 'name' })}
                >Name</Button></th>
            <th> <Button
                variant="success"
                onClick={() => this.setState({ sortBy: 'date' })}
                >Date</Button></th>
            <th> <Button
                variant="success"
                onClick={() => this.setState({ sortBy: 'amount' })}
                >Amount</Button></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* Trate de poner esto como un const en el Expense Tracker pero no logre. Ej. const handleSearch = ... 
          Asi como estan los de handleEdit y handleChange.*/}
          {exp.filter((expense) => {
            if(!this.props.filter) return true;
            let name = expense.name.toLowerCase();
            return name.includes(this.props.filter.toLowerCase());
          })
          .map((expense, index) => (
            <tr key={index}>
              <td>{expense.type}</td>
              <td>{expense.name}</td>
              <td>{expense.transactionDate}</td>
              <td>
                <span>$</span>
                {expense.amount}
              </td>
              <td>
                <ButtonToolbar>
                  <Button
                    variant="outline-light"
                    onClick={() => this.props.handleEdit(index)}
                  >
                    E
                  </Button>{' '}
                  |{' '}
                  <Button
                    variant="outline-light"
                    onClick={() => this.props.handleDelete(index)}
                  >
                    X
                  </Button>
                </ButtonToolbar>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      
    );
  }
}

export default ExpenseForm;
