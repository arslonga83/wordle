import { useState } from 'react'
import { Grid } from './Components/Grid'

function App() {

  const [word, setWord] = useState("HELLO")
  const [guesses, setGuesses] = useState([
    {
      id: 1,
      guess: [
        {
        letter: 'H', 
        color: 'green'
      }, {
        letter: 'E', 
        color: 'yellow'
      },
      {
        letter: 'L', 
        color: 'grey'
      },
      {
        letter: 'L', 
        color: 'grey'
      },
      {
        letter: 'O', 
        color: 'yellow'
      },
    ]
    }, {
      id: 2,
      guess: [
        {
        letter: 'H', 
        color: 'green'
      }, {
        letter: 'E', 
        color: 'yellow'
      },
      {
        letter: 'L', 
        color: 'grey'
      },
      {
        letter: 'L', 
        color: 'grey'
      },
      {
        letter: 'O', 
        color: 'yellow'
      },
    ]
    }, {
      id: 3,
      guess: [
        {
        letter: 'H', 
        color: 'green'
      }, {
        letter: 'E', 
        color: 'yellow'
      },
      {
        letter: 'L', 
        color: 'grey'
      },
      {
        letter: 'L', 
        color: 'grey'
      },
      {
        letter: 'O', 
        color: 'yellow'
      },
    ]
    }, {
      id: 4,
      guess: [
        {
        letter: 'H', 
        color: 'green'
      }, {
        letter: 'E', 
        color: 'yellow'
      },
      {
        letter: 'L', 
        color: 'grey'
      },
      {
        letter: 'L', 
        color: 'grey'
      },
      {
        letter: 'O', 
        color: 'yellow'
      },
    ]
    }, {
      id: 5,
      guess: [
        {
        letter: 'H', 
        color: 'green'
      }, {
        letter: 'E', 
        color: 'yellow'
      },
      {
        letter: 'L', 
        color: 'grey'
      },
      {
        letter: 'L', 
        color: 'grey'
      },
      {
        letter: 'O', 
        color: 'yellow'
      },
    ]
    }, 
    {
      id: 6,
      guess: [
        {
        letter: 'H', 
        color: 'green'
      }, {
        letter: 'E', 
        color: 'yellow'
      },
      {
        letter: 'L', 
        color: 'grey'
      },
      {
        letter: 'L', 
        color: 'grey'
      },
      {
        letter: 'O', 
        color: 'yellow'
      },
    ]
    }, 
    
  ])


  return (
    <div className="App">
      <Grid guesses={guesses}/>

    </div>
  )
}

export default App
