import { useContext } from 'react'
import { ThemeContext } from '../../contexts/theme'
import Header from '../../components/Header/Header'
import About from '../../components/About/About'
import Research from '../../components/Research/Research'
import Projects from '../../components/Projects/Projects'
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop'
import Contact from '../../components/Contact/Contact'
import Footer from '../../components/Footer/Footer'
import './Home.css'

const Home = () => {
  const [{ themeName }] = useContext(ThemeContext)

  return (
    <div id='top' className={`${themeName} home`}>
        <Header />
        <main>
            <About />
            <Research />
            <Projects />
            <Contact />
        </main>
        <ScrollToTop />
        <Footer />
    </div>
  )
}

export default Home