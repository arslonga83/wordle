import { Link } from 'react-router-dom'

export function Home() {
  
  return (
      <div>
        <h1>Welcome to My Wordle Game</h1>
        <p>Click the button to begin.</p>
        <Link to='/game'>Start</Link>
      </div>
    )
}