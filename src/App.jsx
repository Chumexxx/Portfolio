import GlobalStyle from './styles/GlobalStyle'
import { useTheme } from './hooks/useTheme'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Work from './components/Work'
import Services from './components/Services'
import Stack from './components/Stack'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const { theme, toggle } = useTheme()

  return (
    <>
      <GlobalStyle />
      <a className="skip-link" href="#experience">Skip to content</a>
      <Nav theme={theme} onToggleTheme={toggle} />
      <main>
        <Hero />
        <Experience />
        <Work />
        <Services />
        <Stack />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
