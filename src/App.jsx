import { useState } from 'react'
import { Grid } from './Components/Grid'

function App() {

  const newGuess = [
    ['H', 'F', 'L', 'O', 'L'],
    ['E', 'F', 'A', 'O', 'M'],
    ['I', 'P', 'E', 'O', 'B'],
    ['U', 'A', 'H', 'O', 'F'],
    ['O', 'E', 'L', 'O', 'A'],
    ['H', 'E', 'L', 'L', 'O']]

  const [guess, setGuess] = useState('')
  const [turn, setTurn] = useState(0)
  const [word, setWord] = useState("HELLO")
  const [guesses, setGuesses] = useState([
    {
      id: 1,
      guess: [
        {
        letter: 'H', 
        color: ''
      }, {
        letter: 'E', 
        color: ''
      },
      {
        letter: 'L', 
        color: ''
      },
      {
        letter: 'L', 
        color: ''
      },
      {
        letter: 'O', 
        color: ''
      },
    ]},
  ])



  function handleClick() {
    let newGuessArr = []
    let color = ''
    // newGuess[turn]  
    
    guess.split('').map((letter, index) => {
      if (word.includes(letter)) {
        if (word[index] === letter) {
          color = 'green'
        } else {
          color = 'yellow'
        }
      } else {
        color = 'grey'
      }
      newGuessArr.push({letter: letter, color: color})
    })
    setGuesses(prev => {
      return [
        ...prev,
        {
          id: 2,
          guess: newGuessArr
        }
      ]
    }, [])
    setTurn(prev => prev + 1)
  }

  const handleChange = (event) => {
    setGuess(event.target.value)
    console.log(guess)
  } 

  return (
    <div className="App">
      <Grid guesses={guesses}/>
      <input maxLength="5" type="text" placeholder="guess" value={guess} onChange={handleChange}></input>
      <button onClick={handleClick}>test</button>
    </div>
  )
}

export default App
