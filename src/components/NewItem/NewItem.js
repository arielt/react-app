import React, { useState } from 'react';

import './NewItem.css';

const NewItem = props => {
  const [enteredText, setEnteredText] = useState('');

  const addItemHandler = event => {
    event.preventDefault();

    const newItem = {
      id: Math.random().toString(),
      text: enteredText
    }

    setEnteredText('');

    props.onAddItem(newItem);
  };

  const textChangeHandler = event => {
     setEnteredText(event.target.value);
  };

  return (
    <form className="new-item" onSubmit={addItemHandler}>
      <input type="text" value={enteredText} onChange={textChangeHandler}/>
      <button type="submit">Add Item</button>
    </form>
  );
};

export default NewItem;

