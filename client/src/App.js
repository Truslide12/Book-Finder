import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SavedBooks from "./pages/SavedBooks";
import Search from "./pages/Search";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import { Container } from "./components/Grid";
import Jumbotron from "./components/Jumbotron";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Container>
          <Row>
            <Col size="md-12">
              <Jumbotron>
                <h1>(React Google Book Search</h1>
                <p>Search for and save your favorite books</p>
              </Jumbotron>
            </Col>
          </Row>
        </Container>
        <Switch>
          <Route exact path="/search" component={Search} />
          <Route exact path="/savedBooks/" component={SavedBooks} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
