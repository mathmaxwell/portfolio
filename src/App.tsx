import { ThemeProvider } from './contexts/ThemeContext'
import { LanguageProvider } from './contexts/LanguageContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
	return (
		<ThemeProvider>
			<LanguageProvider>
				<Navbar />
				<Hero />
				<About />
				<Projects />
				<Skills />
				<Contact />
				<Footer />
			</LanguageProvider>
		</ThemeProvider>
	)
}

export default App
