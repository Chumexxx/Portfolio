import React from 'react'
import styled from 'styled-components'
import { MdClose } from "react-icons/md"


const SideBar = ({ toggle, handleToggle }) => {
  
  return (
      <Container onView={toggle}>

        <SideWrapper>

          <div id='closeButton' onClick={handleToggle}>
            <MdClose size={40}/>           
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
  width: auto;

`

const SideWrapper = styled.div`
  background-color: #18181B;
  border-radius: 10px;
  border: 1px solid white;
  padding: 20px;

    #closeButton{
      display: flex;
      justify-content: end;
    }

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




