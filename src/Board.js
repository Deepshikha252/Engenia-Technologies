import React from 'react';

function BoardList({ boards }) {
  return (
    <div>
      <h2>Boards</h2>
      <ul>
        {boards.map((board) => (
          <li key={board.id}>{board.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default BoardList;


// import React, { useState } from 'react';

// function Board() {
//   const [boards, setBoards] = useState([]);
//   const [newBoardTitle, setNewBoardTitle] = useState('');

//   const handleCreateBoard = () => {
//     // Implement board creation logic using API
//   };

//   return (
//     <div className="board">
//       <h2>Boards</h2>
//       <div className="board-list">
//         {boards.map((board) => (
//           <div key={board.id} className="board-item">
//             {board.title}
//           </div>
//         ))}
//       </div>
//       <div className="board-create">
//         <input
//           type="text"
//           placeholder="Enter board title"
//           value={newBoardTitle}
//           onChange={(e) => setNewBoardTitle(e.target.value)}
//         />
//         <button onClick={handleCreateBoard}>Create Board</button>
//       </div>
//     </div>
//   );
// }

// export default Board;
