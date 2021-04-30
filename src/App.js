import './App.css';
import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import CharacterGrid from './components/CharacterGrid'
import axios from 'axios'

const App = () =>{

  // items received from the API request
  const [items, setItems] = useState([])
  // determines if API is loading or if the request is complete, set to isLoading for default
  const [isLoading, setIsLoading] = useState(true)

  // api request 
  useEffect(() => {
    // use asyn await since axios returns a promise
    const fetchItems = async () =>{
      // what is returned from axios and base url
      const result = await axios(`https://www.breakingbadapi.com/api/characters`)

      console.log(result.data)
      
      // set the value of result (the data retrieved from api) as the value for the state items
      setItems(result.data)
      // set isLoading to false because the data has been received so api is no longer loading
      setIsLoading(false)
    }

    // call fetchItems
    fetchItems()

  }, [])

  return(
    <div className='container'>
      <Header />
      <CharacterGrid isLoading={isLoading} items={items}/>
    </div>
  )
}

export default App;
