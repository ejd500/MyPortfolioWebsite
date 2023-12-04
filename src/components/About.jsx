import Nav from "./Nav"
import "../styles/about.css"
import PrimaryButton from "./PrimaryButton";
import Footer from "./Footer";

const About = () => {
  return (
    <div>
        <Nav />
        <div id="aboutme">
            <h1>About Me</h1>
            <div className="emptybox"></div>
            <p>
            In 2016, I completed a Bachelor of Social Work degree. I worked as a
            child and youth care worker for 7 years before deciding that social
            work was not for me. After becoming a parent, I created a drop
            shipping website using Wix, where children’s clothing could be sold
            and bought online. I enjoyed the process of creating the website and
            figuring out how to make it work, more than actually maintaining the
            business. This led me to realize that my creativity and drive to solve
            problems could be put to use elsewhere. I applied for the software
            development program at Keyin College, and was accepted almost
            immediately. Since that time, I have excelled in my studies and have
            learned a variety of languages and frameworks. Please feel free to
            browse my projects, review my resume, and contact me with any
            questions you might have. I look forward to connecting!
            </p>
            <PrimaryButton text="Resume" backgroundColor="#2C3261" color="white"/>
            <h1>Skills</h1>
            <div className="emptybox"></div>
            <table>
                <tr>
                    <td>HTML</td>
                    <td>JavaScript</td>
                    <td>CSS</td>
                </tr>
                <tr>
                    <td>GitHub</td>
                    <td>React</td>
                    <td>Python</td>
                </tr>
                <tr>
                    <td>Figma</td>
                    <td></td>
                    <td>Framer</td>
                </tr>
            </table>

        </div>
        <Footer/>
    </div>
  );
}

export default About