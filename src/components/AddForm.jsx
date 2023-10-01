// AddForm.js
import React, { useState } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  max-width: 300px;
  margin: 20px auto;
  background: linear-gradient(to right, #4caf50, #2196F3); /* Gradient Background */
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
  background-color: #4caa50;
  background: linear-gradient(to right, #4caf50, #2196F3); /* Gradient Background */
  color: white;
  padding: 10px 20px; /* Adjusting padding */
  border: 5px solid black;
  cursor: pointer;
  font-size: 18px; /* Adjusting font size */
  border-radius: 4px; /* Adding border-radius for rounded corners */
`;

const AddForm = ({ onAdd }) => {
  const [itemName, setItemName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add item to the list
    onAdd(itemName);
    // Clear the input field
    setItemName('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      {/* <Input
        type="number"
        placeholder="Enter Your Eid"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
      /> */}
      <Input
        type="text"
        placeholder="Enter Your Name"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
      />
      <Button type="submit">Add Your Fav Team</Button>
    </Form>
  );
};

export default AddForm;
