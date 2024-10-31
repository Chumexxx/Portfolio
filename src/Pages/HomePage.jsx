import React from 'react'
import Contact from '../Components/Contact'
import Hero from '../Components/Hero'
import Project from '../Components/Project'
import Skill from '../Components/Skill'
import {Link} from "react-router-dom"

const HomePage = () => {
  return (
    <div>
      <Hero/>
      <Project/>
      <Skill/>
      <Contact/>
    </div>
  )
}

export default HomePage
