import React from 'react';
import './AuthBar.scss';

export class AuthBar extends React.Component {

  constructor(props: any) {
    super(props);
  }

  login = () => {
    console.log('Login clicked');
  };

  render() {
    return <div className="AuthBar">
      <p>Firstname Lastname</p>
      <button onClick={(e) => this.login()}>Login</button>
    </div>;
  }
}
