import React from 'react';
import './style'

const Foo = (props) => {
  const { title } =  props;
  return (
    <h2>{title}</h2>
  )
}

export default Foo