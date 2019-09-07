import React, { Component } from "react";
import Container from "../components/Container/";
import API from "../utils/API";

class Books extends Component {
  state = {
    books: [],
    search: ""
  };

  // searches the GoogleBooks API storing the data in books array
  searchBooks = query => {
    API.searchBooks(query)
      .then(res =>
        this.setState(
          {
            books: res.data.items,
            search: ""
          },
        )
      )
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  // once the search term is submitted, search the GoogleBooks API for the value of `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchBooks(this.state.search);
  };

  // deletes book from database
  deleteBook = id => {
    API.deleteBook(id)
      .catch(err => console.log(err));
  };

  // saves book to database
  handleSaveBook = bookData => {
    API.saveBook(bookData)
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container>
          <h1>Hello World</h1>
  
      </Container>
    );
  }
}

export default Books;
