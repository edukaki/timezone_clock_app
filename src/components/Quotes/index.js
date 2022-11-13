import React from 'react'
import './Quotes.css'

const Quotes = (props) => {
    const getQuotes = props.quotes;
    return (
        <div className="c-quotes">
            <p>“{getQuotes.en}”</p>
            <span>{getQuotes.author}</span>
        </div>
    )

}

export default Quotes