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


const Project = () => {
  return (
    <Container>
      <h1>Projects</h1>
        <Wrapper>
          <CardDiv>

            <Card1>
              <img src={FAQ} alt="" />
                <h2>FAQ WebPage</h2>
                <h5>Enables users look through a wide list of potential <br />questions to get answers quickly.</h5>
                <IconsDiv>
                  <a href="https://aof-scholars-faq.vercel.app/">
                    <div  style={{backgroundColor: "white" , color: "black" , width: "130px" , height: "45px", borderRadius: "10px" , display: "flex" , justifyContent: "center" , alignItems: "center", gap: "10px"}}>
                       <h5 style={{fontSize: "15px"}}>Website</h5>
                       <IoIosArrowRoundForward size={40} color='black'/>
                     </div>
                  </a>
                  <a  href="https://github.com/Chumexxx/AOF-Scholars-FAQ"> 
                    <div  style={{backgroundColor: "white" , color: "black" , width: "130px" , height: "45px", borderRadius: "10px" , display: "flex" , justifyContent: "center" , alignItems: "center", gap: "10px"}}>
                      <h5 style={{fontSize: "15px"}}>Github</h5>
                        <FaGithub size={30} color='black'/>
                    </div>
                 </a>
                </IconsDiv>
            </Card1>
          </CardDiv>

          <CardDiv>
           <Card1> 
             <img src={Funiro} alt="" />   
             <h2>Funiro WebPage</h2>
             <h5>An E-Commerce webpage which allows users acccess to a wide variety of furnitures to chose from.</h5>
                <IconsDiv>
                  <a href="https://funiro-web-page.vercel.app/">
                    <div style={{backgroundColor: "white" , color: "black" , width: "130px" , height: "45px", borderRadius: "10px" , display: "flex" , justifyContent: "center" , alignItems: "center", gap: "10px"}}>
                      <h5 style={{fontSize: "15px"}}>Website</h5>
                        <IoIosArrowRoundForward size={40} color='black'/>
                    </div>
                    </a>
                      <a  href="https://github.com/Chumexxx/Funiro-WebPage"> 
                        <div className='button' style={{backgroundColor: "white" , color: "black" , width: "130px" , height: "45px", borderRadius: "10px" , display: "flex" , justifyContent: "center" , alignItems: "center", gap: "10px"}}>
                          <h5 style={{fontSize: "15px"}}>Github</h5>
                          <FaGithub size={30} color='black'/>
                        </div>
                      </a>
                </IconsDiv>
            </Card1>
          </CardDiv>

          <CardDiv>
            <Card1> 
              <img src={Nexcent} alt="" />
              <h2>Nexcent WebPage</h2>
              <h5>A webpage where talent seekers can come to hire talents to help produce adequate projects.</h5>
             <IconsDiv>
              <a href="https://nexcent-web-page.vercel.app/">
               <div style={{backgroundColor: "white" , color: "black" , width: "130px" , height: "45px", borderRadius: "10px" , display: "flex" , justifyContent: "center" , alignItems: "center", gap: "10px"}}>
                  <h5 style={{fontSize: "15px"}}>Website</h5>
                    <IoIosArrowRoundForward size={40} color='black'/>
                      </div>
              </a>

              <a  href="https://github.com/Chumexxx/Nexcent-WebPage"> 
                <div style={{backgroundColor: "white" , color: "black" , width: "130px" , height: "45px", borderRadius: "10px" , display: "flex" , justifyContent: "center" , alignItems: "center", gap: "10px"}}>
                  <h5 style={{fontSize: "15px"}}>Github</h5>
                  <FaGithub size={30} color='black'/>
                </div>
              </a>
             </IconsDiv>
           </Card1>
         </CardDiv>

          <CardDiv>
            <Card1>
              <img src={Countries} alt="" />
              <h2>Countries Search Website</h2>
              <h5>Enables users look through a wide list of potential <br />questions to get answers quickly.</h5>
              <IconsDiv>
                <a href="https://all-countries-website-beta.vercel.app/">
                  <div style={{backgroundColor: "white" , color: "black" , width: "130px" , height: "45px", borderRadius: "10px" , display: "flex" , justifyContent: "center" , alignItems: "center", gap: "10px"}}>
                    <h5 style={{fontSize: "15px"}}>Website</h5>
                    <IoIosArrowRoundForward size={40} color='black'/>
                  </div>
                </a>

                <a  href="https://github.com/Chumexxx/All-Countries-Website"> 
                  <div className='button' style={{backgroundColor: "white" , color: "black" , width: "130px" , height: "45px", borderRadius: "10px" , display: "flex" , justifyContent: "center" , alignItems: "center", gap: "10px"}}>
                    <h5 style={{fontSize: "15px"}}>Github</h5>
                    <FaGithub size={30} color='black'/>
                    </div>
                    </a>
              </IconsDiv>
            </Card1>
          </CardDiv>

          <CardDiv>
            <Card1>
              <img src={ECommerceAPI} alt="" />
              <h2>E-Commerce Application API</h2>
              <h5>Fully reliable server side API that helps you interract eith the frobntend. Conbtains different schemas for modern day e-commerce application. Built with ASP.NETCore on the .NET stack.</h5>
              <IconsDiv>
                <a  href="https://github.com/Chumexxx/.NET-E-Commerce-API"> 
                  <div style={{backgroundColor: "white" , color: "black" , width: "130px" , height: "45px", borderRadius: "10px" , display: "flex" , justifyContent: "center" , alignItems: "center", gap: "10px"}}>
                    <h5 style={{fontSize: "15px"}}>Github</h5>
                      <FaGithub size={30} color='black'/>
                  </div>
                </a>
              </IconsDiv>
            </Card1>  
          </CardDiv>

          <CardDiv>
            <Card1>
              <img src={ModernLibraryAPI} alt="" />
              <h2>E-Library Application API</h2>
              <h5>Fully reliable server side API that helps you interract eith the frontend. Contains different schemas for modern day e-library application. Built with ASP.NETCore on the .NET stack. <br />A Modern day library API that supports the frontend to give users the best experience.</h5>
              <IconsDiv>
                <a  href="https://github.com/Chumexxx/.NET-E-Library-API"> 
                  <div style={{backgroundColor: "white" , color: "black" , width: "130px" , height: "45px", borderRadius: "10px" , display: "flex" , justifyContent: "center" , alignItems: "center", gap: "10px"}}>
                    <h5 style={{fontSize: "15px"}}>Github</h5>
                    <FaGithub size={30} color='black'/>
                  </div>
                </a>
              </IconsDiv>
            </Card1>
          </CardDiv>
        
          <CardDiv>
            <Card1>
              <img src={FinSharkAPI} alt="" />
              <h2>FinShark Stock Market Application API</h2>
              <h5>Fully reliable server side API that helps you interract eith the frontend. Contains different schemas for modern day e-library application. Built with ASP.NETCore on the .NET stack.</h5>
              <IconsDiv>
                <a  href="https://github.com/Chumexxx/FinShark_API"> 
                  <div className='button' style={{backgroundColor: "white" , color: "black" , width: "130px" , height: "45px", borderRadius: "10px" , display: "flex" , justifyContent: "center" , alignItems: "center", gap: "10px"}}>
                    <h5 style={{fontSize: "15px"}}>Github</h5>
                    <FaGithub size={30} color='black'/>
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
    }



`

const Wrapper = styled.div`
    margin-top: 120px;
    min-width: 85px;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 50px;

    @media (max-width: 800px) {
        flex-wrap: wrap;
    }

`

const CardDiv = styled.div`
    background-color: #18181B;
    width: 400px;
    height: 460px;
    border-radius: 10px;
    border: 1px solid white;
    padding: 15px;

    h2{
        font-size: 30px;
    }

    @media (max-width: 375px) {
      width: 250px;
    }

    @media (max-width: 550px) {
      width: 250px;
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
    
`

const IconsDiv = styled.div`
    display: flex;
    gap: 20px;
    justify-content: center;

    a{
        text-decoration: none;
    }

    div:hover{
        transform: scale(1.1);
    }

 
`
