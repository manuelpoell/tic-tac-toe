import Image from 'next/image'
import styled from '@emotion/styled'
import { COLORS } from '../styles/colors'
import ActionButton from './action-button'

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000;
  animation: winnerScreenBGFadeIn 0.5s;
  opacity: 0.5;
  z-index: 100;
`

const EndScreenMenu = styled.div`
  animation: winnerScreenMenuSlideIn 0.5s;
  position: absolute;
  left: 0;
  top: calc(50% - 133px);
  width: 100%;
  height: 266px;
  background: ${COLORS.navy.light};
  z-index: 101;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  > h4 {
    color: ${COLORS.silver.base};
    margin: 0;
  }
`

const WinnerText = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
`

const MenuOptions = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
`

const EndScreen = ({ winner, text, quit, next, ...props }) => {
  const IconO = '/assets/icon-o.svg'
  const IconX = '/assets/icon-x.svg'

  return (
    <>
      <Background></Background>
      <EndScreenMenu {...props}>
        <h4>{text}</h4>
        <WinnerText>
          {winner === 'TIE' ? (
            <></>
          ) : (
            <Image
              src={winner === 'X' ? IconX : IconO}
              width={64}
              height={64}
              alt={winner}
            />
          )}
          <h1
            style={{
              color: winner === 'X' ? COLORS.blue.light : COLORS.orange.base,
              maxWidth: '66vw'
            }}
          >
            {winner === 'TIE' ? 'ROUND TIED' : 'TAKES THE ROUND'}
          </h1>
        </WinnerText>
        <MenuOptions>
          <ActionButton type="secondary" color="silver" click={quit}>
            quit
          </ActionButton>
          <ActionButton type="secondary" color="orange" click={next}>
            next round
          </ActionButton>
        </MenuOptions>
      </EndScreenMenu>
    </>
  )
}

export default EndScreen
