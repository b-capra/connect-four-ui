import './Menu.css'

const Menu = () => {
  return (
    <div className="Menu">
      <img className='menuLogo' src='/src/assets/images/logo.svg' />
      <button className='menuButton' id='cpuBtn'>
        PLAY VS CPU
        <img className='btnImg' src='/src/assets/images/player-vs-cpu.svg' />
      </button>
      <button className='menuButton' id='playerBtn'>
        PLAY VS PLAYER
        <img className='btnImg' src='/src/assets/images/player-vs-player.svg' />
      </button>
      <button className='menuButton' id='rulesBtn'>GAME RULES</button>
    </div>
  )
}

export default Menu