import React from 'react'
import styled from 'styled-components';
import { TiArrowDownThick } from "react-icons/ti";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Hero = () => {
  return (
    <Container>

      <Wrapper>

        <h1>Chukwuemeka Obasi</h1>
        <p>Full-Stack Software Developer . AI Enthusiast . Legal Tech</p>
        <p style={{color: "white"}}>Dynamic Full-Stack Engineer with expertise in building and deploying robust web applications. Skilled at architecting innovative solutions through both front-end and back-end technologies. Creates responsive, user-focused interfaces backed by scalable systems that deliver high performance. Driven by continuous learning and software quality excellence.</p>

          <div style={{display: "flex" , alignItems: "center", gap: "10px"}}>
          <p>Connect with me here!</p>
          <div style={{width: "30px", height: "35px", backgroundColor: "#00A6ED", display: "flex" , alignItems: "center" , borderRadius: "5px"}}>
          <TiArrowDownThick size={30}/>
          </div>
          </div>

          <div style={{display: "flex" , alignItems: "center", gap: "20px"}}>
            <a  href="https://github.com/Chumexxx"> <FaGithub color='white' size={30}/> </a>
            <a href="www.linkedin.com/in/chukwuemekaobasi"> <FaLinkedin  color='white' size={30}/> </a>
            <a href=""> <FaInstagram  color='white' size={30}/> </a>
            <a href="https://x.com/Esquire__Daniel"> <FaXTwitter  color='white' size={30}/> </a>
          </div>

      </Wrapper>
      
    </Container>
  )
}

export default Hero

const Container = styled.div`
  margin-top: 100px;
  width: 100%;

  @media (max-width: 375px) {
    margin-top: 30px;
  }

  @media (max-width: 550px) {
    margin-top: 30px;
  }
`

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;

    h1{
        font-size: 50px;
        margin-top: 0;
        @media (max-width: 375px) {
           font-size: 30px;
        }

        @media (max-width: 550px) {
           font-size: 30px;
        }
    }

    p{
        font-size: 25px;
        font-weight: 300;
        color: #b6b0b0;
    }

    h5{
        font-size: 20px;
    }

    a:hover{
        transform: scale(1.5);
    }

`
