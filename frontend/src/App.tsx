import React from 'react';
import logo from './logo.svg';
import './App.css';
import { MainPage } from './pages/landing-page/MainPage';
import { SomeItemDetailsPage } from './pages/some-item-details-page/SomeItemDetailsPage';
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route
} from 'react-router-dom';



/*
CONTENTS OF HEADER IN STARTER

<img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
 */

//TODO Map routes to a config and move it to separate file
// Will reduce this part, while routes in a config would be much easier to read
// I think it make sense to use React.Fragment inside page components for nested routes
// which should be also mapped in a config
const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        {/* TODO Make a header component and replace <header> */}
      </header>
      <Router>
        <div style={{display: 'flex'}}>
          <nav style={{display: 'inline-flex'}}>
            <Link to={'/'}>Home</Link>
            <Link to={'/some-item-details'}>Item details</Link>
          </nav>

          <Switch>
            <Route path={'/some-item-details'}>
              <SomeItemDetailsPage/>
            </Route>
            <Route path={'/'}>
              <MainPage/>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
