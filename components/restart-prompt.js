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
  animation: winnerScreenBGFadeIn 0.5s forwards;
  opacity: 0.5;
  z-index: 100;
`

const EndScreenMenu = styled.div`
  animation: winnerScreenMenuSlideIn 0.5s forwards;
  position: absolute;
  left: 0;
  top: calc(50% - 133px);
  width: 100%;
  height: 266px;
  background: ${COLORS.navy.light};
  z-index: 101;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  > h4 {
    color: ${COLORS.silver.base};
    margin: 0;
  }
`

const MenuOptions = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
`

const RestartPrompt = ({ quit, next, ...props }) => {
  return (
    <>
      <Background></Background>
      <EndScreenMenu {...props}>
        <h1
          style={{
            color: COLORS.silver.base
          }}
        >
          RESTART GAME?
        </h1>
        <MenuOptions>
          <ActionButton type="secondary" color="silver" click={quit}>
            no, cancel
          </ActionButton>
          <ActionButton type="secondary" color="orange" click={next}>
            yes, restart
          </ActionButton>
        </MenuOptions>
      </EndScreenMenu>
    </>
  )
}

export default RestartPrompt
