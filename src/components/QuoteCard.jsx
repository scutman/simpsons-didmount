import React from 'react'

const QuoteCard = ({quotes}) => {
    console.log(quotes)
    return(
        <div>
            <img src={quotes.image} alt=''></img>
            <h1>{quotes.character}</h1>
            <p>{quotes.quote}</p> 
        </div>
    )
}

export default QuoteCard