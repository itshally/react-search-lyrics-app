import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import Index from './components/layout/Index';
import { Container } from 'react-bootstrap';
import { Provider } from './context';

function App() {
  return (
    <Provider>
      <Router>
        <React.Fragment>
          <Navbar/>
          <Container>
            <Switch>
              <Route exact path="/" component={Index}/>
            </Switch>
          </Container>
        </React.Fragment>
      </Router>
    </Provider>
  );
}

export default App;
