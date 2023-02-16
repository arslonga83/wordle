import { Square } from './Square'
import { nanoid } from 'nanoid'

export function Grid(props) {
  return props.guesses.map((guess, index) => {
    return (
      <div className="line" key={nanoid()}>
        <Square id={guess.id} guess={guess.guess}/>
      </div>
    )
  })
}