import Link from "next/link"

const NavBar = () => {
  return (
    <div className="text-light">
        <nav className="navbar navbar-expand-lg navbar-dark">
            <Link href="/"><a className="navbar-brand px-3 fs-2">Shadaj Tiwari</a></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item px-3">
                        <Link href="/about" >
                            <a className="nav-link">About</a>
                        </Link>
                    </li>

                    <li className="nav-item px-3">
                        <Link href="/skills">
                            <a className="nav-link">Skills</a>
                        </Link>
                    </li>

                    <li className="nav-item px-3">
                        <Link href="/contactme" >
                            <a className="nav-link">Contact me</a>
                        </Link>
                    </li>
                </ul>  
            </div>
        </nav>
        <hr />
    </div>

)
}

export default NavBar;