import { useState } from 'react';
import './App.css';
import { AllBoards } from './components/boards/allBoards';
import { FirstBoardComponent } from './components/firstBoardComponent/firstBoardComponent';

export type initBoardsType = {title: string, doArray: string[]} []

const App = () => {

  const initBoards: initBoardsType = []

  const [firstBoard, setFirstBoard] = useState<boolean>(true)
  const [boards, setBoards] = useState<initBoardsType | []>(initBoards)

  return (
    <div className="App">
      <FirstBoardComponent firstBoard={firstBoard} setFirstBoard={setFirstBoard} setBoards={setBoards} boards={boards}/>
      <AllBoards setBoards={setBoards} boards={boards} isFirstBoard={!firstBoard} />
    </div>
  );
}

export default App;
