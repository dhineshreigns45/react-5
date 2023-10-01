// ItemList.js
import React from 'react';
import styled from 'styled-components';

const List = styled.ul`
  list-style: none;
  padding: 0;
  max-width: 300px;
  margin: 20px auto;
  background: linear-gradient(to right, #f44336, #ff5722); /* Gradient Background */
  padding: 20px; /* Adding padding for a better look */
  border-radius: 8px; /* Adding border-radius for rounded corners */
`;

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 8px;
  border-bottom: 1px solid #ddd;
  font-size: 16px; /* Adjusting font size */
`;

const Button = styled.button`
  background-color: #f44336;
  background: linear-gradient(to right, #f44336, #ff5722); /* Gradient Background */
  color: white;
  padding: 8px 16px; /* Adjusting padding */
  border: none;
  cursor: pointer;
  margin-left: 8px; /* Adding margin for spacing between buttons */
  border-radius: 4px; /* Adding border-radius for rounded corners */
`;

const ItemList = ({ items, onDelete, onEdit }) => {
  return (
    <List>
      {items.map((item) => (
        <ListItem key={item.id}>
          {item.name}
          <div>
            <Button onClick={() => onEdit(item.id)}>🖍</Button>
            <Button onClick={() => onDelete(item.id)}>❌</Button>
          </div>
        </ListItem>
      ))}
    </List>
  );
};

export default ItemList;
