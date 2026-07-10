import Contact from "./Components/contact";
import Projects from "./Components/projects";
import Resume from "./Components/resume";
import Home from "./Components/home";
import Navbar from "./Components/navbar";
import Footer from "./Components/footer"
import { BrowserRouter,Routes,Route } from "react-router-dom";
import "./App.css";

export default function App(){
  return(
    <div className="app mt-4 p-3 border border-white rounded-4 shadow-lg mx-auto mb-4">
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/projects" element={<Projects/>}/>
      </Routes>
    </div>
  )
}
