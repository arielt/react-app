import logo from './logo.svg';

import React, { useState } from 'react';

import List from './components/List/List';
import NewItem from './components/NewItem/NewItem';
import './App.css';

function App() {
  const [items, setItems] = useState([
    {id: 'i1', text: 'Item 1'},
    {id: 'i2', text: 'Item 2'}
  ]);

  const addNewItemHandler = (newItem) => {
    // setItems(items.concat(newItem));
    setItems((prevItems) => {
      return prevItems.concat(newItem); // execution scheduled in order
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Sample list</h2>
        <NewItem onAddItem={addNewItemHandler}/>
        <List items = {items} />
      </header>
    </div>
  );
}

export default App;
