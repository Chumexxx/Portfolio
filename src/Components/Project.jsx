import React from 'react'
import styled from 'styled-components'
import FAQ from '../assets/FAQWebpageImage.png' 
import Funiro from '../assets/FuniroWebpageImage.png'
import Nexcent from '../assets/NexcentWebpageImage.png'
import Countries from '../assets/CountriesWebpage.png'
import { IoIosArrowRoundForward } from "react-icons/io";
import ECommerceAPI from "../assets/E-CommerceAPI.png"
import ModernLibraryAPI from "../assets/ModernLibraryAPI.png"
import FinSharkAPI from "../assets/FinSharkAPI.png"
import { FaGithub } from "react-icons/fa";
// import { useEffect } from 'react';


const Project = () => {

  
  return (
    <Container>
      <h1>Projects</h1>
        <Wrapper className='wrap'>
          <CardDiv>

            <Card1 className='card'>
              <img src={FAQ} alt="" />
                <h2>FAQ WebPage</h2>
                <p>Enables users look through a wide list of potential <br />questions to get answers quickly.</p>
                <IconsDiv>
                  <a href="https://aof-scholars-faq.vercel.app/">
                    <div className='website' style={{backgroundColor: "white" , color: "black" , width: "100px" , height: "40px", borderRadius: "10px" , display: "flex" , justifyContent: "center" , alignItems: "center", gap: "10px"}}>
                       <h5 style={{fontSize: "15px"}}>Website</h5>
                       <IoIosArrowRoundForward size={20} color='black'/>
                     </div>
                  </a>
                  <a  href="https://github.com/Chumexxx/AOF-Scholars-FAQ"> 
                    <div className='github' style={{backgroundColor: "white" , color: "black" , width: "100px" , height: "40px", borderRadius: "10px" , display: "flex" , justifyContent: "center" , alignItems: "center", gap: "10px"}}>
                      <h5 style={{fontSize: "15px"}}>Github</h5>
                        <FaGithub size={20} color='black'/>
                    </div>
                 </a>
                </IconsDiv>
            </Card1>
          </CardDiv>

          <CardDiv>
           <Card1> 
             <img src={Funiro} alt="" />   
             <h2>Funiro LandingPage</h2>
             <p>Landingpage for a furniture making company which allows users acccess to a wide variety of furnitures to chose from.</p>
                <IconsDiv>
                  <a href="https://funiro-web-page.vercel.app/">
                    <div style={{backgroundColor: "white" , color: "black" , width: "100px" , height: "40px", borderRadius: "10px" , display: "flex" , justifyContent: "center" , alignItems: "center", gap: "10px"}}>
                      <h5 style={{fontSize: "15px"}}>Website</h5>
                        <IoIosArrowRoundForward size={20} color='black'/>
                    </div>
                    </a>
                      <a  href="https://github.com/Chumexxx/Funiro-WebPage"> 
                        <div className='button' style={{backgroundColor: "white" , color: "black" , width: "100px" , height: "40px", borderRadius: "10px" , display: "flex" , justifyContent: "center" , alignItems: "center", gap: "10px"}}>
                          <h5 style={{fontSize: "15px"}}>Github</h5>
                          <FaGithub size={20} color='black'/>
                        </div>
                      </a>
                </IconsDiv>
            </Card1>
          </CardDiv>

          <CardDiv>
            <Card1> 
              <img src={Nexcent} alt="" />
              <h2>Nexcent LandingPage</h2>
              <p>A Landingpage for a talent hiring company where talent seekers can come to hire talents to help produce adequate projects.</p>
             <IconsDiv>
              <a href="https://nexcent-web-page.vercel.app/">
               <div style={{backgroundColor: "white" , color: "black" , width: "100px" , height: "40px", borderRadius: "10px" , display: "flex" , justifyContent: "center" , alignItems: "center", gap: "10px"}}>
                  <h5 style={{fontSize: "15px"}}>Website</h5>
                    <IoIosArrowRoundForward size={20} color='black'/>
                      </div>
              </a>

              <a  href="https://github.com/Chumexxx/Nexcent-WebPage"> 
                <div style={{backgroundColor: "white" , color: "black" , width: "100px" , height: "40px", borderRadius: "10px" , display: "flex" , justifyContent: "center" , alignItems: "center", gap: "10px"}}>
                  <h5 style={{fontSize: "15px"}}>Github</h5>
                  <FaGithub size={20} color='black'/>
                </div>
              </a>
             </IconsDiv>
           </Card1>
         </CardDiv>

          <CardDiv>
            <Card1>
              <img src={Countries} alt="" />
              <h2>Countries Search Website</h2>
              <p>Enables users look through a wide list of potential <br />questions to get answers quickly.</p>
              <IconsDiv>
                <a href="https://all-countries-website-beta.vercel.app/">
                  <div style={{backgroundColor: "white" , color: "black" , width: "100px" , height: "40px", borderRadius: "10px" , display: "flex" , justifyContent: "center" , alignItems: "center", gap: "10px"}}>
                    <h5 style={{fontSize: "15px"}}>Website</h5>
                    <IoIosArrowRoundForward size={20} color='black'/>
                  </div>
                </a>

                <a  href="https://github.com/Chumexxx/All-Countries-Website"> 
                  <div className='button' style={{backgroundColor: "white" , color: "black" , width: "100px" , height: "40px", borderRadius: "10px" , display: "flex" , justifyContent: "center" , alignItems: "center", gap: "10px"}}>
                    <h5 style={{fontSize: "15px"}}>Github</h5>
                    <FaGithub size={20} color='black'/>
                    </div>
                    </a>
              </IconsDiv>
            </Card1>
          </CardDiv>

          <CardDiv>
            <Card1>
              <img src={ECommerceAPI} alt="" />
              <h2>E-Commerce Application API</h2>
              <p>Fully reliable server side API that helps you interract eith the frobntend. Conbtains different schemas for modern day e-commerce application. Built with ASP.NETCore on the .NET stack.</p>
              <IconsDiv>
                <a  href="https://github.com/Chumexxx/.NET-E-Commerce-API"> 
                  <div style={{backgroundColor: "white" , color: "black" , width: "100px" , height: "40px", borderRadius: "10px" , display: "flex" , justifyContent: "center" , alignItems: "center", gap: "10px"}}>
                    <h5 style={{fontSize: "15px"}}>Github</h5>
                      <FaGithub size={20} color='black'/>
                  </div>
                </a>
              </IconsDiv>
            </Card1>  
          </CardDiv>

          <CardDiv>
            <Card1>
              <img src={ModernLibraryAPI} alt="" />
              <h2>E-Library Application API</h2>
              <p>Fully reliable server side API that helps you interract eith the frontend. Contains different schemas for modern day e-library application. Built with ASP.NETCore on the .NET stack. </p>
              <IconsDiv>
                <a  href="https://github.com/Chumexxx/.NET-E-Library-API"> 
                  <div style={{backgroundColor: "white" , color: "black" , width: "100px" , height: "40px", borderRadius: "10px" , display: "flex" , justifyContent: "center" , alignItems: "center", gap: "10px"}}>
                    <h5 style={{fontSize: "15px"}}>Github</h5>
                    <FaGithub size={20} color='black'/>
                  </div>
                </a>
              </IconsDiv>
            </Card1>
          </CardDiv>
        
          <CardDiv>
            <Card1>
              <img src={FinSharkAPI} alt="" />
              <h2>FinShark Stock Market Application API</h2>
              <p>Fully reliable server side API that helps you interract eith the frontend. Contains different schemas for modern day e-library application. Built with ASP.NETCore on the .NET stack.</p>
              <IconsDiv>
                <a  href="https://github.com/Chumexxx/FinShark_API"> 
                  <div style={{backgroundColor: "white" , color: "black" , width: "100px" , height: "40px", borderRadius: "10px" , display: "flex" , justifyContent: "center" , alignItems: "center", gap: "10px"}}>
                    <h5 style={{fontSize: "15px"}}>Github</h5>
                    <FaGithub size={20} color='black'/>
                  </div>
                </a>
              </IconsDiv>
            </Card1>
          </CardDiv>

        </Wrapper>
    </Container>

  )
}

export default Project

const Container = styled.div`
    width: 100%;
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
  min-width: 85px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 50px;

  @media (max-width: 550px) {
    margin-top: 50px;
  }

  @media (max-width: 800px) {
    flex-wrap: wrap;
  }

`

const CardDiv = styled.div`
  background-color: #18181B;
  width: 400px;
  height: 460px;
  border-radius: 10px;
  border: 1px solid #92898a;
  padding: 15px;
  transform: scale(1);
  transition: transform 0.3s ease;

  h2{
    font-size: 30px;
  }

  @media (max-width: 375px) {
    width: 260px;
  }

  @media (max-width: 550px) {
    width: 250px;
  }

  &:hover{
    border: 1px solid white;
    transform: scale(1.1);
  }

`

const Card1 = styled.div`
  img{
      width: 400px;
      border-radius: 10px;

  @media (max-width: 375px) {
    width: 250px;
    }

  @media (max-width: 550px) {
    width: 250px;
    }
  }

  h2{
    @media (max-width: 550px) {
      font-size: 25px;
    }
  }

  p{
    @media (max-width: 550px) {
      font-size: 15px;
    }
  }
    
`

const IconsDiv = styled.div`
    display: flex;
    gap: 20px;
    justify-content: center;

    a{
        text-decoration: none;
    }

    div{
      transition: transform 0.3s ease;
    }

    div:hover{
        transform: scale(1.1);
    }

 
`
