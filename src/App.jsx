
import './App.css'
import Contact from './components/Contact'
import Header from './components/Header'
import Home from './components/Home'
import Projects from './components/Projects'

function App() {

  return (
    <div>
        <Header />
        <div className='home_card'>
        <Home />
        </div>
        <div className='projects_container' id="projects">
        <h2 className="projects__title">Proyectos</h2>
        <Projects />
        </div>
        <Contact />
    </div>
  )
}

export default App
