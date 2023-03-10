// move game logic to its own module
// add keyboard layout
// color code keys
// animate keys?
// add more word options
// add landing page route
// store records in local storage
// add login option?
import { Route, Routes, Link } from 'react-router-dom'
import { wordData } from './assets/wordData'
import { useState, useEffect } from 'react'
import { Grid } from './Components/Grid'
import { Home } from './Components/Home'
import Confetti from 'react-confetti'

function App() {

  const [name, setName] = useState('Jeff')
  const [guess, setGuess] = useState('')
  const [turn, setTurn] = useState(0)
  const [word, setWord] = useState('')
  const [guesses, setGuesses] = useState([])
  const [gameOver, setGameOver] = useState(false)

  //log out the word once when it updates
  useEffect(() => {
    console.log(word)
  }, [word])
    
  function getWord() {
      const randomIndex = Math.floor(Math.random() * wordData.length)
      return wordData[randomIndex].toUpperCase()
  }

  function handleClick() {
    let newGuessArr = []
    let color = ''
    
    //build a new object for the guess and push to guesses array
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
    setTurn(prev => prev + 1) //not using this yet but could track high scores
    setGuess('')
    // end game if all green
    if (word === guess.toUpperCase()) {
      document.getElementById('input').disabled = true
      document.getElementById('btn').disabled = true
      setGameOver(true)
    }
  }

  function resetGame() {
    setTurn(0)
    // const [word, setWord] = useState('')
    setGuesses([])
    setGameOver(false)
  }

  //track changes in the input field
  const handleChange = (event) => {
    setGuess(event.target.value)
  } 

  //submit guess when user presses enter
  const handleEnter = e => {
  if (e.key === 'Enter') {
    handleClick();
  }
};

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home setName={setName}/>} />

        <Route path='/game' element={<div className="game">
          {gameOver ? <Confetti /> : ''}
          <h1 className="title">{name}'s Wordle Game</h1>
          <Grid guesses={guesses} 
                getWord={getWord} 
                setWord={setWord}/>
          <input maxLength="5" 
                type="text" 
                placeholder="guess" 
                value={guess} 
                onChange={handleChange} 
                onKeyDown={handleEnter} 
                id="input"
                className="input"></input>
          <button className="btn" id="btn" onClick={handleClick}>submit</button>
          <Link to='/' className="link" onClick={resetGame}>quit</Link>
          </div>} 
        />

      </Routes>
    </div>
  )
}

export default App
