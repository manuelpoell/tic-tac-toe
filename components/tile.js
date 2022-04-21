import Image from 'next/image'
import styled from '@emotion/styled'
import { COLORS } from '../styles/colors'
import { useState } from 'react'

const TileContainer = styled.div`
  width: 140px;
  height: 140px;
  border-radius: 15px;
  box-shadow: inset 0px -8px 0px ${COLORS.navy.shadow};
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
`

const Tile = ({ currentTurn, value, click, success, ...props }) => {
  const [imageSrc, setImageSrc] = useState('')

  const IconO = '/assets/icon-o.svg'
  const IconX = '/assets/icon-x.svg'
  const IconOutlineO = '/assets/icon-o-outline.svg'
  const IconOutlineX = '/assets/icon-x-outline.svg'

  if (value === 'X' && imageSrc !== IconX) setImageSrc(IconX)
  if (value === 'O' && imageSrc !== IconO) setImageSrc(IconO)

  const successColor = value === 'X' ? COLORS.blue.base : COLORS.orange.base

  return (
    <TileContainer
      onClick={click}
      style={{
        background: success ? successColor : COLORS.navy.light
      }}
      onMouseEnter={() => {
        if (!imageSrc)
          setImageSrc(currentTurn === 'O' ? IconOutlineO : IconOutlineX)
      }}
      onMouseLeave={() => {
        if (imageSrc.includes('outline')) setImageSrc('')
      }}
      {...props}
    >
      {imageSrc.length > 0 ? (
        <Image
          src={imageSrc}
          width={64}
          height={64}
          alt={value}
          style={{
            filter: success
              ? 'brightness(0) saturate(100%) invert(11%) sepia(14%) saturate(1636%) hue-rotate(157deg) brightness(101%) contrast(89%)'
              : ''
          }}
        />
      ) : (
        <></>
      )}
    </TileContainer>
  )
}

export default Tile
