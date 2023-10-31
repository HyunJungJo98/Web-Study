import React from 'react';
import { useParams } from 'react-router-dom';

const Item = () => {
  const params = useParams();

  console.log(params);
  return <div>Item {params.itemId}</div>;
};

export default Item;
