import React from 'react'
import Contact from '../Components/Contact'
import Project from '../Components/Project'
import Skill from '../Components/Skill'
import Hero from '../Components/Hero'
import styled from 'styled-components'

const HomePage = () => {

  return (
    <Container>

      <HeroWrapper id='hero'>
        <Hero/>
      </HeroWrapper>

      <ProjectsWrapper id='projects'>
        <Project/>
      </ProjectsWrapper>

      <SkillsWrapper id='skills'>
        <Skill/>
      </SkillsWrapper>

      <ContactWrapper id='contact'>
        <Contact/>
      </ContactWrapper>

    </Container>
  )
}

export default HomePage

const Container = styled.div`
  
`

const HeroWrapper = styled.div`
  
`

const ProjectsWrapper = styled.div`
  
`

const SkillsWrapper = styled.div`
  
`

const ContactWrapper = styled.div`
  
`


