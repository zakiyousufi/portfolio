function Navbar() {
  return (
    <div className="navbar">
      <div className="d-flex justify-content-end sub-nav">
        <div className="nav-item p-3">
          <a className="sub-info" rel="noreferrer" href="#home">Home</a>
        </div>
        <div className="nav-item p-3">
          <a className="sub-info" rel="noreferrer" href="#about">About</a>
        </div>
        <div className="nav-item p-3">
          <a className="sub-info" rel="noreferrer" href="#recommendations">Recommendations</a>
        </div>
        <div className="nav-item p-3">
          <a className="sub-info" rel="noreferrer" href="#projects">Projects</a>
        </div>
        <div className="nav-item p-3">
          <a className="sub-info" rel="noreferrer" href="#contact">Contact</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
