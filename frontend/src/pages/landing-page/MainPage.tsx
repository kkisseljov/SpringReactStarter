import React from 'react';

export class MainPage extends React.Component {
  state: any = {};

  constructor(props: any) {
    super(props);
  }

  componentDidMount(): void {
  }

  componentWillUnmount(): void {
  }

  handleClick = (someProp: string) => {
    console.log('Clicked on MainPage:', someProp);
  };

  render() {
    return <a onClick={(e, someProp = 'someProp') => this.handleClick(someProp)}>MainPage</a>
  }
}