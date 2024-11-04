import React from 'react'
import styled from 'styled-components'
import { MdClose } from "react-icons/md"


const SideBar = ({ isOpen, onClose }) => {

  // const handleClose = () => {
  //   document.querySelector('.sidebar')?.classList.remove('open');
  //   document.querySelector('.overlay')?.classList.remove('open');
  //   document.body.style.overflow = 'auto';
  // };

  const test = () => {
    setToggle (false)
}
  
  return (
    <>
      <Overlay onClick={test} />
        <Container>
          <CloseButton onClick={test}><MdClose size={40} color="black"/></CloseButton>
            <SidebarContent>
              <NavMenu>
                <NavLink href="#home">Home</NavLink>
                <NavLink href="#about">About</NavLink>
                <NavLink href="#projects">Projects</NavLink>
                <NavLink href="#contact">Contact</NavLink>
              </NavMenu>
            </SidebarContent>
        </Container>
    </>
  )
}

export default SideBar

const Container = styled.div`
  position: fixed;
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
  }`

const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease-in-out;
  z-index: 999;
  
  &.open {
    opacity: 1;
    visibility: visible;
  }
`;

// const Wrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 20px;
// `;

const SidebarContent = styled.div`
  
`


const NavMenu = styled.div`
  
`

const NavLink = styled.a`
  text-decoration: none;
  color: #333;
  padding: 10px;
  border-radius: 5px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #f5f5f5;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  padding: 5px;
  
  &:hover {
    opacity: 0.7;
  }
`;
