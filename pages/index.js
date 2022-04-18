import Image from 'next/image'
import ActionButton from '../components/action-button'
import PlayerMarkSelect from '../components/player-mark-select'

const App = () => {
  const Logo = '/assets/logo.svg'

  return (
    <div
      style={{
        height: '90vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '15px'
      }}
    >
      <div>
        <Image src={Logo} width={72} height={32} alt="LogoXO" />
      </div>
      <PlayerMarkSelect />
      <ActionButton type="primary" color="orange">
        NEW GAME (VS CPU)
      </ActionButton>
      <ActionButton type="primary" color="blue">
        NEW GAME (VS PLAYER)
      </ActionButton>
    </div>
  )
}

export default App
