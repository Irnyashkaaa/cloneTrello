import React from 'react'
import s from './firstBoardComponent.module.css'

type propsType = {
    firstBoard: boolean
    setFirstBoard: (firstBoard: boolean) => void
}

export const FirstBoardComponent: React.FC<propsType> = ({firstBoard, setFirstBoard}) => {

    const clickButton = () => {
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