import React, { createRef, useState } from 'react'
import { boardType, initBoardsType } from '../../../App'
import s from './boards.module.css'
import { ToDoItem } from './todoItem/todoItem'

type propsType = {
    title: string
    doArray: any[]
    boardIndex: number
    boards: initBoardsType | []
    setBoards: (boards: initBoardsType | []) => void
    currentBoard: { board: boardType, currentBoardNumber: number }
    setCurrentBoard: (board: { board: boardType, currentBoardNumber: number }) => void
}

export const Board: React.FC<propsType> = ({ title, doArray, boardIndex, setBoards, boards, setCurrentBoard, currentBoard }) => {

    const titleInputRef = createRef<any>()
    const taskInputRef = createRef<any>()
    const [isTitleChanging, setIsTitleChanging] = useState<boolean>(true)
    const [isAddingNewTask, setIsAddingNewTask] = useState<boolean>(false)

    let newBoards: initBoardsType = [...boards]

    const titleInputOnfocus = () => {
        newBoards[boardIndex].title = titleInputRef.current.value
        setBoards(newBoards)
        setIsTitleChanging(false)
    }

    const onDragOver = (e: any) => {
        e.preventDefault()
    }

    const onDrop = (e: any) => {
        e.preventDefault()
        newBoards[boardIndex] = currentBoard.board
        newBoards[currentBoard.currentBoardNumber] = boards[boardIndex]
        setBoards(newBoards)
    }

    const [currentItem, setCurrentItem] = useState<{ item: { isDoDone: boolean, task: string }, currentItemNumber: number }>(
        { item: { isDoDone: false, task: 'any' }, currentItemNumber: 1 }
    )

    const addNewTask = () => {
        if (taskInputRef.current.value) {
            newBoards[boardIndex].doArray.push({isDoDone: false, task: taskInputRef.current.value})
        }
        setIsAddingNewTask(false)
    }

    return (
        <div className={s.board}
            draggable={true}
            onDragOver={onDragOver}
            onMouseEnter={() => setCurrentBoard({ board: boards[boardIndex], currentBoardNumber: boardIndex })}
            onDrop={onDrop}>
            <div className={s.title}>
                {isTitleChanging ? <input ref={titleInputRef} onBlur={titleInputOnfocus} autoFocus={true} placeholder='Enter here title..' /> :
                    <div onDoubleClick={() => setIsTitleChanging(true)}>{title ? title : 'Click to change title'}</div>}
            </div>
            <div className={s.boardList}>
                {doArray.map((doItem, i) => {
                    return <ToDoItem currentItem={currentItem} setCurrentItem={setCurrentItem} indexBoard={boardIndex} itemIndex={i}
                        currentBoard={boardIndex} boards={boards} setBoards={setBoards} doItem={doItem} setIsAddingNewTask={setIsAddingNewTask} isAddingNewTask={isAddingNewTask} />
                })}
            </div>
            <div>
                {isAddingNewTask ? <input onBlur={addNewTask} autoFocus={true} ref={taskInputRef} /> : ''}

            </div>
            <button onClick={() => setIsAddingNewTask(true)}>+</button>
        </div>
    )
}