import React from 'react';

import './List.css';

const List = props => {
  console.log(props.items)
  return (
    <ul className="list">
      {props.items.map((item) => {
        return <li key={item.id}>{item.text}</li>
      })}
    </ul>
  );
};

export default List;