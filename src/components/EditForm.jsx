// EditForm.jsx
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  max-width: 300px;
  margin: 20px auto;
  background: linear-gradient(to right, #2196f3, #4caf50); /* Gradient Background */
  padding: 20px; /* Adding padding for a better look */
  border-radius: 8px; /* Adding border-radius for rounded corners */
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  font-size: 16px; /* Adjusting font size */
`;

const Button = styled.button`
  background-color: #2196f3;
  color: white;
  padding: 8px 16px;
  border: none;
  cursor: pointer;
  margin-right: 8px; /* Adding margin for spacing between buttons */
  border-radius: 4px; /* Adding border-radius for rounded corners */
`;

const EditForm = ({ item, onUpdate, onCancel }) => {
  const [editedItemName, setEditedItemName] = useState('');

  useEffect(() => {
    setEditedItemName(item.name);
  }, [item]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Update item
    onUpdate(item.id, editedItemName);
    // Clear the input field
    setEditedItemName('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        value={editedItemName}
        onChange={(e) => setEditedItemName(e.target.value)}
      />
      <Button type="submit">Update Your Team</Button>
      <Button type="button" onClick={onCancel}>
        Cancel
      </Button>
    </Form>
  );
};

export default EditForm;
