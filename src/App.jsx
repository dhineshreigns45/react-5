// App.js
import React, { useState } from 'react';
import AddForm from './components/AddForm';
import ItemList from './components/ItemList';
import EditForm from './components/EditForm';
import styled from 'styled-components';

const Container = styled.div`
  text-align: center;
  background: linear-gradient(to right, #2196f3, #4caf50); /* Gradient Background */
  background-size: cover; /* Adjusting background size */
  color: white; /* Text color */
  padding: 20px; /* Adding padding for a better look */
`;

const App = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'Dhinesh' },
    { id: 2, name: 'Kumar' },
    // Add more initial items if needed
  ]);

  const [editingItemId, setEditingItemId] = useState(null);

  const handleAddItem = (itemName) => {
    const newItem = {
      id: items.length + 1,
      name: itemName,
    };
    setItems([...items, newItem]);
  };

  const handleDeleteItem = (itemId) => {
    setItems(items.filter((item) => item.id !== itemId));
  };

  const handleEditItem = (itemId) => {
    setEditingItemId(itemId);
  };

  const handleUpdateItem = (itemId, newName) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, name: newName } : item
      )
    );
    setEditingItemId(null);
  };

  const handleCancelEdit = () => {
    setEditingItemId(null);
  };

  return (
    <div className="App">
    <Container>
      <h1>Add Team</h1>
      <AddForm onAdd={handleAddItem} />
      {editingItemId !== null ? (
        <EditForm
          item={items.find((item) => item.id === editingItemId)}
          onUpdate={handleUpdateItem}
          onCancel={handleCancelEdit}
        />
      ) : (
        <ItemList
          items={items}
          onDelete={handleDeleteItem}
          onEdit={handleEditItem}
        />
      )}
    </Container>
    </div>
  );
};

export default App;
