import React from 'react'
import styled from 'styled-components'
import { MdDarkMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import {useState} from "react"


const Header = () => {

    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () => {
        setIsOpen(!isOpen);
        document.body.style.overflow = isOpen ? 'auto' : 'hidden';
        document.querySelector('.sidebar')?.classList.toggle('open');

        // document.querySelector('.sidebar')?.classList.add('open');
        // document.querySelector('.overlay')?.classList.add('open');
        // document.body.style.overflow = 'hidden';
    };

  return (
    <Container>
        <Wrapper>

        <Name>
            <h5><span>&nbsp;CHUKWUEMEKA&nbsp;</span></h5>
        </Name>

        <NavBar>

            {/* <Link style={{ textDecoration: "none" , color: "white"}} to="/"> */}
                <HomeDiv>
                    <div>
                    <h2 onClick={() => scrollToHome(Home)}>Home</h2>
                    </div>
                </HomeDiv>
            {/* </Link> */}

            {/* <Link style={{ textDecoration: "none" , color: "white"}} to="/projects"> */}
                <ProjectDiv>
                    <div>
                    <h2 onClick={() => scrollToHome(Projects)}>Projects</h2>
                    </div>
                </ProjectDiv>
            {/* </Link> */}

            {/* <Link style={{ textDecoration: "none" , color: "white"}} to="/skills"> */}
                <SkillsDiv>
                    <div>
                    <h2>Skills</h2>
                    </div>
                </SkillsDiv>
            {/* </Link> */}
            
            {/* <Link style={{ textDecoration: "none" , color: "white"}} to="/contact"> */}
                <ContactDiv>
                    <div>
                    <h2>Contact</h2>
                    </div>
                
                </ContactDiv>
            {/* </Link> */}

        </NavBar>

        <LightModeToggle>
            <MdDarkMode size={25}/>
        </LightModeToggle>

        <DarkModeToggle id='themeToggle'>
            <MdOutlineDarkMode size={25}/>
        </DarkModeToggle>

        <HamburgerDiv>
            <RxHamburgerMenu size={20} onClick={handleClick}/>
        </HamburgerDiv>

        </Wrapper>
    </Container>
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

    div{
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        border: none;
        width: 80px;
        height: 40px;
    }

    div:hover{
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

    div{
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        border: none;
        width: 80px;
        height: 40px;
    }

    div:hover{
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

    div{
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        border: none;
        width: 120px;
        height: 40px;
    }

    div:hover{
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

    div{
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        border: none;
        width: 80px;
        height: 40px;
    }

    div:hover{
        background-color: #352f2f;
    }
`

const LightModeToggle = styled.div`
    width: 60px;
    height: 50px;
    border: none;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #242121;
    display: none;

    @media (max-width: 375px) {
            width: 40px;
            height: 40px;
        }
`

const DarkModeToggle = styled.div`
    width: 60px;
    height: 50px;
    border: none;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #242121;

    
    @media (max-width: 375px) {
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

    &:hover {
    opacity: 0.7;
  }
`
