import GlobalStyle from './styles/GlobalStyle'
import { useTheme } from './hooks/useTheme'
import Nav from './components/Nav'
import Hero from './components/Hero'
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
      <a className="skip-link" href="#work">Skip to content</a>
      <Nav theme={theme} onToggleTheme={toggle} />
      <main>
        <Hero />
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
