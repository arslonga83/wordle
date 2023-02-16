// move game logic to its own module
// add keyboard layout
// color code keys
// animate keys?
// add more word options
// add landing page route
// store records in local storage
// add login option?


import { useState } from 'react'
import { Grid } from './Components/Grid'
import Confetti from 'react-confetti'

function App() {

  const [guess, setGuess] = useState('')
  const [turn, setTurn] = useState(0)
  const [word, setWord] = useState("HELLO")
  const [guesses, setGuesses] = useState([])
  const [gameOver, setGameOver] = useState(false)

  function handleClick() {
    let newGuessArr = []
    let color = ''
    
    guess.split('').map((letter, index) => {
      if (word.includes(letter.toUpperCase())) {
        if (word[index] === letter.toUpperCase()) {
          color = 'green'
        } else {
          color = 'yellow'
        }
      } else {
        color = 'grey'
      }
      newGuessArr.push({letter: letter.toUpperCase(), color: color})
    })
    setGuesses(prev => {
      return [
        ...prev,
        {
          id: turn,
          guess: newGuessArr
        }
      ]
    }, [])
    setTurn(prev => prev + 1)
    setGuess('')
    if (word === guess.toUpperCase()) {
      document.getElementById('input').disabled = true
      setGameOver(true)
    }
  }

  const handleChange = (event) => {
    setGuess(event.target.value)
  } 

  const handleEnter = e => {
    //it triggers by pressing the enter key
  if (e.key === 'Enter') {
    handleClick();
  }
};

  return (
    <div className="App">
      {gameOver ? <Confetti tweenDuration={100}/> : ''}
      <Grid guesses={guesses}/>
      <input maxLength="5" type="text" placeholder="guess" value={guess} onChange={handleChange} onKeyDown={handleEnter} id="input"></input>
      <button onClick={handleClick}>test</button>
    </div>
  )
}

export default App
