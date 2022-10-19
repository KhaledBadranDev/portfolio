import Navbar from './Navbar';
import Home from './Home';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';

import useTheme from "../hooks/useTheme"


function App() {
    const darkMode = useTheme()

	return (
        	<div className={darkMode ? "dark" : ""}>
				<div className="transition-all duration-500 ease-in bg-white dark:bg-[#181818]">
					<Navbar />
					<Home />
					<Projects />
					<About />
					<Contact />
					<Footer />
				</div>
			</div>
	);

}
export default App;
