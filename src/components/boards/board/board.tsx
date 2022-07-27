import React from 'react'

type propsType = {
    title: string
}

export const Board: React.FC<propsType> = ({title}) => {
    return (
        <div>
            {title}
        </div>
    )
}