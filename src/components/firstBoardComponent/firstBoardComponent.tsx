import React from 'react'
import { initBoardsType } from '../../App'
import s from './firstBoardComponent.module.css'

type propsType = {
    firstBoard: boolean
    setFirstBoard: (firstBoard: boolean) => void
    setBoards: (boards: initBoardsType) => void
    boards: initBoardsType | [] 
}

export const FirstBoardComponent: React.FC<propsType> = ({firstBoard, setFirstBoard, boards, setBoards}) => {

    const clickButton = () => {
        const newBoards = [...boards, {title: 'title', doArray: [], isAddingNewTask: false}]
        setBoards(newBoards)
        setFirstBoard(false)
    }

    return (
        <div>
            <button className={s.button} onClick={clickButton}>
                {firstBoard? `Creating a new board...`: `Board meetings`}
            </button>
        </div>
    )
}