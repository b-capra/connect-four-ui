import './Menu.css'

const Menu = () => {
  return (
    <div className="Menu">
      <img className='menuLogo' src='/src/assets/images/logo.svg' />
      <button className='menuButton' id='cpuBtn'>PLAY VS CPU</button>
      <button className='menuButton' id='playerBtn'>PLAY VS PLAYER</button>
      <button className='menuButton' id='rulesBtn'>GAME RULES</button>
    </div>
  )
}

export default Menu