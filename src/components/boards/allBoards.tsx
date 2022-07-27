import React from 'react'
import { initBoardsType } from '../../App'
import { Board } from './board/board'

type propsType = {
    boards: initBoardsType
}

export const AllBoards: React.FC<propsType> = ({boards}) => {

    return (
        <div>
            {boards.map(board => {
                return <Board title={board.title}/>
            })}
        </div>
    )
}