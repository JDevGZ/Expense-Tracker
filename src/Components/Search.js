import React, { Component } from "react";
import { Container } from "react-bootstrap";

class SearchBar extends Component {
    constructor() {
        super();
    }

    

    render(filterText,) {
       return (
        <Container>
            <input type='text' 
            value={filterText} 
            placeholder='Search...'
            onChange={(e) => this.props.handleSearch(e.target.value)}
        />
        </Container>
       );
    }
}

export default SearchBar;