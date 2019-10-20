import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.scss';

export class NavBar extends React.Component {
  state: any = {};

  constructor(props: any) {
    super(props);
  }

  render() {
    return <nav className="NavBar">
      <Link to={'/'}>Home</Link>
      <Link to={'/some-item-details'}>Item details</Link>
    </nav>;
  }
}
