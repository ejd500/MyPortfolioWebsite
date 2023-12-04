import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {Routes} from "react-router-dom"
import Home from "./components/Home"
import "./App.css"
import About from "./components/About"

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Home/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </Router>
  );
}

export default App;
