import { Link,useLocation } from "react-router-dom"

export default function Navbar(){
    const location=useLocation();

    return(
        <nav className="navbar d-flex justify-content-end align-items-center p-1 border-bottom border-success mt-0">
            {location.pathname !== "/" && <Link to="/" className="text-decoration-none text-success px-3">Home</Link>}
            {location.pathname !== "/contact" && <Link to="/contact" className="text-decoration-none text-success">Contact Me</Link>}
            {location.pathname !== "/projects" && <Link to="/projects" className="text-decoration-none text-success px-3">Projects</Link>}
        </nav>
    )
}