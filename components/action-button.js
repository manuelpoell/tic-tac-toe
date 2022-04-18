import styled from '@emotion/styled'
import { COLORS } from '../styles/colors'

const Button = styled.button(props => ({
  textTransform: 'uppercase',
  height: props.type === 'secondary' ? '52px' : '67px',
  color: '#1a2a33',
  border: 'none',
  borderRadius: '15px',
  fontWeight: 'bold',
  fontSize: '20px',
  letterSpacing: '1.25px',
  lineHeight: '25.2px',
  width: props.type === 'secondary' ? 'fit-content' : '460px',
  padding: props.type === 'secondary' ? '0 20px' : '8px',
  background: COLORS[props.color]['base'],
  boxShadow:
    props.type === 'secondary'
      ? `inset 0px -4px 0px ${COLORS[props.color]['shadow']}`
      : `inset 0px -8px 0px ${COLORS[props.color]['shadow']}`,
  ':hover': {
    cursor: 'pointer',
    background: COLORS[props.color]['light']
  }
}))

const ActionButton = ({ children, click, ...props }) => {
  return (
    <Button {...props} onClick={click}>
      {children}
    </Button>
  )
}

export default ActionButton
