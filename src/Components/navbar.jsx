import { Link,useLocation } from "react-router-dom"
import "../App.css";

export default function Navbar(){
    const location=useLocation();

    return(
        <nav className="navbar d-flex justify-content-end align-items-center p-1 border-bottom border-success mt-0">
            {location.pathname !== "/" && <Link to="/" className="view text-decoration-none text-success px-3">Home</Link>}
            {location.pathname !== "/contact" && <Link to="/contact" className="view text-decoration-none text-success">Contact Me</Link>}
            {location.pathname !== "/projects" && <Link to="/projects" className="view text-decoration-none text-success px-3">Projects</Link>}
        </nav>
    )
}