import { nanoid } from 'nanoid'

export function Square(props) {
  return props.guess.map(letter => {
    return <div className="square" key={nanoid()} style={{backgroundColor: letter.color}}>{letter.letter}</div>
  })
}