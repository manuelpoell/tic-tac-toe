import Image from 'next/image'
import styled from '@emotion/styled'
import ActionButton from '../components/action-button'
import PlayerMarkSelect from '../components/player-mark-select'
import { useState } from 'react'
import GameBoard from '../components/game-board'

const MainFrame = styled.div`
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
`

const App = () => {
  const [gameState, setGameState] = useState('MAIN_MENU')
  const [playerOneMark, setPlayerOneMark] = useState('X')

  const Logo = '/assets/logo.svg'

  if (gameState.includes('VS_')) {
    return (
      <MainFrame>
        <GameBoard
          playerOne={playerOneMark}
          vsCPU={gameState === 'VS_CPU'}
          quit={() => setGameState('MAIN_MENU')}
        ></GameBoard>
      </MainFrame>
    )
  }

  return (
    <MainFrame>
      <div>
        <Image src={Logo} width={72} height={32} alt="LogoXO" />
      </div>
      <PlayerMarkSelect
        currentSelection={playerOneMark}
        update={setPlayerOneMark}
      ></PlayerMarkSelect>
      <ActionButton
        type="primary"
        color="orange"
        click={() => setGameState('VS_CPU')}
      >
        NEW GAME (VS CPU)
      </ActionButton>
      <ActionButton
        type="primary"
        color="blue"
        click={() => setGameState('VS_PLAYER')}
      >
        NEW GAME (VS PLAYER)
      </ActionButton>
    </MainFrame>
  )
}

export default App
