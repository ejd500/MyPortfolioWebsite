import "../styles/nav.css"
import {Link} from "react-router-dom"

const Nav = () => {
  return (
    <div id="header">
        <div id="logo">
            EJD
        </div>
        <div id="nav">
            <Link to="/" className="nav-link"><div id="home">Home</div></Link>
            <Link to="/about" className="nav-link"><div id="about">About</div></Link>
            <Link to="/about" className="nav-link"><div id="projects">Projects</div></Link>
            <Link to="/about" className="nav-link"><div id="contact">Contact</div></Link>
        </div>
    </div>
  )
}

export default Nav