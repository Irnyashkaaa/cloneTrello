import React, { createRef, useState } from 'react'
import { initBoardsType } from '../../../../App'
import s from './toDoItem.module.css'

type propsType = {
    doItem: { isDoDone: boolean, task: string }
    setBoards: (boards: initBoardsType) => void
    boards: initBoardsType | []
    currentBoard: number
    itemIndex: number
    indexBoard: number
    currentItem: { item: { isDoDone: boolean, task: string }, currentItemNumber: number }
    setCurrentItem: (item: { item: { isDoDone: boolean, task: string }, currentItemNumber: number }) => void
    isAddingNewTask: boolean
    setIsAddingNewTask: (isAdding: boolean) => void
}

export const ToDoItem: React.FC<propsType> = ({ doItem, boards, setBoards, currentBoard,
    indexBoard, itemIndex, setCurrentItem, currentItem, isAddingNewTask, setIsAddingNewTask }) => {
    let newBoards = [...boards]


    const changeIsDone = (e: any) => {
        const thisDoItemIsDone = newBoards[indexBoard].doArray[itemIndex].isDoDone
        newBoards[indexBoard].doArray[itemIndex].isDoDone = !thisDoItemIsDone
        setBoards(newBoards)
    }

    const changeTaskPositions = () => {
        newBoards[indexBoard].doArray.splice(currentItem.currentItemNumber, 1)
        newBoards[indexBoard].doArray.splice(itemIndex,0, currentItem.item)
        setBoards(newBoards)
    }

    return (
        <div
            draggable={true}
            onDrop={changeTaskPositions}
            onDragStart={() => setCurrentItem({ item: doItem, currentItemNumber: itemIndex })}
            onClick={changeIsDone}
            className={doItem.isDoDone ? s.itemDone : s.item}>
            {doItem.task}
        </div>
    )
}