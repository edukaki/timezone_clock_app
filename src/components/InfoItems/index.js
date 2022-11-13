import React from 'react'
import './InfoItems.css'

const InfoItems = (props) => {
    return (
        <div>
            <h2 className='c-info-items__title'>{props.title}</h2>
            <span className='c-info-items__description'>{props.description}</span>
        </div>
    )
}

export default InfoItems
