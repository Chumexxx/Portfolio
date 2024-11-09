import React from 'react'
import styled from 'styled-components'
import { MdDarkMode } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import {useState} from "react"
import SideBar from './SideBar'


const Header = () => {
    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(!toggle);
    };

  return (
    <>
        {!toggle && (
        <Container>
            <Wrapper>

            <Name>
                <h5><span>&nbsp;CHUKWUEMEKA&nbsp;</span></h5>
            </Name>

            <NavBar>

                <HomeDiv>
                    <div>
                        <a href="#home"><h2>Home</h2></a>
                    </div>
                </HomeDiv>

                <ProjectDiv>
                    <div>
                        <a href="#projects"><h2>Projects</h2></a>
                    </div>
                </ProjectDiv>

                <SkillsDiv>
                    <div>
                        <a href="#skills"><h2>Skills</h2></a>
                    </div>
                </SkillsDiv>
                
                <ContactDiv>
                    <div>
                        <a href="#contact"><h2>Contact</h2></a>  
                    </div>
                    
                </ContactDiv>

            </NavBar>

            <ToggleButton>
                <MdDarkMode size={25}/>
                {/* {theme === 'dark' ? <MdDarkMode size={25} /> : <MdOutlineDarkMode size={25} />} */}
            </ToggleButton>

            <HamburgerDiv  onClick={handleToggle}>
                <RxHamburgerMenu size={20}/>
            </HamburgerDiv>

            </Wrapper>

        </Container>
        
        )}

    {toggle === false ? null : <SideBar  toggle={toggle} handleToggle={handleToggle} />}
    </>
  )
}

export default Header


const Container = styled.div`
    width: 100%;
    
`

const Wrapper = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    justify-content: space-between;

    @media (max-width: 375px) {

    }
`

const Name = styled.div`
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    
    h5{
        font-size: 30px;
        color: transparent;
        -webkit-text-stroke: 1px white;
        position: relative;
        overflow: hidden;
        display: inline-block;

        @media (max-width: 800px) {
            font-size: 20px;
        }

        @media (max-width: 550px) {
            font-size: 20px;
        }

        @media (max-width: 375px) {
            font-size: 20px;
        }
    }

    h5:hover::before{
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.9), transparent);
        animation: shine 3s forwards;
        filter: brightness(1.5); 
    }

    @keyframes shine {
    0% {
        left: -100%;
    }
    100% {
        left: 100%;
    }
}

`

const NavBar = styled.div`
    width: 600px;
    height: 70px;
    display: flex;
    justify-content: center;
    justify-content: space-evenly;
    align-items: center;
    background-color: #242121;
    border: 1px solid white;
    border-radius: 10px;
    margin-left: 50px;
    margin-right: 50px;
    cursor: pointer;

    @media (max-width: 800px) {
        display: none;
    }

`

const HomeDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    border: none;
    width: 80px;
    height: 40px;

    a{
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        border: none;
        width: 80px;
        height: 40px;
        text-decoration: none;
        color: white;
    }

    a:hover{
        background-color: #352f2f;
    }

`

const ProjectDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    border: none;
    width: 110px;
    height: 40px;

    a{
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        border: none;
        width: 120px;
        height: 40px;
        text-decoration: none;
        color: white;
    }

    a:hover{
        background-color: #352f2f;
    }
`

const SkillsDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    border: none;
    width: 80px;
    height: 40px;

    a{
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        border: none;
        width: 80px;
        height: 40px;
        text-decoration: none;
        color: white;
    }

    a:hover{
        background-color: #352f2f;
    }
`

const ContactDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    border: none;
    width: 110px;
    height: 40px;

    a{
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        border: none;
        width: 120px;
        height: 40px;
        text-decoration: none;
        color: white;
    }

    a:hover{
        background-color: #352f2f;
    }
`

const ToggleButton = styled.div`
    background-color: #242121;
    border: none;
    border-radius: 5px;
    width: 50px;
    height: 50px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--text);
    transition: all 0.3s ease;

    &:hover {
        transform: scale(1.1);
    }

    @media (max-width: 375px) {
            width: 40px;
            height: 40px;
    }

    @media (max-width: 550px) {
            width: 40px;
            height: 40px;
    }

    @media (max-width: 800px) {
            width: 40px;
            height: 40px;
    }
`

const HamburgerDiv = styled.div`
    width: 60px;
    height: 50px;
    border: none;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #242121;
    display: none;

    @media (max-width: 800px) {
        display: flex;
    }

    @media (max-width: 375px) {
            width: 40px;
            height: 40px;
    }

    @media (max-width: 550px) {
            width: 40px;
            height: 40px;
    }

    @media (max-width: 800px) {
            width: 40px;
            height: 40px;
    }

    &:hover {
    opacity: 0.7;
  }
`
