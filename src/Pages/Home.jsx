// import React from 'react'
// import styled from 'styled-components'
// import { MdDarkMode } from "react-icons/md";
// import { MdOutlineDarkMode } from "react-icons/md";
// import { RxHamburgerMenu } from "react-icons/rx";
// import { useRef} from "react"
// import { useState, useEffect } from 'react';
// import { TiArrowDownThick } from "react-icons/ti";
// import { FaGithub } from "react-icons/fa";
// import { FaLinkedin } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";
// import FAQ from '../assets/FAQWebpageImage.png' 
// import Funiro from '../assets/FuniroWebpageImage.png'
// import Nexcent from '../assets/NexcentWebpageImage.png'
// import Countries from '../assets/CountriesWebpage.png'
// import { IoIosArrowRoundForward } from "react-icons/io";
// import ECommerceAPI from "../assets/E-CommerceAPI.png"
// import ModernLibraryAPI from "../assets/ModernLibraryAPI.png"
// import FinSharkAPI from "../assets/FinSharkAPI.png"


// const Home = () => {
//     // const Home = useRef(null)
//     // const Projects = useRef(null)
//     // const Skills = useRef(null)
//     // const Contact = useRef(null)

//     // const scrollToHome = (elementRef) => {
//     //     window.scrollTo({
//     //         top: elementRef.current.offsetTop,
//     //         behavior: 'smooth',
//     //     })
//     // }

//     // const scrollToProjects = () => {
//     //     window.scrollTo({
//     //         top: elementRef.current.offsetTop,
//     //         behavior: 'smooth',
//     //     })
//     // }

//     // const scrollSkills = () => {
//     //     window.scrollTo({
//     //         top: elementRef.current.offsetTop,
//     //         behavior: 'smooth',
//     //     })
//     // }

//     // const scrollToContact = () => {
//     //     window.scrollTo({
//     //         top: elementRef.current.offsetTop,
//     //         behavior: 'smooth',
//     //     })
//     // }

//     // const [home, setHome] = useState("Home")

//     // const [sideBar, setSideBar] = useState(false)
//     // const [isScrolled, setIsScrolled] = useState(false);

//     // useEffect(() => {
//     //     const handleScroll = () => {
//     //         setIsScrolled(window.scrollY > 50);

//     //         const sections = document.querySelectorAll('section');
//     //         sections.forEach(section => {
//     //             const rect = section.getBoundingClientRect();
//     //             if (rect.top >= 0 && rect.top <= 150) {
//     //                 setActiveSection(section.id);
//     //             }
//     //         });
//     //     };

//     // const PyramidCard = () => {
//     //     const [scale, setScale] = useState(1);
//     //     const containerRef = useRef(null);
      
//     //     useEffect(() => {
//     //       const handleScroll = () => {
//     //         if (!containerRef.current) return;
      
//     //         const rect = containerRef.current.getBoundingClientRect();
//     //         const scrollPercentage = rect.top / window.innerHeight;
            
//     //         // Calculate scale based on scroll position
//     //         // Starts at 0.5 scale, grows to 1.5 scale as you scroll up
//     //         let newScale = 1 - scrollPercentage * 0.5;
//     //         newScale = Math.max(0.5, Math.min(1.5, newScale));
            
//     //         setScale(newScale);
//     //       };
      
//     //       window.addEventListener('scroll', handleScroll);
//     //       handleScroll(); // Initial calculation
      
//     //       return () => window.removeEventListener('scroll', handleScroll);
//     //     }, [])
    

//     const handleSideBar = () => {
//         setSideBar(!sideBar);
//     };

//   return (
//     <>
//         {/* {!sideBar && ( */}
//             <Container>

//                 <Header>

//                     <Name>
//                         <h5><span>&nbsp;CHUKWUEMEKA&nbsp;</span></h5>
//                     </Name>

//                     <NavBar>

//                         {/* <Link style={{ textDecoration: "none" , color: "white"}} to="/"> */}
//                             <HomeDiv>
//                                 <div>
//                                 <h2 onClick={() => scrollToHome(Home)}>Home</h2>
//                                 </div>
//                             </HomeDiv>
//                         {/* </Link> */}

//                         {/* <Link style={{ textDecoration: "none" , color: "white"}} to="/projects"> */}
//                             <ProjectDiv>
//                                 <div>
//                                 <h2 onClick={() => scrollToHome(Projects)}>Projects</h2>
//                                 </div>
//                             </ProjectDiv>
//                         {/* </Link> */}

//                         {/* <Link style={{ textDecoration: "none" , color: "white"}} to="/skills"> */}
//                             <SkillsDiv>
//                                 <div>
//                                 <h2>Skills</h2>
//                                 </div>
//                             </SkillsDiv>
//                         {/* </Link> */}
                        
//                         {/* <Link style={{ textDecoration: "none" , color: "white"}} to="/contact"> */}
//                             <ContactDiv>
//                                 <div>
//                                 <h2>Contact</h2>
//                                 </div>
                               
//                             </ContactDiv>
//                         {/* </Link> */}

//                     </NavBar>

//                     <LightModeToggle>
//                         <MdDarkMode size={40}/>
//                     </LightModeToggle>

//                     <DarkModeToggle id='themeToggle'>
//                         <MdOutlineDarkMode size={40}/>
//                     </DarkModeToggle>

//                     <HamburgerDiv onClick={handleSideBar}>
//                         <RxHamburgerMenu size={30}/>
//                     </HamburgerDiv>

//                 </Header>

//                 <Hero>
//                     <h1>Chukwuemeka Obasi</h1>
//                     <p>Full-Stack Software Developer . AI Enthusiast .  Legal Tech</p>
//                     <p style={{color: "white"}}>Dynamic Full-Stack Engineer with expertise in building and deploying robust web applications. Skilled at architecting innovative solutions through both front-end and back-end technologies. Creates responsive, user-focused interfaces backed by scalable systems that deliver high performance. Driven by continuous learning and software quality excellence.</p>

//                     <div style={{display: "flex" , alignItems: "center", gap: "10px"}}>
//                         <p>Connect with me here!</p>
//                         <div style={{width: "30px", height: "35px", backgroundColor: "#00A6ED", display: "flex" , alignItems: "center" , borderRadius: "5px"}}>
//                             <TiArrowDownThick size={30}/>
//                         </div>
//                     </div>

//                     <div style={{display: "flex" , alignItems: "center", gap: "20px"}}>
//                         <a  href="https://github.com/Chumexxx"> <FaGithub color='white' size={30}/> </a>
//                         <a href="www.linkedin.com/in/chukwuemekaobasi"> <FaLinkedin  color='white' size={30}/> </a>
//                         <a href=""> <FaInstagram  color='white' size={30}/> </a>
//                         <a href="https://x.com/Esquire__Daniel"> <FaXTwitter  color='white' size={30}/> </a>
//                     </div>
                    
//                 </Hero>

//                 <ProjectsSection>
//                     <h1>Projects</h1>

//                     <ProjectList>
//                         <CardDiv>

//                             <Card1>
//                                 <img src={FAQ} alt="" />

//                                 <h2>FAQ WebPage</h2>
//                                 <h5>Enables users look through a wide list of potential <br />questions to get answers quickly.</h5>

//                                 <IconsDiv>
//                                     <a href="https://aof-scholars-faq.vercel.app/">
//                                     <div style={{backgroundColor: "white" , color: "black" , width: "130px" , height: "45px", borderRadius: "10px" , display: "flex" , justifyContent: "center" , alignItems: "center", gap: "10px"}}>
//                                         <h5 style={{fontSize: "15px"}}>Website</h5>
//                                         <IoIosArrowRoundForward size={40} color='black'/>
//                                     </div>
//                                     </a>

//                                     <a  href="https://github.com/Chumexxx/AOF-Scholars-FAQ"> 
//                                     <div style={{backgroundColor: "white" , color: "black" , width: "130px" , height: "45px", borderRadius: "10px" , display: "flex" , justifyContent: "center" , alignItems: "center", gap: "10px"}}>
//                                         <h5 style={{fontSize: "15px"}}>Github</h5>
//                                         <FaGithub size={30} color='black'/>
//                                     </div>
//                                   </a>

//                                 </IconsDiv>
//                             </Card1>
                           
//                         </CardDiv>

//                         <CardDiv>
                        
//                         <Card1>
//                              <img src={Funiro} alt="" />     
//                                 <h2>Funiro WebPage</h2>
//                                 <h5>An E-Commerce webpage which allows users acccess to a wide variety of furnitures to chose from.</h5>

//                                 <IconsDiv>
//                                     <a href="https://funiro-web-page.vercel.app/">
//                                     <div style={{backgroundColor: "white" , color: "black" , width: "130px" , height: "45px", borderRadius: "10px" , display: "flex" , justifyContent: "center" , alignItems: "center", gap: "10px"}}>
//                                         <h5 style={{fontSize: "15px"}}>Website</h5>
//                                         <IoIosArrowRoundForward size={40} color='black'/>
//                                     </div>
//                                     </a>

//                                     <a  href="https://github.com/Chumexxx/Funiro-WebPage"> 
//                                     <div style={{backgroundColor: "white" , color: "black" , width: "130px" , height: "45px", borderRadius: "10px" , display: "flex" , justifyContent: "center" , alignItems: "center", gap: "10px"}}>
//                                         <h5 style={{fontSize: "15px"}}>Github</h5>
//                                         <FaGithub size={30} color='black'/>
//                                     </div>
//                                   </a>

//                                 </IconsDiv>
//                             </Card1>
//                         </CardDiv>

//                         <CardDiv>
                       
//                         <Card1>
//                         <img src={Nexcent} alt="" />
//                                 <h2>Nexcent WebPage</h2>
//                                 <h5>A webpage where talent seekers can come to hire talents to help produce adequate projects.</h5>

//                                 <IconsDiv>
//                                     <a href="https://nexcent-web-page.vercel.app/">
//                                     <div style={{backgroundColor: "white" , color: "black" , width: "130px" , height: "45px", borderRadius: "10px" , display: "flex" , justifyContent: "center" , alignItems: "center", gap: "10px"}}>
//                                         <h5 style={{fontSize: "15px"}}>Website</h5>
//                                         <IoIosArrowRoundForward size={40} color='black'/>
//                                     </div>
//                                     </a>

//                                     <a  href="https://github.com/Chumexxx/Nexcent-WebPage"> 
//                                     <div style={{backgroundColor: "white" , color: "black" , width: "130px" , height: "45px", borderRadius: "10px" , display: "flex" , justifyContent: "center" , alignItems: "center", gap: "10px"}}>
//                                         <h5 style={{fontSize: "15px"}}>Github</h5>
//                                         <FaGithub size={30} color='black'/>
//                                     </div>
//                                   </a>

//                                 </IconsDiv>
//                             </Card1>
//                         </CardDiv>

//                         <CardDiv>

//                             <Card1>
//                                 <img src={Countries} alt="" />

//                                 <h2>Countries Search Website</h2>
//                                 <h5>Enables users look through a wide list of potential <br />questions to get answers quickly.</h5>

//                                 <IconsDiv>
//                                     <a href="https://all-countries-website-beta.vercel.app/">
//                                     <div style={{backgroundColor: "white" , color: "black" , width: "130px" , height: "45px", borderRadius: "10px" , display: "flex" , justifyContent: "center" , alignItems: "center", gap: "10px"}}>
//                                         <h5 style={{fontSize: "15px"}}>Website</h5>
//                                         <IoIosArrowRoundForward size={40} color='black'/>
//                                     </div>
//                                     </a>

//                                     <a  href="https://github.com/Chumexxx/All-Countries-Website"> 
//                                     <div style={{backgroundColor: "white" , color: "black" , width: "130px" , height: "45px", borderRadius: "10px" , display: "flex" , justifyContent: "center" , alignItems: "center", gap: "10px"}}>
//                                         <h5 style={{fontSize: "15px"}}>Github</h5>
//                                         <FaGithub size={30} color='black'/>
//                                     </div>
//                                   </a>

//                                 </IconsDiv>
//                             </Card1>
                           
//                         </CardDiv>

//                         <CardDiv>

//                             <Card1>
//                                 <img src={ECommerceAPI} alt="" />

//                                 <h2>E-Commerce Application API</h2>
//                                 <h5>Fully reliable server side API that helps you interract eith the frobntend. Conbtains different schemas for modern day e-commerce application. Built with ASP.NETCore on the .NET stack.</h5>

//                                 <IconsDiv>
//                                     <a  href="https://github.com/Chumexxx/.NET-E-Commerce-API"> 
//                                         <div style={{backgroundColor: "white" , color: "black" , width: "130px" , height: "45px", borderRadius: "10px" , display: "flex" , justifyContent: "center" , alignItems: "center", gap: "10px"}}>
//                                             <h5 style={{fontSize: "15px"}}>Github</h5>
//                                             <FaGithub size={30} color='black'/>
//                                         </div>
//                                   </a>

//                                 </IconsDiv>
//                             </Card1>
                           
//                         </CardDiv>

//                         <CardDiv>

//                             <Card1>
//                                 <img src={ModernLibraryAPI} alt="" />

//                                 <h2>E-Library Application API</h2>
//                                 <h5>Fully reliable server side API that helps you interract eith the frontend. Contains different schemas for modern day e-library application. Built with ASP.NETCore on the .NET stack. <br /> This API is built with the future of Libraries in mind. A Modern day library API that supportd the frontend to give users the best experience.</h5>

//                                 <IconsDiv>
//                                     <a  href="https://github.com/Chumexxx/.NET-E-Library-API"> 
//                                         <div style={{backgroundColor: "white" , color: "black" , width: "130px" , height: "45px", borderRadius: "10px" , display: "flex" , justifyContent: "center" , alignItems: "center", gap: "10px"}}>
//                                             <h5 style={{fontSize: "15px"}}>Github</h5>
//                                             <FaGithub size={30} color='black'/>
//                                         </div>
//                                   </a>

//                                 </IconsDiv>
//                             </Card1>
                           
//                         </CardDiv>

                        
//                         <CardDiv>

//                             <Card1>
//                                 <img src={FinSharkAPI} alt="" />

//                                 <h2>FinShark Stock Market Application API</h2>
//                                 <h5>Fully reliable server side API that helps you interract eith the frontend. Contains different schemas for modern day e-library application. Built with ASP.NETCore on the .NET stack.</h5>

//                                 <IconsDiv>
//                                     <a  href="https://github.com/Chumexxx/FinShark_API"> 
//                                         <div style={{backgroundColor: "white" , color: "black" , width: "130px" , height: "45px", borderRadius: "10px" , display: "flex" , justifyContent: "center" , alignItems: "center", gap: "10px"}}>
//                                             <h5 style={{fontSize: "15px"}}>Github</h5>
//                                             <FaGithub size={30} color='black'/>
//                                         </div>
//                                   </a>

//                                 </IconsDiv>
//                             </Card1>
                           
//                         </CardDiv>

//                     </ProjectList>

//                 </ProjectsSection>

//             </Container>
        

//         {/* {sideBar && <SideBar sideBar={sideBar} setSideBar={setSideBar} />} */}
//     </>
//   )
// }

// export default Home

// const Container = styled.div`
//     width: 100%;
// `

// const Header = styled.div`
//     width: 100%;
//     height: 100px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     justify-content: space-between;
// `

// const Name = styled.div`
//     height: 70px;
//     display: flex;
//     justify-content: center;
//     align-items: center;

//     cursor: pointer;
    
//     h5{
//         font-size: 30px;
//         color: transparent;
//         -webkit-text-stroke: 1px white;
//         position: relative;
//         overflow: hidden;
//         display: inline-block;
//     }

//     h5:hover::before{
//         content: '';
//         position: absolute;
//         top: 0;
//         left: -100%;
//         width: 100%;
//         height: 100%;
//         background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.9), transparent);
//         animation: shine 3s forwards;
//         filter: brightness(1.5); 
//     }

//     @keyframes shine {
//     0% {
//         left: -100%;
//     }
//     100% {
//         left: 100%;
//     }
// }

// `

// const NavBar = styled.div`
//     width: 600px;
//     height: 70px;
//     display: flex;
//     justify-content: center;
//     justify-content: space-evenly;
//     align-items: center;
//     background-color: #242121;
//     border: 1px solid white;
//     border-radius: 10px;
//     margin-left: 50px;
//     margin-right: 50px;
//     cursor: pointer;

//     @media (max-width: 800px) {
//         display: none;
//     }

// `

// const HomeDiv = styled.div`
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     border-radius: 5px;
//     border: none;
//     width: 80px;
//     height: 40px;

//     div{
//         display: flex;
//         justify-content: center;
//         align-items: center;
//         border-radius: 5px;
//         border: none;
//         width: 80px;
//         height: 40px;
//     }

//     div:hover{
//         background-color: #352f2f;
//     }

// `

// const ProjectDiv = styled.div`
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     border-radius: 5px;
//     border: none;
//     width: 110px;
//     height: 40px;

//     div{
//         display: flex;
//         justify-content: center;
//         align-items: center;
//         border-radius: 5px;
//         border: none;
//         width: 80px;
//         height: 40px;
//     }

//     div:hover{
//         background-color: #352f2f;
//     }
// `

// const SkillsDiv = styled.div`
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     border-radius: 5px;
//     border: none;
//     width: 80px;
//     height: 40px;

//     div{
//         display: flex;
//         justify-content: center;
//         align-items: center;
//         border-radius: 5px;
//         border: none;
//         width: 120px;
//         height: 40px;
//     }

//     div:hover{
//         background-color: #352f2f;
//     }
// `

// const ContactDiv = styled.div`
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     border-radius: 5px;
//     border: none;
//     width: 110px;
//     height: 40px;

//     div{
//         display: flex;
//         justify-content: center;
//         align-items: center;
//         border-radius: 5px;
//         border: none;
//         width: 80px;
//         height: 40px;
//     }

//     div:hover{
//         background-color: #352f2f;
//     }
// `

// const LightModeToggle = styled.div`
//     width: 80px;
//     height: 50px;
//     border: none;
//     border-radius: 5px;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     background-color: #242121;
//     display: none;
// `

// const DarkModeToggle = styled.div`
//     width: 60px;
//     height: 50px;
//     border: none;
//     border-radius: 5px;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     background-color: #242121;
// `

// const HamburgerDiv = styled.div`
//     width: 60px;
//     height: 50px;
//     border: none;
//     border-radius: 5px;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     background-color: #242121;
//     display: none;

//     @media (max-width: 800px) {
//         display: flex;
//     }
// `

// const Hero = styled.div`
//     margin-top: 120px;
//     width: 800px;
//     height: 70vh;
//     display: flex;
//     flex-direction: column;

//     h1{
//         font-size: 50px;
//         line-height: 10px;
//     }

//     p{
//         font-size: 25px;
//         font-weight: 300;
//         color: #b6b0b0;
//     }

//     h5{
//         font-size: 20px;
//     }

//     a:hover{
//         transform: scale(1.5);
//     }

// `

// const ProjectsSection = styled.div`
//     width: 100%;

//     h1{
//         font-size: 50px;
//     }



// `

// const ProjectList = styled.div`
//     display: flex;
//     flex-wrap: wrap;
//     gap: 50px;

//     img{
//         width: 400px;
//         /* height: 200px; */
//         border-radius: 10px;
//     }

//     @media (max-width: 800px) {
//         flex-wrap: wrap;
//     }

// `

// const CardDiv = styled.div`
//     background-color: #18181B;
//     width: 400px;
//     height: 460px;
//     border-radius: 10px;
//     border: 1px solid white;
//     padding: 15px;
//     /* position: sticky; */
//   /* top: 20vh;
//   transform-origin: center;
//   transform: ${({ scale }) => `scale(${scale})`};
//   transition: transform 0.1s ease-out; */

//     h2{
//         font-size: 30px;
//     }
// `

// const Card1 = styled.div`

    
// `

// const IconsDiv = styled.div`
    
//     display: flex;
//     gap: 20px;
//     justify-content: center;
//     a{
//         text-decoration: none;
//     }

//     div:hover{
//         transform: scale(1.1);
//     }
// `

