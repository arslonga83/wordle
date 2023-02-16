import { Square } from './Square'

export function Grid(props) {
  return props.guesses.map((guess, index) => {
    return (
      <div className="line">
        <Square id={guess.id} guess={guess.guess}/>
      </div>
    )
  })
}