import AnchorLink from 'react-anchor-link-smooth-scroll'

const Navbar = () => {
    return(
        <nav className="bg-cyan-500 py-3">    
            <ul className="flex place-content-center">
                <li className="mx-2">Home</li>
                <li className="mx-2">Projects</li>
                <AnchorLink  href="#about">
                    <li className="mx-2">About</li>
                </AnchorLink>
                <li className="mx-2">Contact</li>
            </ul>
        </nav>
    );
}

export default Navbar