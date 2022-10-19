import Navbar from './Navbar';
import Home from './Home';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';

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
