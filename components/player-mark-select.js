import styled from '@emotion/styled'
import Image from 'next/image'
import { useState } from 'react'
import { COLORS } from '../styles/colors'

const SelectContainer = styled.div`
  height: 205px;
  width: 460px;
  border-radius: 15px;
  background: ${COLORS.navy.light};
  box-shadow: inset 0px -8px 0px ${COLORS.navy.shadow};
  padding-bottom: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  > h4 {
    color: ${COLORS.silver.base};
    margin: 0;
  }

  > span {
    color: ${COLORS.silver.base};
    opacity: 0.5;
  }
`

const ToggleBox = styled.div`
  height: 72px;
  width: 412px;
  border-radius: 10px;
  background: ${COLORS.navy.base};
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

const ToggleOption = styled.div`
  height: 54px;
  width: 198px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;

  &:hover {
    cursor: pointer;
  }

  &.selected {
    background: ${COLORS.silver.base};
  }
`

const PlayerMarkSelect = () => {
  const [currentSelection, setCurrentSelection] = useState('X')

  const IconO = '/assets/icon-o.svg'
  const IconX = '/assets/icon-x.svg'

  return (
    <SelectContainer>
      <h4>PICK PLAYER 1&apos;S MARK</h4>
      <ToggleBox>
        <ToggleOption
          onClick={() => setCurrentSelection('O')}
          className={currentSelection === 'O' ? 'selected' : ''}
        >
          <Image
            src={IconO}
            alt="O"
            width={32}
            height={32}
            style={{
              filter:
                currentSelection === 'O'
                  ? 'brightness(0) saturate(100%) invert(11%) sepia(14%) saturate(1636%) hue-rotate(157deg) brightness(101%) contrast(89%)'
                  : 'brightness(0) saturate(100%) invert(93%) sepia(3%) saturate(2504%) hue-rotate(168deg) brightness(83%) contrast(87%)'
            }}
          />
        </ToggleOption>
        <ToggleOption
          onClick={() => setCurrentSelection('X')}
          className={currentSelection === 'X' ? 'selected' : ''}
        >
          <Image
            src={IconX}
            alt="X"
            width={32}
            height={32}
            style={{
              filter:
                currentSelection === 'X'
                  ? 'brightness(0) saturate(100%) invert(11%) sepia(14%) saturate(1636%) hue-rotate(157deg) brightness(101%) contrast(89%)'
                  : 'brightness(0) saturate(100%) invert(93%) sepia(3%) saturate(2504%) hue-rotate(168deg) brightness(83%) contrast(87%)'
            }}
          />
        </ToggleOption>
      </ToggleBox>
      <span>REMEMBER: X GOES FIRST</span>
    </SelectContainer>
  )
}

export default PlayerMarkSelect
