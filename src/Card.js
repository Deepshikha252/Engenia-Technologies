// import React, { useState } from 'react';

// function Card({ listId }) {
//   const [cards, setCards] = useState([]);
//   const [newCardTitle, setNewCardTitle] = useState('');
//   const [newCardDescription, setNewCardDescription] = useState('');

//   const handleCreateCard = () => {
//     // Implement card creation logic using API
//   };

//   return (
//     <div className="card">
//       <h4>Cards</h4>
//       <div className="card-items">
//         {cards.map((card) => (
//           <div key={card.id} className="card-item">
//             <h5>{card.title}</h5>
//             <p>{card.description}</p>
//           </div>
//         ))}
//       </div>
//       <div className="card-create">
//         <input
//           type="text"
//           placeholder="Enter card title"
//           value={newCardTitle}
//           onChange={(e) => setNewCardTitle(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="Enter card description"
//           value={newCardDescription}
//           onChange={(e) => setNewCardDescription(e.target.value)}
//         />
//         <button onClick={handleCreateCard}>Create Card</button>
//       </div>
//     </div>
//   );
// }

// export default Card;

import React from 'react';

function Card({ title, description }) {
  return (
    <div>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
}

export default Card;

