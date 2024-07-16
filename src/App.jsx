import './App.css'
import Cronograma from './components/Cronograma/Cronograma'
import FAQ from './components/FAQ/FAQ'
import Footer from './components/Footer/Footer'
import Fotos from './components/Fotos/Fotos'
import Intro from './components/Intro/Intro'
import Live from './components/Live/Live'
import Navbar from './components/Navbar/Navbar'
import Sobre from './components/Sobre/Sobre'

function App() {

  return (
    <section>
      <nav>
        <Navbar />
      </nav>
      <main>
      <Intro/>
      <Sobre/>
      <Cronograma/>
      <Live/>
      <Fotos/>
      <FAQ/>

      </main>
      <footer>
        <Footer />
      </footer>
    </section>
  )
}

export default App
