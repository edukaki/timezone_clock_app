import React from 'react'
import { useApi } from '../../api/useApi/useApi'

const Quotes = () => {
    const [getQuotes] = useApi("https://programming-quotes-api.herokuapp.com/quotes/random");
    return (
        <div className="c-title">
            <p>“{getQuotes.en}”</p>
            <span>{getQuotes.author}</span>
        </div>
    )

}

export default Quotes