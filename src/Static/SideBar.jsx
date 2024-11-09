import React from 'react'
import styled from 'styled-components'
import { RxHamburgerMenu } from "react-icons/rx";


const SideBar = ({ toggle, handleToggle }) => {
  
  return (
      <Container onView={toggle}>

        <SideWrapper>

          <div>
            <a href="#home" onClick={handleToggle}><p>Home</p></a>
            <a href="#projects" onClick={handleToggle}><p>Projects</p></a>
            <a href="#skills" onClick={handleToggle}><p>Skills</p></a>
            <a href="#contact" onClick={handleToggle}><p>Contact</p></a>
          </div>

          <HamburgerDiv  onClick={handleToggle}>
            <RxHamburgerMenu size={20}/>
          </HamburgerDiv>

        </SideWrapper>

      </Container>
  )
}

export default SideBar

const Container = styled.div`
  position: sticky;
  width: auto;
  z-index: 1000;

`

const SideWrapper = styled.div`
  background-color: #18181B;
  border-radius: 10px;
  border: 1px solid white;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  
  a{
    text-decoration: none;
  }

  p{
    color: white;
    font-size: 25px;
    font-weight: 900;
  }

  @media (min-width: 800px) {
    display: none;
  }

`

const HamburgerDiv = styled.div`
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #242121;

  &:hover {
    opacity: 0.7;
  }
`




