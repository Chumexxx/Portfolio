import React from 'react'
import styled from 'styled-components'
import { MdDarkMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import {Link } from "react-router-dom"
import { useState } from 'react';


const Header = () => {
    const [sideBar, setSideBar] = useState(false)

    const handleSideBar = () => {
        setSideBar(!sideBar);
    };

  return (
    <>
        {!sideBar && (
            <Container>
                <Name>
                    <h5><span>&nbsp;CHUKWUEMEKA&nbsp;</span></h5>
                </Name>

                <NavBar>

                    <Link style={{ textDecoration: "none" , color: "white"}} to="/">
                        <HomeDiv>
                            <h2>Home</h2>
                        </HomeDiv>
                    </Link>

                    <Link style={{ textDecoration: "none" , color: "white"}} to="/projects">
                        <ProjectDiv>
                            <h2>Projects</h2>
                        </ProjectDiv>
                    </Link>

                    <Link style={{ textDecoration: "none" , color: "white"}} to="/skills">
                        <SkillsDiv>
                            <h2>Skills</h2>
                        </SkillsDiv>
                    </Link>
                    
                    <Link style={{ textDecoration: "none" , color: "white"}} to="/contact">
                        <ContactDiv>
                            <h2>Contact</h2>
                        </ContactDiv>
                    </Link>

                </NavBar>

                <LightModeToggle>
                    <MdDarkMode size={40}/>
                </LightModeToggle>

                <DarkModeToggle id='themeToggle'>
                    <MdOutlineDarkMode size={40}/>
                </DarkModeToggle>

                <HamburgerDiv onClick={handleSideBar}>
                    <RxHamburgerMenu size={30}/>
                </HamburgerDiv>
            </Container>
        )}

        {sideBar && <SideBar sideBar={sideBar} setSideBar={setSideBar} />}
    </>
  )
}

export default Header

const Container = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    justify-content: space-between;
    border: 1px solid white;
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
    }

    h5:hover::before{
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.9), transparent);
        animation: shine 1s forwards;
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

    HomeDiv:hover{
        background-color: red;
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
`

const SkillsDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    border: none;
    width: 80px;
    height: 40px;
`

const ContactDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    border: none;
    width: 110px;
    height: 40px;
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
`