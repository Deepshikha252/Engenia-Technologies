import React, { useState } from 'react';
import Card from './Card';

function List({ boardId, lists }) {
  const [newListTitle, setNewListTitle] = useState('');

  const handleListCreate = () => {
    if (newListTitle.trim() !== '') {
      const newList = { id: Date.now(), title: newListTitle, cards: [] };
      const updatedLists = [...lists, newList];
      // Update the lists in the parent component (Board)
    }
  };

  return (
    <div>
      <h3>Board {boardId}</h3>
      <input
        type="text"
        value={newListTitle}
        onChange={(e) => setNewListTitle(e.target.value)}
        placeholder="Enter list title"
      />
      <button onClick={handleListCreate}>Create List</button>

      <div>
        {lists.map((list) => (
          <div key={list.id}>
            <h4>{list.title}</h4>
            <Card listId={list.id} cards={list.cards} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default List;
