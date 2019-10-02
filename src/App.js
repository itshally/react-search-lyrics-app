import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import Index from './components/layout/Index';
import Lyrics from './components/tracks/Lyrics';
import Footer from './components/layout/Footer';
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
              <Route exact path="/react-search-lyrics-app/" component={Index}/>
              <Route exact path="/react-search-lyrics-app/lyrics/track/:id" component={Lyrics}/>
            </Switch>
          </Container>
          <Footer/>
        </React.Fragment>
      </Router>
    </Provider>
  );
}

export default App;
