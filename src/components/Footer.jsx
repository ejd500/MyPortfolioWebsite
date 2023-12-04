import "../styles/footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';



const Footer = () => {
  return (
    <div id="footer">
        <div id="social-media">
            <FontAwesomeIcon icon={faLinkedin} size="2x" className="icon"/>
            <FontAwesomeIcon icon={faGithub} size="2x" className="icon"/>
            <FontAwesomeIcon icon={faEnvelope} size="2x" className="icon"/>
        </div>
        <div id="copyright">
            &copy; EJD 2023
        </div>
    </div>
  )
}

export default Footer