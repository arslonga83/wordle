import { Square } from './Square'
import { nanoid } from 'nanoid'
import { useEffect } from 'react'

export function Grid(props) {

  useEffect(() => {
    props.setWord(props.getWord())
  }, [])

  return props.guesses.map((guess, index) => {
    return (
      <div className="line" key={nanoid()}>
        <Square id={guess.id} guess={guess.guess}/>
      </div>
    )
  })
}