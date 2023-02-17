import { Link } from 'react-router-dom'

export function Home(props) {
  
  function handleChange(e) {
    props.setName(e.target.value)
  }

  return (
      <div className='home'>
        <h1>Welcome to My Wordle Game</h1>
        <p>Click the button to begin.</p>
        <input  type="text" 
                placeholder="name" 
                onChange={handleChange} 
                id="nameInput"
                className="input"></input>
        <Link to='/game' className='link'>Start</Link>
      </div>
    )
}