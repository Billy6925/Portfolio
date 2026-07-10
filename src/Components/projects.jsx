export default function Projects(){
    return(
        <>
        <section id="projects" className="projects text-secondary px-5 align-items-center py-2">
            <h2 className="">Featured Projects</h2>
            <div>
                <h3>ePharm</h3>
                <p>A full-stack online pharmacy featuring secure authentication, product management, shopping cart functionality, reviews, and M-PESA payment integration.</p>
                <video controls width="80%">
                    <source src="/videos/epharm-demo.mp4" type="video/mp4"/>
                </video>
            </div>
            <div>
                <h3>Ajali</h3>
                <p>An emergency incident reporting platform that enables users to report accidents with images, videos, and location data while providing administrators with tools to manage incidents efficiently.</p>
                <video controls width="80%" className="mx-auto">
                    <source src="/videos/ajali-demo.mp4" type="video/mp4"/>
                </video>
            </div>
            <h4>Currently learning</h4>
            <p>I'm continuously expanding my skills in data structures and algorithms, system design, deployment, and modern full-stack development practices.</p>
            <p>Let's build something impactful together.</p>
        </section>
        </>
    )
}