import React, { useState } from 'react';
import './App.css';

// Sample API URLs
const REGISTER_API = 'https://long-gray-squid-vest.cyclic.cloud/registerTest';
const LOGIN_API = 'https://long-gray-squid-vest.cyclic.cloud/loginTest';

function App() {
  // Authentication State
  const [authenticated, setAuthenticated] = useState(false);

  // User Registration
  const handleRegister = async () => {
    // Call the registration API and handle the response
    try {
      // Implement the registration logic using the REGISTER_API
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  // User Login
  const handleLogin = async () => {
    // Call the login API and handle the response
    try {
      // Implement the login logic using the LOGIN_API
      // Update the authenticated state on successful login
      setAuthenticated(true);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  // Board Creation State
  const [boards, setBoards] = useState([]);

  // Create a new board
  const createBoard = (title) => {
    const newBoard = { title, lists: [] };
    setBoards([...boards, newBoard]);
  };

  // List Creation and Card Creation States
  const [lists, setLists] = useState([]);

  // Create a new list within a board
  const createList = (boardIndex, title) => {
    const newList = { title, cards: [] };
    const updatedBoards = [...boards];
    updatedBoards[boardIndex].lists.push(newList);
    setBoards(updatedBoards);
  };

  // Create a new card within a list
  const createCard = (boardIndex, listIndex, cardTitle, cardDescription) => {
    const newCard = { title: cardTitle, description: cardDescription };
    const updatedBoards = [...boards];
    updatedBoards[boardIndex].lists[listIndex].cards.push(newCard);
    setBoards(updatedBoards);
  };

  return (
    <div className="App">
      {!authenticated ? (
        <div>
          <button onClick={handleRegister}>Register</button>
          <button onClick={handleLogin}>Login</button>
        </div>
      ) : (
        <div>
          <button onClick={() => createBoard('New Board')}>Create Board</button>
          {boards.map((board, boardIndex) => (
            <div key={boardIndex}>
              <h2>{board.title}</h2>
              <button onClick={() => createList(boardIndex, 'New List')}>
                Create List
              </button>
              {board.lists.map((list, listIndex) => (
                <div key={listIndex}>
                  <h3>{list.title}</h3>
                  <button
                    onClick={() =>
                      createCard(
                        boardIndex,
                        listIndex,
                        'New Card',
                        'Card Description'
                      )
                    }
                  >
                    Create Card
                  </button>
                  {list.cards.map((card, cardIndex) => (
                    <div key={cardIndex}>
                      <p>{card.title}</p>
                      <p>{card.description}</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;




// import React, { useState, useEffect } from 'react';
// import BoardList from './BoardList';

// function App() {
//   const [boards, setBoards] = useState([]);

//   useEffect(() => {
//     // Fetch boards from API and update state
//   }, []);

//   return (
//     <div>
//       {/* Render login and registration forms */}
//       <BoardList boards={boards} />
//     </div>
//   );
// }

// export default App;




// import React from 'react';
// import Board from './components/Board';

// function App() {
//   return (
//     <div>
//       <h1>Task Board App</h1>
//       <Board />
//     </div>
//   );
// }

// export default App;
// import React, { useState } from 'react';
// import './App.css';

// function App() {
//   const [boards, setBoards] = useState([]);
//   const [activeBoardIndex, setActiveBoardIndex] = useState(null);

//   const createBoard = () => {
//     const title = prompt('Enter board title:');
//     if (title) {
//       const newBoard = {
//         title,
//         lists: []
//       };
//       setBoards([...boards, newBoard]);
//     }
//   };

//   const createList = (boardIndex) => {
//     const title = prompt('Enter list title:');
//     if (title) {
//       const newList = {
//         title,
//         cards: []
//       };
//       const updatedBoards = [...boards];
//       updatedBoards[boardIndex].lists.push(newList);
//       setBoards(updatedBoards);
//     }
//   };

//   const createCard = (boardIndex, listIndex) => {
//     const title = prompt('Enter card title:');
//     const description = prompt('Enter card description:');
//     if (title) {
//       const newCard = {
//         title,
//         description
//       };
//       const updatedBoards = [...boards];
//       updatedBoards[boardIndex].lists[listIndex].cards.push(newCard);
//       setBoards(updatedBoards);
//     }
//   };

//   return (
//     <div className="App">
//       <div className="boards">
//         <h2>Boards</h2>
//         <ul>
//           {boards.map((board, index) => (
//             <li key={index} onClick={() => setActiveBoardIndex(index)}>
//               {board.title}
//             </li>
//           ))}
//         </ul>
//         <button onClick={createBoard}>Create Board</button>
//       </div>
//       {activeBoardIndex !== null && (
//         <div className="lists">
//           <h2>Lists</h2>
//           <ul>
//             {boards[activeBoardIndex].lists.map((list, index) => (
//               <li key={index}>
//                 <strong>{list.title}</strong>
//                 <ul>
//                   {list.cards.map((card, cardIndex) => (
//                     <li key={cardIndex}>
//                       <h3>{card.title}</h3>
//                       <p>{card.description}</p>
//                     </li>
//                   ))}
//                 </ul>
//                 <button onClick={() => createCard(activeBoardIndex, index)}>Create Card</button>
//               </li>
//             ))}
//           </ul>
//           <button onClick={() => createList(activeBoardIndex)}>Create List</button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;

// import React, { useState } from 'react';
// import './App.css';
// import SignUp from './SignUp';
// import Login from './Login';

// function App() {
//   const [boards, setBoards] = useState([
//     { title: 'Board 1', lists: [] },
//     { title: 'Board 2', lists: [] }
//   ]);

//   const handleCreateList = (boardIndex, listTitle) => {
//     const updatedBoards = [...boards];
//     updatedBoards[boardIndex].lists.push({ title: listTitle, cards: [] });
//     setBoards(updatedBoards);
//   };

//   const handleCreateCard = (boardIndex, listIndex, cardTitle, cardDescription) => {
//     const updatedBoards = [...boards];
//     updatedBoards[boardIndex].lists[listIndex].cards.push({ title: cardTitle, description: cardDescription });
//     setBoards(updatedBoards);
//   };

//   const handleDragStart = (e, boardIndex, listIndex, cardIndex) => {
//     e.dataTransfer.setData('text/plain', JSON.stringify({ boardIndex, listIndex, cardIndex }));
//   };

//   const handleDrop = (e, targetBoardIndex, targetListIndex) => {
//     const data = JSON.parse(e.dataTransfer.getData('text/plain'));
//     const updatedBoards = [...boards];

//     const card = updatedBoards[data.boardIndex].lists[data.listIndex].cards[data.cardIndex];
//     updatedBoards[data.boardIndex].lists[data.listIndex].cards.splice(data.cardIndex, 1);
//     updatedBoards[targetBoardIndex].lists[targetListIndex].cards.push(card);

//     setBoards(updatedBoards);
//   };

//   return (
//     <div className="App">
//             {/* <SignUp />
//       <Login /> */}

//       <div className="boards">
//         {boards.map((board, boardIndex) => (
//           <div key={boardIndex} className="board">
//             <h2>{board.title}</h2>
//             <div className="lists">
//               {board.lists.map((list, listIndex) => (
//                 <div
//                   key={listIndex}
//                   className="list"
//                   onDrop={(e) => handleDrop(e, boardIndex, listIndex)}
//                   onDragOver={(e) => e.preventDefault()}
//                 >
//                   <h3>{list.title}</h3>
//                   <ul>
//                     {list.cards.map((card, cardIndex) => (
//                       <li
//                         key={cardIndex}
//                         className="card"
//                         draggable
//                         onDragStart={(e) => handleDragStart(e, boardIndex, listIndex, cardIndex)}
//                       >
//                         <h4>{card.title}</h4>
//                         <p>{card.description}</p>
//                       </li>
//                     ))}
//                   </ul>
//                   <button onClick={() => handleCreateCard(boardIndex, listIndex, 'New Card', 'Card Description')}>
//                     Create Card
//                   </button>
//                 </div>
//               ))}
//               <div className="list">
//                 <input
//                   type="text"
//                   placeholder="New List"
//                   onKeyDown={(e) => {
//                     if (e.key === 'Enter') {
//                       handleCreateList(boardIndex, e.target.value);
//                       e.target.value = '';
//                     }
//                   }}
//                 />
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
    
//   );
// }

// export default App;


