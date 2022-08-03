import { useState } from 'react';
import './App.css';
import { AllBoards } from './components/boards/allBoards';
import { FirstBoardComponent } from './components/firstBoardComponent/firstBoardComponent';

export type boardType = { title: string, doArray: { isDoDone: boolean, task: string }[], isAddingNewTask: boolean }
export type initBoardsType = boardType[]

const App = () => {

  const initBoards: initBoardsType = []

  const [firstBoard, setFirstBoard] = useState<boolean>(true)
  const [boards, setBoards] = useState<initBoardsType | []>(initBoards)
  const [currentBoard, setCurrentBoard] = useState<{ board: boardType, currentBoardNumber: number }>(
    { board: { title: '', doArray: [{ isDoDone: false, task: '' }], isAddingNewTask: false }, currentBoardNumber: 1, }
  )

  return (
    <div className="App">
      <FirstBoardComponent firstBoard={firstBoard} setFirstBoard={setFirstBoard} setBoards={setBoards} boards={boards} />
      <AllBoards currentBoard={currentBoard} setCurrentBoard={setCurrentBoard} setBoards={setBoards} boards={boards} isFirstBoard={!firstBoard} />
    </div>
  );
}

export default App;
