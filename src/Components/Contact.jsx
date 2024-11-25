import React from 'react'
import styled from 'styled-components'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiArrowDownTray } from "react-icons/hi2";

const Contact = () => {
  return (
    
    <Container>
        <h1>Contact</h1>
      <Wrapper>   

      <ContactDiv>
        <LeftDiv>
          <h2>Contact Me</h2>
          <h5>Any questions or discussions? Just write me a message!</h5>
            <form action="https://formspree.io/f/mgveandz" method='POST'>
              <div id='jD'>
                <input className='john' type="text" name='FirstName' placeholder='FirstName' required/>
                <input className='john' type="text" name='LastName' placeholder='LastName'  required/>
              </div>
              <input id='email' name='email' type="email" placeholder='yourname@mail.com'  required/>
              <textarea name="Message" id="tA" placeholder='Your Message'  required></textarea>
              <button id='button' type='submit'>SEND MESSAGE</button>
            </form> 
        </LeftDiv>

        <RightDiv>
          <div>
            <h2>Contact Information</h2>
            <h5>Fill up the form and send me your message or contact through below details</h5>
            <p><a href="tel:+2349030894433">(+234) 9030 8944 33</a></p>
            <p><a href="mailto:obasyemeka@gmail.com">obasyemeka@gmail.com</a></p>
          </div>
        

          <div id='contactIcons'>
            <a href="https://github.com/Chumexxx"> <FaGithub color='white' size={30}/> </a>
            <a href="www.linkedin.com/in/chukwuemekaobasi"> <FaLinkedin  color='white' size={30}/> </a>
            <a href=""> <FaInstagram  color='white' size={30}/> </a>
            <a href="https://x.com/Esquire__Daniel"> <FaXTwitter  color='white' size={30}/> </a>
          </div>

          <a href="https://drive.google.com/file/d/1qFseJRtqVLQgVL422ryESxQSo6awGKPQ/view?usp=sharing">
            <div id='resume'>
              <HiArrowDownTray size={30}/>
              <h3>RESUME</h3>
            </div>
          </a>
        
        </RightDiv>
      </ContactDiv>
      </Wrapper>
    </Container>
  )
}

export default Contact


const Container = styled.div`
  min-width: 100%;
  margin-top: 150px;

  h1{
    font-size: 50px;

  @media (max-width: 550px) {
    font-size: 30px;
    text-align: center;
    }
  }

`

const Wrapper = styled.div`
  min-width: 85%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ContactDiv = styled.div`
  margin-top: 100px;
  width: 1100px;
  border: 1px solid white;
  border-radius: 10px;
  background-color: #18181B;
  padding: 20px;
  display: flex;
  gap: 30px;
  justify-content: space-between;

  @media (max-width: 1650px) {
      flex-wrap: wrap;
    }

  @media (max-width: 800px) {
      flex-wrap: wrap;
    }

  @media (max-width: 1225px) {
    flex-wrap: wrap;
    width: 500px;
  }

  @media (max-width: 550px) {
    width: 300px;
  }

  @media (max-width: 375px) {
    width: 300px;
  }
`

const LeftDiv = styled.div`
  width: 500px;
  height: 500px;

  @media (max-width: 375px) {
    width: 300px;
  }

  @media (max-width: 550px) {
    width: 300px;
  }


  h1{
    margin-top: 15px;
    margin-bottom: 15px;
  }

  h2{
    margin-top: 0;
  }

  form{
  display: flex;
  flex-direction: column;
  gap: 43px;
  }

  #jD{
    display: flex;
    justify-content: space-between;

    .john{
        height: 20px;
        width: 210px;
        border-radius: 5px;
        border: none;
        padding: 15px;

        @media (max-width: 375px) {
          width: 100px;
          }

        @media (max-width: 550px) {
        width: 100px;
        }
    }
  }

  #email{
    width: 470px;
    padding: 15px;
    border-radius: 5px;
    border: none;

    @media (max-width: 375px) {
      width: 270px;
    }

    @media (max-width: 550px) {
      width: 270px;
    }
  }

  #tA{
    width: 470px;
    height: 100px;
    padding: 15px;
    border-radius: 5px;
    border: none;

    @media (max-width: 375px) {
      width: 270px;
      height: 80px;
    }

    @media (max-width: 550px) {
      width: 270px;
      height: 80px;
    }
  }

  #button{
    width: 180px;
    height: 50px;
    display: flex;
    justify-content: center;
    text-align: center;
    padding: 20px;
    border-radius: 5px;
    border: none;
  }

  #button:hover{
        transform: scale(1.1);
    }
`

const RightDiv = styled.div`
  width: 500px;
  height: 440px;
  border-radius: 5px;
  border: none;
  background-color: #27272A;
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  #contactIcons{
    display: flex;
    align-items: center;
    gap: 20px;

    a:hover{
      transform: scale(1.5);
    }
  }

  a{
    text-decoration: none;
    color: white;
  }

  #resume{
    width: 150px;
    height: 50px;
    background-color: #0C0C0D;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    cursor: pointer;
  }
`
