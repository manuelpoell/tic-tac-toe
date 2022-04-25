import styled from '@emotion/styled'
import { COLORS } from '../styles/colors'

const Label = styled.div(props => ({
  width: '140px',
  maxWidth: '28vw',
  height: '72px',
  borderRadius: '15px',
  background: COLORS[props.color]['base'],
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
}))

const StatsTitle = styled.span`
  font-weight: 500;
  font-size: 14px;
  letter-spacing: 0.9px;
  line-height: 17.64px;
`

const StatsValue = styled.span`
  font-weight: 700;
  font-size: 24px;
  letter-spacing: 1.5px;
  line-height: 30.24px;
`

const StatsLabel = ({ title, value, ...props }) => {
  return (
    <Label {...props}>
      <StatsTitle>{title}</StatsTitle>
      <StatsValue>{value}</StatsValue>
    </Label>
  )
}

export default StatsLabel
