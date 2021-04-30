import React from 'react'
import CharacterItem from './CharacterItem'
import Spinner from './Spinner'

const CharacterGrid = ({ items, isLoading }) => {
    
    /* loops through the data received from the API and uses ternary operator to determine what to do 
       if isLoading is true or false */
    return (
       isLoading ? <Spinner /> : <section className='cards'> 
            {items.map(item => (
                <CharacterItem key={item.char_id} item={item}> </CharacterItem>
            ))}
        </section>
    )
}

export default CharacterGrid
