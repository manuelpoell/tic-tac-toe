import Image from 'next/image'
import styled from '@emotion/styled'
import { COLORS } from '../styles/colors'

const Label = styled.div`
  width: 140px;
  height: 52px;
  border-radius: 10px;
  background: ${COLORS.navy.light};
  box-shadow: inset 0px -4px 0px ${COLORS.navy.shadow};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`

const LabelText = styled.span`
  font-weight: 700;
  font-size: 16px;
  letter-spacing: 1px;
  line-height: 20px;
  color: ${COLORS.silver.base};
`

const TurnLabel = ({ xTurn, ...props }) => {
  const IconO = '/assets/icon-o.svg'
  const IconX = '/assets/icon-x.svg'

  return (
    <Label {...props}>
      <Image
        src={xTurn ? IconX : IconO}
        width={20}
        height={20}
        alt={xTurn ? 'X' : 'O'}
        style={{
          filter:
            'brightness(0) saturate(100%) invert(93%) sepia(3%) saturate(2504%) hue-rotate(168deg) brightness(83%) contrast(87%)'
        }}
      />
      <LabelText>TURN</LabelText>
    </Label>
  )
}

export default TurnLabel
