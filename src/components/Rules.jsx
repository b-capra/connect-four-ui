import './Rules.css'

const Rules = () => {
  return (
    <div className="Rules">
      <h1 className='heading'>RULES</h1>
      <h2 className='subheading'>OBJECTIVE</h2>
      <p className='paragraph'>Be the first player to connect 4 of the same colored discs in a row (either vertically, horizontally, or diagonally).</p>
      <h2 className='subheading'>HOW TO PLAY</h2>
      <ol className='instructions'>
        <div className='listItem'>
          <div className='listMarker'>1</div>
          <li className='listText'>Red goes first in the first game.</li>
        </div>
        <div className='listItem'>
          <div className='listMarker'>2</div>
          <li className='listText'>Players must alternate turns, and only one disc can be dropped in each turn.</li>
        </div>
        <div className='listItem'>
          <div className='listMarker'>3</div>
          <li className='listText'>The game ends when there is a 4-in-a-row or a stalemate.</li>
        </div>
        <div className='listItem'>
          <div className='listMarker'>4</div>
          <li className='listText'>The starter of the previous game goes second on the next game.</li>
        </div>
      </ol>
      <button className='checkBtn'><img src='/src/assets/images/icon-check.svg' /></button>
    </div>
  )
}

export default Rules