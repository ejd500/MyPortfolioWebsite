import image1 from "../Images/image1.png"
import "../styles/home.css"
import PrimaryButton from "./PrimaryButton"
import SecondaryButton from "./SecondaryButton"

const Home = () => {
  return (
    <div className="homepage">

        <div id="intro">
            <h1>Hello, my name <br/> is Ellen Dalton</h1>

            <p>
                I am a software development student, 
                with an expected graduation date of August 2024. 
                To learn more about me and my projects, please see 
                the links below.
            </p>
            <div id="buttons">
                <PrimaryButton text="About" color="white" backgroundColor="#2C3261"/>
                <SecondaryButton text="Projects" backgroundColor="white" color="#2C3261"/>
                <PrimaryButton text="Contact" backgroundColor="#2C3261" color="white"/>
            </div>
        </div>
        <div id="profilepicbox">
            <img src={image1} alt="profilepicture" id="profilepic"/>
        </div>
    
    </div>
  )
}

export default Home