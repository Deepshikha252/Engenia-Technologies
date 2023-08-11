import React, { useState } from 'react';
import Card from './Card';

function List({ title }) {
  const [cards, setCards] = useState([]);

  const handleAddCard = (title, description) => {
    // Implement card creation logic and update state
  };

  return (
    <div>
      <h3>{title}</h3>
      <ul>
        {cards.map((card) => (
          <li key={card.id}>{card.title}</li>
        ))}
      </ul>
      <button onClick={() => handleAddCard('New Card', 'Card description')}>
        Add Card
      </button>
    </div>
  );
}

// function List({ title }) {
//   const [cards, setCards] = useState([]);

//   const handleAddCard = (title, description) => {
//     // Implement card creation logic and update state
//   };

//   return (
//     <div>
//       {/* ... (previous JSX) */}
//       <ul>
//         {cards.map((card) => (
//           <li key={card.id}>
//             <Card title={card.title} description={card.description} />
//           </li>
//         ))}
//       </ul>
//       <button onClick={() => handleAddCard('New Card', 'Card description')}>
//         Add Card
//       </button>
//     </div>
//   );
// }


export default List;





// import React, { useState } from 'react';

// function List({ boardId }) {
//   const [lists, setLists] = useState([]);
//   const [newListTitle, setNewListTitle] = useState('');

//   const handleCreateList = () => {
//     // Implement list creation logic using API
//   };

//   return (
//     <div className="list">
//       <h3>Lists</h3>
//       <div className="list-items">
//         {lists.map((list) => (
//           <div key={list.id} className="list-item">
//             {list.title}
//           </div>
//         ))}
//       </div>
//       <div className="list-create">
//         <input
//           type="text"
//           placeholder="Enter list title"
//           value={newListTitle}
//           onChange={(e) => setNewListTitle(e.target.value)}
//         />
//         <button onClick={handleCreateList}>Create List</button>
//       </div>
//     </div>
//   );
// }

// export default List;
