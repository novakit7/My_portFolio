import { Link } from 'react-router'
export default function Navbar() {
    const closeMenu = () => {
    const toggler = document.querySelector(".navbar-toggler");
    if (toggler?.getAttribute("aria-expanded") === "true") {
        if (toggler instanceof HTMLElement) {
            toggler.click();
        }   
    }
    };
    return (
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={{ backgroundColor: "#282C33" }}>
            <div className="container-fluid">
                <Link className="nav-link active" style={{ color: "white" }} to="/">
                <span className="has">{"<!>"}</span>I Build, Therefore I Am</Link>
                <a className="navbar-toggler" type="button"
                    data-bs-toggle="collapse" data-bs-target="#navbarNav" 
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fa-solid fa-bars"></i>
                </a>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link active mx-3" onClick={closeMenu} to="project"><span className="has">#</span>Projects</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active mx-3" onClick={closeMenu} to="about"><span className="has">#</span>About-me</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active mx-3" onClick={closeMenu} to="contact"><span className="has">#</span>contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
