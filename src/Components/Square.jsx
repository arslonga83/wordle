export function Square(props) {

  // console.log(props.color)
  return props.guess.map(letter => {
    return <div className="square" style={{backgroundColor: letter.color}}>{letter.letter}</div>
  })
}