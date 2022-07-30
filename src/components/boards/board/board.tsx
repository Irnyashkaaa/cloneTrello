import React, { createRef, useRef, useState } from 'react'
import { initBoardsType } from '../../../App'
import s from './boards.module.css'
import { ToDoItem } from './todoItem/todoItem'

type propsType = {
    title: string
    doArray: any[]
    boardIndex: number
    boards: initBoardsType | []
    setBoards: (boards: initBoardsType | []) => void
}

export const Board: React.FC<propsType> = ({ title, doArray, boardIndex, setBoards, boards }) => {

    const inputRef = createRef<any>()
    const [isTitleChanging, setIsTitleChanging] = useState<boolean>(true)

    const inputOnfocus = () => {
        let newBoards: initBoardsType = [...boards]
        newBoards[boardIndex].title = inputRef.current.value
        setBoards(newBoards)
        setIsTitleChanging(false)
    }

    const addNewTodo = () => {
        let newBoards: initBoardsType = [...boards]
        newBoards[boardIndex].doArray[0] = 's'
        setBoards(newBoards)
    }

    return (
        <div className={s.board}>
            <div className={s.title}>
                {isTitleChanging ? <input ref={inputRef} onBlur={inputOnfocus} autoFocus={true} placeholder='Enter here title..' /> : 
                <div onDoubleClick={() => setIsTitleChanging(true)}>{title? title: 'Click to change title'}</div>}
            </div>
            <div className={s.boardList}>
                {doArray.map(doItem => {
                    return <ToDoItem currentBoard={boardIndex} boards={boards} setBoards={setBoards} doItem={doItem}/>
                })}
            </div>
            <button onClick={addNewTodo}>+</button>
        </div>
    )
}