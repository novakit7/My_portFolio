import { Link } from 'react-router'
export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={{ backgroundColor: "#282C33" }}>
            <div className="container-fluid px-5">
                <Link className="nav-link active" style={{ color: "white" }} to="#"><span className="has">{"<!>"}</span>I Build, Therefore I Am — Kit</Link>
                <button className="navbar-toggler" type="button" 
                    data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link active mx-3" aria-current="page" to="/"><span className="has">#</span>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active mx-3" to="contact"><span className="has">#</span>contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active mx-3" to="project"><span className="has">#</span>Projects</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active mx-3" to="about"><span className="has">#</span>About</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
