import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
	return (
		<div className="container mx-auto md:px-20">
			<Navbar />
			<Home />
			<Projects />
			<About />
			<Contact />
			<Footer />
		</div>
	);
}

export default App;
