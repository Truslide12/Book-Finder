import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";

class Search extends Component {
  state = {
    book: [],
    search: "",
    saved: false
  };
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getBook(this.props.match.params.id)
      .then(res => this.setState({ book: res.data }))
      .catch(err => console.log(err));
  }

  handleFormSubmit = event => {
    event.preventDefault();
    console.log(this.state.Search);
    API.getBooks(this.state.Search)
      .then(res => {
        console.log(res);
        this.setState({ books: res.data })
      })
      .catch(err => console.log(err));
  };
  render() {
    return (
      <div>
        <Container fluid>
          <Row>
            <Col size="md-12">
              <form>
                <Container>
                  <Row>
                    <Col size="xs-9 sm-10">
                      <Input
                        name="bookSearch"
                        value={this.state.bookSearch}
                        onChange={this.handleInputChange}
                        placeholder="Search For a Book"
                      />
                    </Col>
                    <Col size="xs-3 sm-2">
                      <Button onClick={this.handleFormSubmit} type="success" className="input-lg" >
                        Search
                     </Button>
                    </Col>
                  </Row>
                </Container>
              </form>
            </Col>
          </Row>
          <Row>
            <Col size="md-12">
              <h5>Results:</h5>
              {!this.state.books.length ? (
                <h1 className="text-center">No Books to Display</h1>
              ) : (
                  <BookList>
                    {this.state.books.map(book => {
                      return (
                        <BookListItem
                          key={`BookID-${book.volumeInfo.title}`}
                          title={book.volumeInfo.title}
                          href={book.volumeInfo.infoLink}
                          author={book.volumeInfo.authors[0]}
                          description={book.volumeInfo.description}
                          thumbnail={book.volumeInfo.imageLinks.thumbnail}
                          saved={this.state.saved}
                        />
                      );
                    })}
                  </BookList>
                )}
            </Col>
          </Row>
        </Container>
      </div >
    );
  }
}

export default Search;
