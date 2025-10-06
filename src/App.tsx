import './App.css'
import "tailwindcss";
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
function App() {

  return (
    <>
      <Navbar></Navbar>
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
    </>
  )
}

export default App
