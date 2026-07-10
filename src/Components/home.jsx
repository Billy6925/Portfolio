import { Link } from "react-router-dom";

export default function Home(){
    return(
        <div className="container py-4">
            <div className="home px-5 row align-items-center">
                <div className="col-lg-7">
                    <h3 className="text-success fw-normal">Hi, I'm Billy Eskein</h3>
                    <h4 className="text-success">Full-stack Software Developer.</h4>
                    <p className="text-secondary">I build full-stack applications with React and Flask.</p>
                    <h5 className="text-success">What do I do</h5>
                    <ul className="list-unstyled text-secondary">
                        <li>✓ Build responsive frontends with React</li>
                        <li>✓ Develop secure REST APIs with Flask</li>
                        <li>✓ Design relational databases with SQLAlchemy</li>
                        <li>✓ Implement JWT authentication and role-based access</li>
                        <li>✓ Integrate payment solutions such as M-PESA</li>
                    </ul>

                    <section className="justify-content-between">
                        <a href="/resume/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-success mx-2">Download Resume</a>
                        <Link to="/contact" className="btn btn-secondary m-2">Contact Me</Link>
                    </section>
                </div>

                <div className="col-lg-5 text-center">
                    <img src="/videos/billy.jpeg" alt="Billy Eskein" style={{width:"210px"}} className="border border-success rounded-3 shadow-lg"/>
                </div>

            </div>
        </div>
    )
}