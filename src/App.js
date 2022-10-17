import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

import {createContext} from 'react'

export const darkModeContext = createContext()

function App() {
// dark mode home page #181818
	return (
		<div className="container mx-auto md:px-20">
			<darkModeContext.Provider value={true}>
				<Navbar />
				<Home />
				<Projects />
				<About />
				<Contact />
				<Footer />
			</darkModeContext.Provider>
		</div>
	);
}

export default App;
