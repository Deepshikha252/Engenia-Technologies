import React, { useState } from 'react';
import List from './List';

function Board() {
  const [boards, setBoards] = useState([]);
  const [newBoardTitle, setNewBoardTitle] = useState('');

  const handleBoardCreate = () => {
    if (newBoardTitle.trim() !== '') {
      setBoards([...boards, { id: Date.now(), title: newBoardTitle, lists: [] }]);
      setNewBoardTitle('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={newBoardTitle}
        onChange={(e) => setNewBoardTitle(e.target.value)}
        placeholder="Enter board title"
      />
      <button onClick={handleBoardCreate}>Create Board</button>

      <div>
        {boards.map((board) => (
          <div key={board.id}>
            <h2>{board.title}</h2>
            <List boardId={board.id} lists={board.lists} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Board;
