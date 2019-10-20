import React from 'react';
import './SomeItemList.scss';
import { Item, SomeItem } from '../SomeItem/SomeItem';

export interface SomeItemListProps {
  items: Item[];
}

export class SomeItemList extends React.Component<SomeItemListProps> {

  render() {
    const { items } = this.props;

    return <div className="SomeItemList">
      { items.map((item: Item) => <SomeItem item={item} />) }
    </div>;
  }
}
