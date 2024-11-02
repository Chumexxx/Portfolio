import HomePage from './Pages/HomePage';
import Footer from './Static/Footer';
import Header from './Static/Header';

function App() {

  return (
    <>
      {/* <BrowserRouter>
        <Header/> 
          <Routes>

            <Route path='/' element={<HomePage/>}/>
    
          </Routes>
        <Footer/>
      </BrowserRouter> */}
      <Header/>
      <HomePage/>
      <Footer/>
    </>
  )
}

export default App
