import styled from '@emotion/styled'

const FooterSection = styled.span`
  position: fixed;
  bottom: 10px;
`

const Footer = () => {
  return (
    <FooterSection>
      Challenge by{' '}
      <a
        href="https://www.frontendmentor.io/"
        target="_blank"
        rel="noreferrer noopener"
      >
        Frontend Mentor
      </a>
      . Coded by{' '}
      <a
        href="https://manuelpoell.github.io"
        target="_blank"
        rel="noreferrer noopener"
      >
        Manuel Pöll
      </a>
      .
    </FooterSection>
  )
}

export default Footer
