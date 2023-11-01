import React from 'react';
import { useParams } from 'react-router-dom';

const Item = () => {
  const params = useParams();

  return <div>Item {params.itemId}</div>;
};

export default Item;
