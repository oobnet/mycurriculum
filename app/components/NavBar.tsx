
export default function  NavBar(){
    return (
        <nav className="navbar navbar-expand-lg bg-dark text-white">
          <div className="container-fluid">
            <a className="navbar-brand text-white" href="https://www.linkedin.com/in/odairoliveirabrito/" target="_blank">OOB</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item ">
                <a href="https://www.linkedin.com/in/odairoliveirabrito/" className="nav-link text-white" target="_blank">linkedin</a>
                </li>
                <li className="nav-item">
                  <a href="https://github.com/oobnet" className="nav-link text-white" target="_blank">Git</a>
                </li>
             
              
              </ul>
            </div>
          </div>
        </nav>
    )
}


