import React from 'react'
import styled from 'styled-components'
import { MdClose } from "react-icons/md"


const SideBar = ({ toggle, handleToggle }) => {
  
  return (
      <Container onView={toggle}>

        <SideWrapper>

          <div onClick={handleToggle}>
            <MdClose/>           
          </div>

          <div className='linkDiv'>
            <a href="#home" onClick={handleToggle}><p>Home</p></a>
            <a href="#projects" onClick={handleToggle}><p>Projects</p></a>
            <a href="#skills" onClick={handleToggle}><p>Skills</p></a>
            <a href="#contact" onClick={handleToggle}><p>Contact</p></a>
          </div>

        </SideWrapper>

      </Container>
  )
}

export default SideBar

const Container = styled.div`
  /* position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 300px;
  background-color: #ffffff;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  transform: translateX(-100%);
  transition: transform 0.3s ease-in-out;
  z-index: 1000;
  padding: 20px;
  overflow-y: auto;
  
  &.open {
    transform: translateX(0);
  } */

    display: none;

@media (max-width: 768px) {
    /* background-color: rgb(247, 247, 247); */
    background-color: rgb(241, 240, 240);
    box-sizing: border-box;
    width: 60%;
    height: 100vh;
    display: flex;
    /* align-items: center; */
    justify-content: center;
    /* height: 60px; */
    position: fixed;
    top: 0;
    right: 0px;
    z-index: 1000;
    /* border-bottom: 1px solid black; */
}
`

const SideWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: fixed;
  top: 0;
  right: -100%;
  width: 100%;
  height: 100vh;
  background: white;
  transition: 0.5s ease-in-out;
  z-index: 20000;

  &.open {
    right: 0;
  }

  @media (min-width: 995px) {
    display: none;
  }

.headerDiv{
  width: inherit;
  box-sizing: border-box;
  padding-left: 20px;
  padding-right: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;

}

section{
      height: 65px;
      border-bottom: 0.1px #e0dbdb solid;
      box-sizing: border-box;
      margin-left: 20px;
      margin-right: 38px;
      display: flex;
      justify-content: space-between;
      align-items: center;

        p{
          font-size: 16px;
          font-weight: 800;
          color: #40196d;
        }
    }
`




