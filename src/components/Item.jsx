import React, { useState } from "react";

const Item = ({ item, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedName, setUpdatedName] = useState(item.name);
  const [updatedStatus, setUpdatedStatus] = useState(item.status);

  const handleSave = () => {
    onEdit(item.id, { name: updatedName, status: updatedStatus });
    setIsEditing(false);
  };

  return (
    <div style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
      <h1>ID: {item.id}</h1>
      {!isEditing ? (
        <>
          <p>Name: {item.name}</p>
          <p>Status: {item.status}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => onDelete(item.id)}>Delete</button>
        </>
      ) : (
        <>
          <input
            type="text"
            value={updatedName}
            onChange={(e) => setUpdatedName(e.target.value)}
          />
          <input
            type="text"
            value={updatedStatus}
            onChange={(e) => setUpdatedStatus(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </>
      )}
    </div>
  );
};

export default Item;
