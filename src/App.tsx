import { useState } from 'react';
import './App.css';
import { AllBoards } from './components/boards/allBoards';
import { FirstBoardComponent } from './components/firstBoardComponent/firstBoardComponent';

export type initBoardsType = {title: string, do: string[]} []

const App = () => {

  const initBoards: initBoardsType = [
    {
      title: 'enter',
      do: [
        'some',
        'some 2',
        'some 3'
      ]
    },
    {
      title: 'bcvb',
      do: [
        'some',
        'some 2',
        'some 3'
      ]
    }
  ]

  const [firstBoard, setFirstBoard] = useState<boolean>(true)
  const [boards, setBoards] = useState<initBoardsType>(initBoards)

  return (
    <div className="App">
      <FirstBoardComponent firstBoard={firstBoard} setFirstBoard={setFirstBoard} />
      <AllBoards boards={boards} />
    </div>
  );
}

export default App;