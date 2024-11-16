import {Routes,Route} from 'react-router-dom'
import Auth from './pages/Auth'
import LandingPage from './pages/LandingPage'
import Dashboard from './pages/Dashboard'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/login' element={<Auth/>}/>
        <Route path='/register' element={<Auth insideRegister={true}/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
