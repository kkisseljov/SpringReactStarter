import React from 'react';
import './SomeItem.scss';

export interface Item {
  name: string;
  varA: string;
  varB: string;
}

export interface SomeItemProps {
  item: Item;
}

export class SomeItem extends React.Component<SomeItemProps> {

  render() {
    const { item } = this.props;

    return <div className="SomeItem">
      <p>Name: {item.name}</p>
      <p>VarA: {item.varA}</p>
      <p>VarB: {item.varB}</p>
    </div>;
  }
}
