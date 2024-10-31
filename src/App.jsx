import Header from './Static/Header'
import HomePage from './Pages/HomePage'
import Footer from './Static/Footer'
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  return (
    <>
      <BrowserRouter>
        <Header/> 
          <Routes>

            <Route path='/' element={<HomePage/>}/>
    
          </Routes>
        <Footer/>
      </BrowserRouter>
      
    </>
  )
}

export default App
