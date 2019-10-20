import React from 'react';
import { SomeItemList } from '../../core/components/SomeItemList/SomeItemList';
import { Item } from '../../core/components/SomeItem/SomeItem';

export class MainPage extends React.Component {
  state: any = {};

  constructor(props: any) {
    super(props);
  }

  componentDidMount(): void {
  }

  componentWillUnmount(): void {
  }

  //Declaring functions like this would automatically bind them to the class
  handleClick = (someProp: string) => {
    console.log('Clicked on MainPage:', someProp);
  };

  render() {
    const someItems: Item[] = [
      { name: 'Name1', varA: 'A', varB: 'B' },
      { name: 'Name2', varA: 'A', varB: 'B' },
      { name: 'Name3', varA: 'A', varB: 'B' },
      { name: 'Name4', varA: 'A', varB: 'B' },
      { name: 'Name5', varA: 'A', varB: 'B' },
      { name: 'Name6', varA: 'A', varB: 'B' },
      { name: 'Name7', varA: 'A', varB: 'B' },
      { name: 'Name8', varA: 'A', varB: 'B' },
      { name: 'Name9', varA: 'A', varB: 'B' },
      { name: 'Name10', varA: 'A', varB: 'B' },
      { name: 'Name11', varA: 'A', varB: 'B' },
      { name: 'Name12', varA: 'A', varB: 'B' },
      { name: 'Name13', varA: 'A', varB: 'B' },
      { name: 'Name14', varA: 'A', varB: 'B' },
      { name: 'Name15', varA: 'A', varB: 'B' },
      { name: 'Name16', varA: 'A', varB: 'B' },
    ];

    return <div>
      Main Page
      <SomeItemList items={someItems} />
    </div>
  }
}
