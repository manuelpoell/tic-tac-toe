import { useState } from 'react'
import styled from '@emotion/styled'
import Image from 'next/image'
import TurnLabel from './turn-label'
import ActionButton from './action-button'
import Tile from './tile'
import StatsLabel from './stats-label'
import EndScreen from './end-screen'
import RestartPrompt from './restart-prompt'
import { calculateWinner } from '../lib/calc-winner'
import { cpuPick } from '../lib/cpu-pick'

const RowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 460px;
  max-width: 90vw;
`

const BoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 140px;
  height: 623px;
  max-height: calc(33vw * 4);
`

const GameBoard = ({ playerOne, vsCPU, quit }) => {
  const [xTurn, setXTurn] = useState(true)
  const [tiles, setTiles] = useState(Array(9).fill(''))
  const [prompt, displayPrompt] = useState('')
  const [winnerText, setWinnerText] = useState('')
  const [stats, setStats] = useState({ X: 0, TIE: 0, O: 0 })

  const Logo = '/assets/logo.svg'
  const ResetIcon = '/assets/icon-restart.svg'

  const statsTitleTie = 'TIE'
  let statsTitleX = 'X'
  let statsTitleO = 'O'

  if (playerOne === 'X') {
    statsTitleX += ' (P1)'
    statsTitleO += vsCPU ? ' (CPU)' : ' (P2)'
  } else {
    statsTitleO += ' (P1)'
    statsTitleX += vsCPU ? ' (CPU)' : ' (P2)'
  }

  const winner = calculateWinner(tiles)
  if (winner && prompt.length < 1) {
    if (vsCPU) {
      setWinnerText(winner === playerOne ? 'YOU WON!' : 'OH NO, YOU LOST...')
    } else {
      setWinnerText(winner === playerOne ? 'PLAYER 1 WINS!' : 'PLAYER 2 WINS!')
    }

    let newStats = { ...stats }
    newStats[winner] = newStats[winner] + 1
    setStats(newStats)
    displayPrompt('END')
  }

  const tileClick = index => {
    if (tiles[index]) return
    const newTiles = tiles.slice()
    newTiles[index] = xTurn ? 'X' : 'O'
    setTiles(newTiles)
    setXTurn(!xTurn)
  }

  const restart = () => {
    setXTurn(true)
    setTiles(Array(9).fill(''))
    displayPrompt('')
  }

  if (
    vsCPU &&
    !winner &&
    ((playerOne === 'X' && !xTurn) || (playerOne === 'O' && xTurn))
  )
    tileClick(cpuPick(tiles, xTurn))

  return (
    <>
      {prompt === 'END' ? (
        <EndScreen
          winner={winner}
          text={winnerText}
          next={() => restart()}
          quit={quit}
        ></EndScreen>
      ) : (
        <></>
      )}
      {prompt === 'RESTART' ? (
        <RestartPrompt
          next={() => restart()}
          quit={() => displayPrompt('')}
        ></RestartPrompt>
      ) : (
        <></>
      )}
      <BoardContainer>
        <RowContainer>
          <Image
            src={Logo}
            width={72}
            height={32}
            alt="LogoXO"
            onClick={quit}
          />
          <TurnLabel xTurn={xTurn}></TurnLabel>
          <ActionButton
            type="secondary"
            color="silver"
            click={() => displayPrompt('RESTART')}
          >
            <Image src={ResetIcon} width={20} height={20} alt="Restart" />
          </ActionButton>
        </RowContainer>
        <RowContainer>
          <Tile
            xTurn={xTurn}
            value={tiles[0]}
            click={() => tileClick(0)}
          ></Tile>
          <Tile
            xTurn={xTurn}
            value={tiles[1]}
            click={() => tileClick(1)}
          ></Tile>
          <Tile
            xTurn={xTurn}
            value={tiles[2]}
            click={() => tileClick(2)}
          ></Tile>
        </RowContainer>
        <RowContainer>
          <Tile
            xTurn={xTurn}
            value={tiles[3]}
            click={() => tileClick(3)}
          ></Tile>
          <Tile
            xTurn={xTurn}
            value={tiles[4]}
            click={() => tileClick(4)}
          ></Tile>
          <Tile
            xTurn={xTurn}
            value={tiles[5]}
            click={() => tileClick(5)}
          ></Tile>
        </RowContainer>
        <RowContainer>
          <Tile
            xTurn={xTurn}
            value={tiles[6]}
            click={() => tileClick(6)}
          ></Tile>
          <Tile
            xTurn={xTurn}
            value={tiles[7]}
            click={() => tileClick(7)}
          ></Tile>
          <Tile
            xTurn={xTurn}
            value={tiles[8]}
            click={() => tileClick(8)}
          ></Tile>
        </RowContainer>
        <RowContainer>
          <StatsLabel
            title={statsTitleX}
            value={stats.X}
            color="blue"
          ></StatsLabel>
          <StatsLabel
            title={statsTitleTie}
            value={stats.TIE}
            color="silver"
          ></StatsLabel>
          <StatsLabel
            title={statsTitleO}
            value={stats.O}
            color="orange"
          ></StatsLabel>
        </RowContainer>
      </BoardContainer>
    </>
  )
}

export default GameBoard
