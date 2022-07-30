import React, { createRef, useState } from 'react'
import { initBoardsType } from '../../../../App'

type propsType = {
    doItem: string
    setBoards: (boards: initBoardsType) => void
    boards: initBoardsType | []
    currentBoard: number
}

export const ToDoItem: React.FC<propsType> = ({doItem, boards, setBoards, currentBoard}) => {

    const [isChangingItem, setIsChangingItem] = useState<boolean>(true)
    const inputRef = createRef<any>()

    const addNewToDo = () => {
        let newBoards = [...boards]
        newBoards[currentBoard].doArray.push(inputRef.current.value)
        setBoards(newBoards)
        setIsChangingItem(false)
    }

    return (
        <div>
            {isChangingItem? <input ref={inputRef} onBlur={addNewToDo}/>: doItem}
        </div>
    )
}