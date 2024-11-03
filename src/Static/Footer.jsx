import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <Container>

      <Wrapper>

        <FooterDiv>
          <h2>Portfolio Developed by Chukwuemeka</h2>
        </FooterDiv>
        
      </Wrapper>

    </Container>
  )
}

export default Footer

const Container = styled.div`
  margin-top: 120px;
  width: 100%;
`

const Wrapper = styled.div`

`

const FooterDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

`