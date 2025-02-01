import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('currentUser'); 
    navigate('/'); 
  };

  
  const handleHomeRedirect = () => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser) {
      navigate('/welcome'); 
    } else {
      navigate('/'); 
    }
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary rounded" aria-label="Eleventh navbar example">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Horizon Ventures</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarsExample09">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <button className="nav-link active btn" onClick={handleHomeRedirect}>
                  Home
                </button>
              </li>
              <li className="nav-item">
                <button className="nav-link btn" onClick={handleLogout}>
                  Logout
                </button>
              </li>
            </ul>
            <form role="search">
              <input className="form-control" type="search" placeholder="Search" aria-label="Search"/>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
