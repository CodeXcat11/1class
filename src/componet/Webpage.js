import React from 'react'


function Webpage() {
  return (
    <div>

        {/* here is navbar start */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>

      </form>
    </div>
  </div>
</nav>
        {/* here is navbar end */}
        {/* here is body start */}

        <div id="cards">
            <div className="card" ><img src="/watch.jpg" alt="hh"/> </div>
            <div className="card"><img src='/media/watch2.jpg' alt='ss' /> </div>
            <div className="card"><img src='/media/watch3.jpg' alt='ss' /></div>
            <div className="card"><img src='/media/watch4.jpg' alt='ss' /></div>
            
        </div>
        {/* here is body end */}


         {/* here is footer start */}
        <div id="footer">
    <span>Created by Salman Khan. For more go to @<a href="">SalmanKhan.com</a></span>
</div>
         {/* here is footer end */}

    </div>
  )
}

export default Webpage