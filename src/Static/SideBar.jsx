import React from 'react'
import styled from 'styled-components'
import { RxHamburgerMenu } from "react-icons/rx";
import { MdDarkMode } from "react-icons/md";


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

          <ToggleButton>
                <MdDarkMode size={25}/>
                {/* {theme === 'dark' ? <MdDarkMode size={25} /> : <MdOutlineDarkMode size={25} />} */}
          </ToggleButton>

          <HamburgerDiv  onClick={handleToggle}>
            <RxHamburgerMenu size={20}/>
          </HamburgerDiv>

        </SideWrapper>

      </Container>
  )
}

export default SideBar

const Container = styled.div`
  position: absolute;
  z-index: 1000;

`

const SideWrapper = styled.div`
  background-color: #18181B;
  border-radius: 10px;
  border: 1px solid white;
  padding: 20px;
  min-width: 250px;
  height: 100%;
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

const ToggleButton = styled.div`
    /* width: 60px;
    height: 50px;
    border: none;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #242121;
    display: none; */

    //background: var(--secondary);
    background-color: #242121;
    border: none;
    border-radius: 5px;
    width: 40px;
    height: 40px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--text);
    transition: all 0.3s ease;

    &:hover {
        transform: scale(1.1);
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




