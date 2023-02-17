import { Link } from 'react-router-dom'

export function Home() {
  
  return (
      <div className='home'>
        <h1>Welcome to My Wordle Game</h1>
        <p>Click the button to begin.</p>
        <Link to='/game' className='link'>Start</Link>
      </div>
    )
}