import './App.css'
import Boost from './components/Boost'
import Footer from './components/Footer'
import Hero from './components/Hero'
import NavBar from './components/NavBar'
import Shortener from './components/Shortener'
import Stats from './components/Stats'

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Shortener />
      <Stats />
      <Boost />
      <Footer />
    </>
  )
}

export default App
