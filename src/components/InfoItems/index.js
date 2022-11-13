import React from 'react'
import './InfoItems.css'

const InfoItems = (props) => {
    return (
        <>
            <h2 className='c-info-items__title'>{props.title}</h2>
            <span className='c-info-items__description'>{props.description}</span>
        </>
    )
}

export default InfoItems
