import Image from 'next/image'
import styled from '@emotion/styled'
import ActionButton from '../components/action-button'
import PlayerMarkSelect from '../components/player-mark-select'

const MainMenu = styled.div`
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
`

const App = () => {
  const Logo = '/assets/logo.svg'

  return (
    <MainMenu>
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
    </MainMenu>
  )
}

export default App
