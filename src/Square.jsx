function Square({val, handler}) {
  return (
    <button className="square" onClick={handler}>{val}</button>
  )
}

export default Square
