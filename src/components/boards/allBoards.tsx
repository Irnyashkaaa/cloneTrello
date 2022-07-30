import React from 'react'
import { initBoardsType } from '../../App'
import { Board } from './board/board'
import s from './board/boards.module.css'

type propsType = {
    boards: initBoardsType
    isFirstBoard: boolean
    setBoards: (boards: initBoardsType) => void
}

export const AllBoards: React.FC<propsType> = ({boards, isFirstBoard, setBoards}) => {

    return (
        <div className={s.boards}>
            {isFirstBoard? boards.map((board, i)=> {
                return <Board setBoards={setBoards} boards={boards} boardIndex={i} title={board.title} doArray={board.doArray}/>
            }) : '' }
        </div>
    )
}