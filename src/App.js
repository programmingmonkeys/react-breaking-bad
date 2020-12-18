import React, { useState, useEffect } from 'react'
import axios from 'axios'

// Components
import { Header, Search, CharacterGrid } from './components'

import './App.css'

const App = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')

  useEffect(() => {
    const fetchItems = async () => {
      const { data } = await axios(`${process.env.REACT_APP_API}?name=${query}`)

      setItems(data)
      setIsLoading(false)
    }

    fetchItems()
  }, [query])

  return (
    <div className="container">
      <Header />
      <Search getQuery={q => setQuery(q)} />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  )
}

export default App
