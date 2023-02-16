export function Square(props) {
  return props.guess.map(letter => {
    return <div className="square" style={{backgroundColor: letter.color}}>{letter.letter}</div>
  })
}