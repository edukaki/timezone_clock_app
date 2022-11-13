import React from 'react'
import { useApi } from '../../api/useApi/useApi'
import './Quotes.css'

const Quotes = () => {
    const [getQuotes] = useApi("https://programming-quotes-api.herokuapp.com/quotes/random");
    return (
        <div className="c-quotes">
            <p>“{getQuotes.en}”</p>
            <span>{getQuotes.author}</span>
        </div>
    )

}

export default Quotes