import Navbar from './components/Navbar'
import LandingPage from './pages/LandingPage'
import About from './pages/About'
import Education from './pages/Education'
import Projects from './pages/Projects'
import Organization from './pages/Organization'
import Skills from './pages/Skills'
import Other from './pages/Other'
import Contact from './pages/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-[#4C5B5C]">
      <Navbar />
      <LandingPage />
      <About />
      <Education />
      <Projects />
      <Organization />
      <Skills />
      <Other />
      <Contact />
    </div>
  );
}



export default App;
