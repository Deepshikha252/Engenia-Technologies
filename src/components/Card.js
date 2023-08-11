import React, { useState } from 'react';

function Card({ listId, cards }) {
  const [newCardTitle, setNewCardTitle] = useState('');
  const [newCardDescription, setNewCardDescription] = useState('');

  const handleCardCreate = () => {
    if (newCardTitle.trim() !== '') {
      const newCard = { id: Date.now(), title: newCardTitle, description: newCardDescription };
      // Update the cards in the parent component (List)
    }
  };

  return (
    <div>
      <input
        type="text"
        value={newCardTitle}
        onChange={(e) => setNewCardTitle(e.target.value)}
        placeholder="Enter card title"
      />
      <textarea
        value={newCardDescription}
        onChange={(e) => setNewCardDescription(e.target.value)}
        placeholder="Enter card description"
      />
      <button onClick={handleCardCreate}>Create Card</button>

      <div>
        {cards.map((card) => (
          <div key={card.id}>
            <strong>{card.title}</strong>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
