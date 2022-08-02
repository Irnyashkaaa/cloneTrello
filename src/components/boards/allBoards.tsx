import React from 'react'
import { boardType, initBoardsType } from '../../App'
import { Board } from './board/board'
import s from './board/boards.module.css'

type propsType = {
    boards: initBoardsType
    isFirstBoard: boolean
    setBoards: (boards: initBoardsType) => void
    currentBoard: {board: boardType, currentBoardNumber: number}
    setCurrentBoard: (board: {board: boardType, currentBoardNumber: number}) => void
}

export const AllBoards: React.FC<propsType> = ({boards, isFirstBoard, setBoards, setCurrentBoard, currentBoard}) => {

    return (
        <div className={s.boards}>
            {isFirstBoard? boards.map((board, i)=> {
                return <Board currentBoard={currentBoard} setCurrentBoard={setCurrentBoard} 
                setBoards={setBoards} boards={boards} boardIndex={i} title={board.title} doArray={board.doArray}/>
            }) : '' }
        </div>
    )
}