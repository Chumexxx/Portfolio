import React from 'react'
import styled from 'styled-components'
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { BsBootstrapFill } from "react-icons/bs";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoSass } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { SiJquery } from "react-icons/si";
import { SiPython } from "react-icons/si";
import { SiCsharp } from "react-icons/si";
import { SiDjango } from "react-icons/si";
import { SiDotnet } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";
import { BiLogoMongodb } from "react-icons/bi";
import { TbSql } from "react-icons/tb";
import { FaFigma } from "react-icons/fa";
import { SiJupyter } from "react-icons/si";
import { SiPycharm } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { SiRedux } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { FaGithub } from "react-icons/fa";
import { SiVite } from "react-icons/si";
import { SiVercel } from "react-icons/si";
import { BiLogoNetlify } from "react-icons/bi";
import { SiPostman } from "react-icons/si";
import { SiSwagger } from "react-icons/si";



const Skill = () => {
  return (
    <Container>
        <h1>Skills</h1>
      <Wrapper>
        

        <LanguagesAndFrameworksDiv>
          <h1>Languages and Frameworks</h1>

          <div>
            <FaHtml5 size={40} color='red'/>
            <IoLogoCss3 size={40} color='blue'/>
            <BsBootstrapFill size={40} color='green'/>
            <RiTailwindCssFill size={40} color='lightblue'/>
            <IoLogoSass size={40} color='yellow'/>
            <IoLogoJavascript size={40} color='purple'/>
            <SiTypescript  size={40} color='teal'/>
            <SiJquery size={40} color='pink'/>
            <SiPython size={40} color='blue'/>
            <SiCsharp size={40} color='hotpink'/>
            <SiDjango size={40} color='tan'/>
            <SiDotnet size={40} color='orange'/>
            <FaNodeJs size={40} color='green'/>
            <FaReact size={40} color='indigo'/>
            <RiNextjsLine size={40} color='violet'/>
          </div>
        </LanguagesAndFrameworksDiv>

        <DatabaseAndToolsDiv>
          <h1>Database and Tools</h1>

          <div>
            <BiLogoMongodb size={40} color='green'/>
            <TbSql size={40} color='lightblue'/>
            <SiJupyter size={40} color='orange'/>
            <SiPycharm size={40} color='green'/>
            <IoLogoFirebase size={40} color='lightgray'/>
            <SiRedux size={40} color='red'/>
            <VscVscode size={40} color='darkblue'/>
            <FaGithub size={40}/>
            <FaFigma size={40} color='pink'/>
            <SiVite size={40} color='red'/>
            <SiVercel size={40}/>
            <BiLogoNetlify size={40} color='teal'/>
            <SiPostman size={40}/>
            <SiSwagger size={40} color='hotpink'/>
          </div>
        </DatabaseAndToolsDiv>
  

      </Wrapper>

    </Container>
  )
}

export default Skill

const Container = styled.div`
  min-width: 100%;
  margin-top: 120px;

  h1{
     font-size: 50px;

    @media (max-width: 550px) {
    font-size: 30px;
    text-align: center;
    }
  }
`

const Wrapper = styled.div`
  margin-top: 120px;
  min-width: 85%;
  display: flex;
  gap: 50px;
  justify-content: space-around;

  @media (max-width: 550px) {
      margin-top: 50px;
      flex-wrap: wrap;
    }

  h1{
    font-size: 40px;
  }

  @media (max-width: 1650px) {
      flex-wrap: wrap;
    }

  @media (max-width: 800px) {
      flex-wrap: wrap;
    }

  @media (max-width: 375px) {
    flex-wrap: wrap;
    }
`

const LanguagesAndFrameworksDiv = styled.div`
  width: 700px;
  height: 250px;
  border-radius: 10px;
  padding: 20px;
  border: 1px solid white;
  background-color:#18181B;
  transition: transform 0.3s ease;

&:hover {
  transform: scale(1.2);
}


  div{
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
  }

  @media (max-width: 1250px) {
      height: 400px;
  }

  @media (max-width: 550px) {
      /* height: 500px; */
  }

  @media (max-width: 375px) {
      height: 400px;
  }

  h1{
    @media (max-width: 550px) {
      font-size: 20px;
  }
    @media (max-width: 375px) {
      font-size: 20px;
  }
  }

`


const DatabaseAndToolsDiv = styled.div`
  width: 700px;
  height: 250px;
  border-radius: 10px;
  padding: 20px;
  border: 1px solid white;
  background-color: #18181B;
  transform: scale(1);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.2);
  }

  div{
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
  }

  @media (max-width: 1250px) {
      height: 400px;
    }

  @media (max-width: 550px) {
      /* height: 500px; */
  }

  @media (max-width: 375px) {
      height: 400px;
  }

  h1{

    @media (max-width: 550px) {
      font-size: 20px;
  }
    @media (max-width: 375px) {
      font-size: 20px;
  }
}
`
