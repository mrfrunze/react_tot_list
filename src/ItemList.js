import React from 'react';
import LineItem from './LineItem';


const ItemList = ({items, handleChecked, handleDelete}) => {
  return (
    <ul>
        {items.map(item => (
          <LineItem 
            item={item}
            key={item.id}
            handleChecked={handleChecked}
            handleDelete={handleDelete}
          />
        ))}
      </ul>
  )
}

export default ItemList;