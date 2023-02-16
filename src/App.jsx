import { useState } from 'react'
import { Grid } from './Components/Grid'

function App() {

  const [guess, setGuess] = useState('')
  const [turn, setTurn] = useState(0)
  const [word, setWord] = useState("HELLO")
  const [guesses, setGuesses] = useState([
    // {
    //   id: 1,
    //   guess: [
    //     {
    //     letter: 'H', 
    //     color: ''
    //   }, {
    //     letter: 'E', 
    //     color: ''
    //   },
    //   {
    //     letter: 'L', 
    //     color: ''
    //   },
    //   {
    //     letter: 'L', 
    //     color: ''
    //   },
    //   {
    //     letter: 'O', 
    //     color: ''
    //   },
    // ]},
  ])

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
          id: 2,
          guess: newGuessArr
        }
      ]
    }, [])
    setTurn(prev => prev + 1)
    setGuess('')
  }

  const handleChange = (event) => {
    setGuess(event.target.value)
    console.log(guess)
  } 

  const handleEnter = e => {
    //it triggers by pressing the enter key
  if (e.key === 'Enter') {
    handleClick();
  }
};

  return (
    <div className="App">
      <Grid guesses={guesses}/>
      <input maxLength="5" type="text" placeholder="guess" value={guess} onChange={handleChange} onKeyDown={handleEnter} id="input"></input>
      <button onClick={handleClick}>test</button>
    </div>
  )
}

export default App
