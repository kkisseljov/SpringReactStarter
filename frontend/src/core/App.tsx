import React from 'react';
import logo from '../assets/svg/logo.svg';
import './App.scss';
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route
} from 'react-router-dom';
import { SomeItemDetailsPage } from '../pages/some-item-details-page/SomeItemDetailsPage';
import { MainPage } from '../pages/landing-page/MainPage';

//TODO Map routes to a config and move it to separate file
// Will reduce this part, while routes in a config would be much easier to read
// I think it make sense to use React.Fragment inside page components for nested routes
// which should be also mapped in a config
const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        {/* TODO Make a header component and replace <header>.
        Perhaps should be a fragment. Not sure if using <header> is actually required */}
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
