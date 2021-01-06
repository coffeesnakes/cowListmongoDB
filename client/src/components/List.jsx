import React from 'react';
import Entry from './Entry.jsx';

const List = props => {
  return (
    <ul className="cows">

      {props.cows.map((cow) => (

      < Entry key={cow.id} cow={cow} deleteCow={props.deleteCow} editCow={props.editCow} />

      ))}

    </ul>
  )
};

export default List;
